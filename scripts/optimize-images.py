#!/usr/bin/env python3
"""
Optimize Sharma Woodworks public JPG/PNG assets in place.

Usage:
  python3 scripts/optimize-images.py

The script creates optimized copies beside the originals:
  image.jpg -> image.optimized.jpg
  image.png -> image.optimized.png

Review the generated files, then replace originals manually once satisfied.

Requires Pillow:
  python3 -m pip install pillow
"""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

JPEG_QUALITY = 82
PNG_LEVEL = 9
MAX_PHOTO_WIDTH = 1800
MAX_LOGO_WIDTH = 700


def optimize_image(source: Path) -> tuple[Path, int, int]:
    original_size = source.stat().st_size
    with Image.open(source) as image:
        image = image.convert("RGBA") if image.mode in ("RGBA", "LA") else image.convert("RGB")

        max_width = MAX_LOGO_WIDTH if source.name.lower().startswith("logo") else MAX_PHOTO_WIDTH
        if image.width > max_width:
            ratio = max_width / image.width
            image = image.resize(
                (max_width, max(1, round(image.height * ratio))),
                Image.Resampling.LANCZOS,
            )

        output = source.with_name(f"{source.stem}.optimized{source.suffix.lower()}")

        if source.suffix.lower() in (".jpg", ".jpeg"):
            image = image.convert("RGB")
            image.save(output, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        elif source.suffix.lower() == ".png":
            image.save(output, "PNG", optimize=True, compress_level=PNG_LEVEL)
        else:
            return output, original_size, original_size

    return output, original_size, output.stat().st_size


def main() -> None:
    candidates = sorted(
        p for p in PUBLIC.iterdir()
        if p.is_file() and p.suffix.lower() in {".jpg", ".jpeg", ".png"}
        and ".optimized." not in p.name
    )

    if not candidates:
        print("No JPG/PNG images found in public/.")
        return

    print("Sharma Woodworks image optimization")
    print("=" * 44)

    total_before = 0
    total_after = 0

    for source in candidates:
        output, before, after = optimize_image(source)
        total_before += before
        total_after += after
        savings = (1 - after / before) * 100 if before else 0
        print(
            f"{source.name:34} "
            f"{before / 1024:8.0f} KB -> "
            f"{after / 1024:8.0f} KB "
            f"({savings:5.1f}% smaller)"
        )

    print("=" * 44)
    print(f"Total: {total_before / 1024 / 1024:.2f} MB -> {total_after / 1024 / 1024:.2f} MB")
    print()
    print("Review the *.optimized.* files before replacing originals.")


if __name__ == "__main__":
    main()
