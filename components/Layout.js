import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const quoteMessage = 'Hello Sharma Woodworks, I found your website and would like to discuss a custom furniture project.';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <nav className={scrolled ? 'site-nav scrolled' : 'site-nav'} aria-label="Primary navigation">
          <Link href="/" className="logo" aria-label="Sharma Woodworks home" onClick={closeMenu}>
            <Image src="/logo.png" alt="Sharma Woodworks" width={180} height={70} priority style={{ objectFit: 'contain', objectPosition: 'left center' }} />
          </Link>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link href="/#portfolio" onClick={closeMenu}>Work</Link>
            <Link href="/#process" onClick={closeMenu}>Process</Link>
            <Link href="/designers" onClick={closeMenu}>For Designers</Link>
            <Link href="/#reviews" onClick={closeMenu}>Reviews</Link>
            <Link href="/#contact" onClick={closeMenu}>Contact</Link>
            <a className="mobile-menu-cta" href={`https://wa.me/919137794182?text=${encodeURIComponent(quoteMessage)}`} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Get a Quote ↗</a>
          </div>

          <div className="nav-actions">
            <a href={`https://wa.me/919137794182?text=${encodeURIComponent(quoteMessage)}`} className="nav-quote" target="_blank" rel="noopener noreferrer">
              Get a Quote
            </a>
            <button
              type="button"
              className={`menu-toggle ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation-links"
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
        <div id="primary-navigation-links" className="sr-only" aria-hidden="true">Primary navigation</div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Sharma Woodworks</h2>
            <p>Custom wooden furniture manufacturing and bespoke joinery from our workshop in Oshiwara, Mumbai.</p>
            <div className="social-links">
              <a href="https://instagram.com/sharmawoodworks.mumbai?utm_source=website" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/sharmawoodworks?utm_source=website" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/sharma-woodworks?utm_source=website" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Explore</h3>
            <Link href="/#portfolio">Selected Work</Link>
            <Link href="/#process">Our Process</Link>
            <Link href="/designers">Designers &amp; B2B</Link>
            <Link href="/#faq">FAQ</Link>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <a href="tel:+919137794182">+91 91377 94182</a>
            <a href="https://wa.me/919137794182" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://maps.google.com/?cid=16700088029094036214" target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            <p>Monday – Saturday<br />9:00 AM – 8:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sharma Woodworks · Est. 2011</p>
          <p>Oshiwara, Jogeshwari West, Mumbai</p>
        </div>
      </footer>

      <div className="mobile-contact-bar" aria-label="Quick contact actions">
        <a href="https://wa.me/919137794182" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="tel:+919137794182">Call</a>
      </div>
    </div>
  );
}
