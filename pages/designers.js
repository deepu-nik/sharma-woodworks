// pages/designers.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';

export default function Designers({ works }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  const designerWorks = works.filter((work) => work.b2b_highlight);

  return (
    <Layout>
      <Head>
        <title>B2B Designer Portal | Sharma Woodworks Mumbai</title>
        <meta name="description" content="Exclusive trade portal for interior designers and architects in Mumbai. Off-site bespoke carpentry with strict, reliable production scheduling." />
        
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

        <link rel="canonical" href="https://sharmawoodworks.com/designers" />
      </Head>

      <header className="hero" style={{ minHeight: '500px', height: '60vh' }}>
        <h1>Trade & Designer Fabrication Portal</h1>
        <p>Your reliable manufacturing partner in Oshiwara, Mumbai. We execute precisely from your technical drawings with strict timeline adherence and a zero-mess guarantee.</p>
        <div className="hero-btn-group">
          <a href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20am%20an%20interior%20designer%20looking%20to%20discuss%20a%20trade%20project." className="btn-primary" target="_blank" rel="noopener noreferrer">Submit CAD / Drawings</a>
          <a href="tel:+919137794182" className="btn-secondary">Call Trade Desk</a>
        </div>
      </header>

      <section className="process-bg">
        <h2>Why Mumbai Designers Partner With Us</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Reliable Timelines</h3>
            <p>Predictable scheduling so your site timelines never stall waiting for custom millwork.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Off-Site Fabrication</h3>
            <p>Zero on-site dust, noise, or labor headaches. Delivered finished and ready to install.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Exact Specification Match</h3>
            <p>Strict adherence to your dimension layouts, material callouts, and finish requirements.</p>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h2>Curated Trade Portfolio</h2>
        <div className="grid">
          {designerWorks.map((work) => (
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

      {lightboxImage && (
        <div className="lightbox-modal active" onClick={() => setLightboxImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img className="lightbox-content" src={lightboxImage} alt="Enlarged Trade View" />
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