// components/Layout.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        .site-wrapper {
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }
      `}</style>

      <div className="site-wrapper">
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
          <div className="nav-brand-group">
            <Link href="/" className="logo" aria-label="Sharma Woodworks Home">
              <Image src="/logo.png" alt="Sharma Woodworks Logo" width={45} height={45} style={{ objectFit: 'contain' }} />
            </Link>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <Link href="/#portfolio" onClick={() => setMenuOpen(false)}>Selected Works</Link>
            <Link href="/designers" onClick={() => setMenuOpen(false)}>For Designers</Link>
            <Link href="/#process" onClick={() => setMenuOpen(false)}>Our Process</Link>
            <Link href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>

<a href="tel:+919137794182" className="mobile-call-only" onClick={() => setMenuOpen(false)}>📞 Call Now</a>

          </div>

          <div className="nav-actions">
            <Link href="/designers" className="b2b-link">For Designers</Link>
            <a href="tel:+919137794182" className="call-nav-btn">📞 Call Now</a>
            <button 
              className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open Navigation Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          <div className="footer-container">
            <div className="footer-col">
              <h4>Sharma Woodworks</h4>
              <p>Custom wooden furniture manufacturing and bespoke joinery workshop in Oshiwara, Mumbai. We build custom designs for homeowners, architects, and retail showrooms.</p>
              <div className="social-links">
                <a href="https://instagram.com/sharmawoodworks.mumbai?utm_source=website" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com/sharmawoodworks?utm_source=website" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/#portfolio">Selected Works</Link></li>
                <li><Link href="/#process">Manufacturing Process</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
                <li><Link href="/designers">For Designers (B2B)</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Workshop Hours</h4>
              <p>Monday – Saturday: 9:00 AM – 8:00 PM<br/>Sunday: By Appointment</p>
              <br/>
              <p>Oshiwara, Mumbai - 400102</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {year} Sharma Woodworks. All rights reserved.</p>
          </div>
        </footer>

        <a href="https://wa.me/919137794182?text=Hello%20Sharma%20Woodworks,%20I%20have%20an%20inquiry%20from%20your%20website." className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          💬 Chat on WhatsApp
        </a>
      </div>
    </>
  );
}