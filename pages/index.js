import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import { getPortfolio } from '../lib/portfolio';

const Lightbox = dynamic(() => import('../components/Lightbox'), { ssr: false });

const faqItems = [
  {
    q: 'Do you provide on-site carpentry?',
    a: 'Our custom furniture is fabricated and finished at our Oshiwara workshop, then delivered as a completed piece. If your project needs site-specific work, discuss the requirement with the team before confirming the order.',
  },
  {
    q: 'How do I request a quote?',
    a: 'Send your reference image, approximate dimensions, preferred material or finish, and delivery location on WhatsApp. The team can then discuss feasibility, pricing, and the production timeline.',
  },
  {
    q: 'What are your payment terms?',
    a: 'A 50% advance is required to begin material sourcing and production. The balance is due on completion before final dispatch.',
  },
  {
    q: 'Can interior designers and architects work with you?',
    a: 'Yes. We work with designers, architects, homeowners, and businesses on custom furniture and fabrication requirements. Use the Designers & B2B page to start a trade enquiry.',
  },
];

export default function Home({ works }) {
  const [lightboxWork, setLightboxWork] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(works.map((work) => work.category).filter(Boolean))), 'B2B'],
    [works]
  );

  const filteredWorks = useMemo(() => {
    if (activeFilter === 'All') return works;
    if (activeFilter === 'B2B') return works.filter((work) => work.b2b_highlight);
    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter, works]);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sharma Woodworks',
    image: 'https://sharmawoodworks.com/logo.webp',
    logo: 'https://sharmawoodworks.com/logo.webp',
    telephone: '+919137794182',
    url: 'https://sharmawoodworks.com',
    priceRange: '$$',
    sameAs: [
      'https://www.linkedin.com/company/sharma-woodworks/',
      'https://instagram.com/sharmawoodworks.mumbai/',
      'https://facebook.com/sharmawoodworks/',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bohri Compound, Oshiwara Bridge, near Sunni Mastaniya Masjid, Oshiwara, Jogeshwari West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400102',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  };

  return (
    <Layout>
      <SEO
        title="Sharma Woodworks | Bespoke Furniture Manufacturing in Mumbai"
        description="Custom wooden furniture manufacturing in Oshiwara, Mumbai. Bespoke furniture, precision joinery and off-site fabrication for homeowners, designers, architects and businesses."
        canonicalPath="/"
        ogImage="/TvConsole.jpg"
        jsonLd={schemaData}
      />

      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow hero-eyebrow">SHARMA WOODWORKS · EST. 2011 · MUMBAI</p>
          <h1>Furniture made around your space.</h1>
          <p className="hero-copy">
            Bespoke wooden furniture, built to your requirements at our Oshiwara workshop.
            Share your design, dimensions or reference image and let&apos;s discuss your piece.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20found%20your%20website%20and%20would%20like%20a%20quote%20for%20custom%20furniture.%0A%0AFurniture%20type:%0AApprox.%20size:%0APreferred%20material/finish:%0ADelivery%20location:%0AReference%20image/design:"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Quote on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View Our Work
            </a>
          </div>
          <div className="hero-proof">
            <span>Custom Manufacturing</span>
            <span>Workshop in Mumbai</span>
            <span>B2B &amp; B2C</span>
          </div>
        </div>
      </header>

      <section className="trust-strip" aria-label="Business highlights">
        <div className="trust-grid">
          <div><strong>Est. 2011</strong><span>Craftsmanship-led workshop</span></div>
          <div><strong>Made to Order</strong><span>Built to your dimensions</span></div>
          <div><strong>Off-Site Fabrication</strong><span>Finished at our workshop</span></div>
          <div><strong>Mumbai</strong><span>Oshiwara, Jogeshwari West</span></div>
        </div>
      </section>

      <section id="services">
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="Custom furniture for the way you live and work."
          description="From statement pieces at home to fabrication requirements for designers, architects and showrooms."
        />
        <div className="service-grid">
          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Living &amp; Media</h3>
            <p>TV consoles, media units and statement furniture designed around your room.</p>
          </article>
          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Storage &amp; Cabinets</h3>
            <p>Custom storage pieces made to fit your dimensions, materials and finish.</p>
          </article>
          <article className="service-card">
            <span className="service-number">03</span>
            <h3>Designer Fabrication</h3>
            <p>Furniture and fabrication executed from drawings, specifications and finish schedules.</p>
          </article>
          <article className="service-card">
            <span className="service-number">04</span>
            <h3>Showroom &amp; B2B</h3>
            <p>Custom manufacturing for retail, hospitality and other business requirements.</p>
          </article>
        </div>
      </section>

      <section id="portfolio" className="section-surface">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Built to be part of the space."
          description="A small selection of custom pieces from the workshop. More work is available through our WhatsApp catalog."
        />
        <div className="filter-scroller" role="group" aria-label="Filter portfolio">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredWorks.map((work) => (
            <PortfolioCard key={work.id} work={work} onOpen={setLightboxWork} />
          ))}
        </div>

        {!filteredWorks.length && (
          <p className="empty-state">More projects in this category are being photographed. Contact us for the extended catalog.</p>
        )}

        <div className="section-cta">
          <a
            href="https://wa.me/c/919137794182"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse the WhatsApp catalog <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section id="process">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="A clear path from idea to finished piece."
          description="Share what you have in mind. We work through the details, build it at the workshop, and coordinate delivery."
        />
        <div className="process-grid">
          <article className="process-card">
            <span>01</span>
            <h3>Share your idea</h3>
            <p>Send a reference image, sketch, drawing, dimensions or simply describe what you need.</p>
          </article>
          <article className="process-card">
            <span>02</span>
            <h3>Plan &amp; quote</h3>
            <p>Discuss materials, dimensions, finish, quantity, delivery location and project requirements.</p>
          </article>
          <article className="process-card">
            <span>03</span>
            <h3>Build at the workshop</h3>
            <p>Your piece is fabricated, assembled and finished at our Oshiwara workshop.</p>
          </article>
          <article className="process-card">
            <span>04</span>
            <h3>Deliver</h3>
            <p>Once the piece is complete, we coordinate dispatch and delivery to your location.</p>
          </article>
        </div>
      </section>

      <section id="designers" className="designer-callout">
        <div className="designer-callout-inner">
          <div>
            <p className="section-eyebrow">FOR DESIGNERS &amp; ARCHITECTS</p>
            <h2>A fabrication partner for your next project.</h2>
            <p>Send drawings, dimensions and finish requirements. We&apos;ll discuss the build, material and production requirements with you.</p>
          </div>
          <a href="/designers" className="btn btn-light">Explore Designer &amp; B2B</a>
        </div>
      </section>

      <section id="faq">
        <SectionHeading
          eyebrow="FAQ"
          title="Before you get in touch."
          description="A few practical answers about how custom orders work."
        />
        <div className="faq-list">
          {faqItems.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            const answerId = `faq-answer-${idx}`;

            return (
              <div className="faq-item" key={faq.q}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div id={answerId} className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="reviews" className="section-surface">
        <SectionHeading
          eyebrow="CLIENT & PARTNER REVIEWS"
          title="Craftsmanship matters. So does reliability."
          description="A couple of examples of the feedback the workshop aims to earn on every project."
        />
        <div className="testimonial-grid">
          <article className="testimonial-card">
            <div className="quote-mark" aria-hidden="true">“</div>
            <p>“The craftsmanship and precision joinery on our custom media console were flawless. Delivered according to our architectural drawings.”</p>
            <strong>Residential Client</strong>
            <span>Bespoke interior project, Andheri</span>
          </article>
          <article className="testimonial-card">
            <div className="quote-mark" aria-hidden="true">“</div>
            <p>“Reliable manufacturing partner for our retail showroom requirements. Solid wood construction, excellent polish work, and timely fulfillment.”</p>
            <strong>Showroom Partner</strong>
            <span>Bangur Nagar, Mumbai</span>
          </article>
        </div>
      </section>

      <section id="contact">
        <SectionHeading
          eyebrow="VISIT THE WORKSHOP"
          title="Let's talk about your next piece."
          description="Call, WhatsApp or visit the workshop in Oshiwara, Mumbai."
        />
        <div className="contact-grid">
          <div className="map-card">
            <iframe
              title="Sharma Woodworks workshop location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7538.142875116066!2d72.84047!3d19.14835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b710e695b9d3%3A0xe7bca05780c0c2f6!2sSharma%20Woodworks!5e0!3m2!1sen!2sin!4v1789482045533!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <a href="https://www.google.com/maps/dir/?api=1&destination=Sharma%20Woodworks%2C%20Oshiwara%2C%20Mumbai%2C%20Maharashtra%20400102&travelmode=driving" 
            target="_blank" 
            rel="noopener noreferrer">
              
              Get directions ↗
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-label">SHARMA WOODWORKS</span>
            <h3>Oshiwara Workshop</h3>
            <address>
              Bohri Compound, Oshiwara Bridge,<br />
              near Sunni Mastaniya Masjid,<br />
              Oshiwara, Jogeshwari West,<br />
              Mumbai, Maharashtra 400102
            </address>

            <div className="contact-actions">
              <a href="tel:+919137794182" className="contact-action">
                <span>Call</span>
                <strong>+91 91377 94182</strong>
              </a>
              <a
                href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20custom%20furniture%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action"
              >
                <span>WhatsApp</span>
                <strong>Start an enquiry ↗</strong>
              </a>
            </div>

            <p className="hours"><strong>Workshop hours</strong><br />Monday – Saturday: 9:00 AM – 8:00 PM<br />Sunday: By appointment</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-eyebrow">HAVE A DESIGN IN MIND?</p>
        <h2>Send us the idea. We&apos;ll take it from there.</h2>
        <p>Reference image, dimensions, drawing or just a conversation.</p>
        <a
          href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20found%20your%20website%20and%20would%20like%20to%20discuss%20a%20custom%20furniture%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Start on WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </section>

      <Lightbox work={lightboxWork} onClose={() => setLightboxWork(null)} />
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {
      works: getPortfolio(),
    },
  };
}
