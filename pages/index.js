// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';

export default function Home({ works }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sharma Woodworks",
    "image": "https://sharmawoodworks.com/logo.png",
    "logo": "https://sharmawoodworks.com/logo.png",
    "telephone": "+919137794182",
    "url": "https://sharmawoodworks.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bohri Compound, Bridge, near Sunni Mastaniya Masjid, Oshiwara, Jogeshwari West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400102",
      "addressCountry": "IN"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <Layout>
      <Head>
        <title>Sharma Woodworks | Bespoke Furniture Manufacturing in Mumbai</title>
        <meta name="description" content="Sharma Woodworks is a premier bespoke wooden furniture manufacturer based in Oshiwara, Mumbai. We specialize in custom solid wood carpentry, residential interiors, and B2B showroom supply with strict turnaround scheduling." />
        <meta name="keywords" content="furniture manufacturer mumbai, custom carpentry oshiwara, solid wood furniture, bespoke woodwork, sharma woodworks" />
        
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <meta property="og:title" content="Sharma Woodworks | Bespoke Furniture Manufacturing in Mumbai" />
        <meta property="og:description" content="Precision joinery, architectural woodwork, and custom contract manufacturing direct from our Oshiwara workshop." />
        <meta property="og:image" content="https://sharmawoodworks.com/hero-bg.jpg" />
        <meta property="og:url" content="https://sharmawoodworks.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sharmawoodworks.com" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <header className="hero">
        <h1>Bespoke Wooden Furniture Manufacturing</h1>
        <p>Precision joinery, architectural woodwork, and custom contract manufacturing direct from our Oshiwara workshop. <strong>Strict turnaround scheduling on all signature pieces.</strong></p>
        <div className="hero-btn-group">
          <a href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20would%20like%20to%20discuss%20a%20custom%20furniture%20project." className="btn-primary" target="_blank" rel="noopener noreferrer">Discuss Your Project</a>
          <a href="https://wa.me/c/919137794182" className="btn-secondary" target="_blank" rel="noopener noreferrer">View WhatsApp Catalog 🪚</a>
        </div>
      </header>

      <section id="portfolio">
        <h2>Selected Works</h2>
        <div className="grid">
          {works.map((work) => (
            <div className="card" key={work.id} onClick={() => setLightboxImage(work.image)}>
              <div className="card-img-wrapper">
                <Image 
                  src={work.image} 
                  alt={work.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
              </div>
              <div className="card-content">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="process-bg">
        <h2>The Streamlined Manufacturing Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Design & Sourcing</h3>
            <p>Reviewing custom specifications and sourcing seasoned teak, hardwoods, and solid brass hardware.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Precision Joinery</h3>
            <p>Expert carving, assembly, and hand-finishing at our dedicated Oshiwara workshop.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>The Zero-Mess Guarantee</h3>
            <p>Your piece is 100% completed off-site. No sawdust, noise, or carpenters disrupting your home.</p>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <h3>Doorstep Delivery</h3>
            <p>Safe, reliable transit and placement of the finished standalone piece directly into your space.</p>
          </div>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {[
            { q: 'Do you provide on-site carpentry?', a: 'No. We operate under a "Zero-Mess Guarantee." All joinery, carving, and polishing happen at our Oshiwara workshop. We deliver the finished, standalone piece directly to your door.' },
            { q: 'What are your payment terms?', a: 'We require a 50% advance payment to initiate material sourcing and production. The remaining 50% is due upon completion and prior to final dispatch.' },
            { q: 'How do you manage project timelines?', a: 'We maintain strict production scheduling. For signature pieces, timelines are clearly defined during design consultation and strictly adhered to, ensuring your project stays completely on track.' }
          ].map((faq, idx) => (
            <div className="faq-item" key={idx}>
              <div className="faq-question" onClick={() => toggleFaq(idx)}>
                {faq.q} <span>{faqOpen === idx ? '-' : '+'}</span>
              </div>
              <div className={`faq-answer ${faqOpen === idx ? 'open' : ''}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="process-bg">
        <h2>Client & Partner Reviews</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-quote">"The craftsmanship and precision joinery on our custom media console were flawless. Delivered strictly according to our architectural drawings."</p>
            <div className="testimonial-author">
              <strong>Residential Client</strong>
              <span>Bespoke Interior Project, Andheri</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">"Reliable manufacturing partner for our retail showroom requirements. Solid wood construction, excellent polish work, and timely fulfillment."</p>
            <div className="testimonial-author">
              <strong>Showroom Partner</strong>
              <span>Bangur Nagar, Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Visit The Workshop</h2>
        <div className="contact-container">
          <div className="map-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.071322215397!2d72.8378950749687!3d19.148355049697575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b710e695b9d3%3A0xe7bca05780c0c2f6!2sBabloo%20Furnitures!5e0!3m2!1sen!2sin!4v1788681765101!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <a href="https://maps.app.goo.gl/YourGoogleMapsLinkHere" className="map-link" target="_blank" rel="noopener noreferrer">Open in Google Maps App 📍</a>
          </div>
          <div className="contact-details">
            <p><strong>Sharma Woodworks</strong>Bohri Compound, Bridge, near Sunni Mastaniya Masjid, Oshiwara, Jogeshwari West, Mumbai, Maharashtra 400102</p>
            <br />
            <p><strong>Direct Call & Consultation:</strong><br /><a href="tel:+919137794182">+91 91377 94182</a></p>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox-modal active" onClick={() => setLightboxImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img className="lightbox-content" src={lightboxImage} alt="Enlarged Furniture View" />
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'portfolio.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      works: data.works || [],
    },
  };
}