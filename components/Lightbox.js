import { useEffect } from 'react';

export default function Lightbox({ work, onClose }) {
  useEffect(() => {
    if (!work) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      className="lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close image viewer">
        <span aria-hidden="true">×</span>
      </button>

      <div className="lightbox-inner">
        <img className="lightbox-content" src={work.image} alt={work.alt || work.title} />
        <div className="lightbox-caption">
          <strong id="lightbox-title">{work.title}</strong>
          <span>{work.description}</span>
        </div>
      </div>
    </div>
  );
}
