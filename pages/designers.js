import dynamic from 'next/dynamic';
import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import { getPortfolio } from '../lib/portfolio';

const Lightbox = dynamic(() => import('../components/Lightbox'), { ssr: false });

export default function Designers({ works }) {
  const [lightboxWork, setLightboxWork] = useState(null);
  const designerWorks = works.filter((work) => work.b2b_highlight);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Designer & B2B Manufacturing | Sharma Woodworks',
    description: 'Custom furniture fabrication for interior designers, architects and businesses in Mumbai.',
    url: 'https://sharmawoodworks.com/designers',
  };

  return (
    <Layout>
      <SEO
        title="Designer & B2B Manufacturing | Sharma Woodworks Mumbai"
        description="Custom furniture fabrication for interior designers, architects, showrooms and businesses in Mumbai. Share drawings, dimensions and finish requirements with Sharma Woodworks."
        canonicalPath="/designers"
        ogImage="/MediaConsole.jpg"
        jsonLd={schemaData}
      />

      <header className="hero hero-compact">
        <div className="hero-inner">
          <p className="eyebrow hero-eyebrow">FOR DESIGNERS · ARCHITECTS · BUSINESSES</p>
          <h1>A fabrication partner for your next project.</h1>
          <p className="hero-copy">
            Custom furniture and off-site fabrication from your drawings, dimensions and finish requirements.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20am%20an%20interior%20designer/architect%20and%20would%20like%20to%20discuss%20a%20trade%20project.%0A%0AProject:%0AQuantity:%0ADrawings/specifications:%0ATimeline:%0ADelivery%20location:"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Drawings on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="tel:+919137794182" className="btn btn-outline">Call Trade Desk</a>
          </div>
        </div>
      </header>

      <section>
        <SectionHeading
          eyebrow="WHY WORK WITH US"
          title="Built around your specifications."
          description="A straightforward workshop-to-site workflow for custom fabrication requirements."
        />
        <div className="process-grid">
          <article className="process-card">
            <span>01</span>
            <h3>Specification-led</h3>
            <p>Work from your drawings, dimensions, material callouts and finish requirements.</p>
          </article>
          <article className="process-card">
            <span>02</span>
            <h3>Off-site fabrication</h3>
            <p>Furniture is fabricated and finished at the workshop before dispatch to the project site.</p>
          </article>
          <article className="process-card">
            <span>03</span>
            <h3>Direct communication</h3>
            <p>Discuss feasibility, materials, quantities and production requirements directly with the workshop.</p>
          </article>
        </div>
      </section>

      <section className="section-surface">
        <SectionHeading
          eyebrow="TRADE PORTFOLIO"
          title="Selected fabrication work."
          description="A few pieces highlighted for designer and business enquiries."
        />
        <div className="portfolio-grid">
          {designerWorks.map((work) => (
            <PortfolioCard key={work.id} work={work} onOpen={setLightboxWork} />
          ))}
        </div>
        {!designerWorks.length && (
          <p className="empty-state">More trade projects are being photographed. Contact us for the extended catalog.</p>
        )}
      </section>

      <section className="designer-process">
        <SectionHeading
          eyebrow="TRADE ENQUIRY"
          title="What to send us."
          description="The more detail you share, the faster the team can understand the requirement."
        />
        <div className="brief-grid">
          <div><span>01</span><strong>Drawings or reference images</strong><p>CAD, PDF, sketch or reference photograph.</p></div>
          <div><span>02</span><strong>Dimensions & quantity</strong><p>Approximate dimensions and number of pieces.</p></div>
          <div><span>03</span><strong>Material & finish</strong><p>Preferred wood, veneer, rattan, hardware or finish.</p></div>
          <div><span>04</span><strong>Timeline & location</strong><p>Required date and project delivery location.</p></div>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-eyebrow">READY TO DISCUSS A PROJECT?</p>
        <h2>Send the drawings. Let&apos;s talk through the build.</h2>
        <a
          href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20am%20an%20interior%20designer/architect%20and%20would%20like%20to%20discuss%20a%20trade%20project."
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Trade Enquiry <span aria-hidden="true">↗</span>
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
