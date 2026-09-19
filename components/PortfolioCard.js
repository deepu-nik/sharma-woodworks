import Image from 'next/image';

export default function PortfolioCard({ work, onOpen }) {
  return (
    <article className="portfolio-card">
      <button
        type="button"
        className="portfolio-card-media"
        onClick={() => onOpen(work)}
        aria-label={`View ${work.title} larger`}
      >
        <Image
          src={work.image}
          alt={work.alt || work.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <span className="portfolio-card-overlay">View Work <span aria-hidden="true">↗</span></span>
      </button>

      <div className="portfolio-card-content">
        <div className="portfolio-card-topline">
          <span>{work.category}</span>
          {work.b2b_highlight && <span>Trade</span>}
        </div>
        <h3>{work.title}</h3>
        <p>{work.description}</p>
      </div>
    </article>
  );
}
