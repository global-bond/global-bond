import './FooterSection.css'
import { Link } from 'react-router-dom'

function FooterSection() {
  return (
    <footer className="gba-footer">
      <div className="gba-footer__top">
        <div className="gba-footer__brand">
          <p className="gba-footer__brand-name">GLOBALBOND</p>
          <p className="gba-footer__tagline">
            Engineering excellence in construction adhesives. Trusted by professionals nationwide for over two decades.
          </p>
          <div className="gba-footer__socials" aria-label="Social links">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="gba-footer__social">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 23.5h4.52V7.9H.24v15.6ZM8.3 7.9h4.33v2.13h.06c.6-1.12 2.06-2.3 4.24-2.3 4.54 0 5.38 2.98 5.38 6.85v8.92h-4.52v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17v8.03H8.3V7.9Z"/></svg>
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" className="gba-footer__social">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 9H16V6h-2.5C11.01 6 10 7.34 10 9.5V12H8v3h2v6h3v-6h2.23l.77-3H13v-2.2c0-.6.2-.8.5-.8Z"/></svg>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="gba-footer__social">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5Zm5-4.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z"/></svg>
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="gba-footer__social">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.76 2.76 0 0 0-1.95-1.95C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.65.45A2.76 2.76 0 0 0 2.4 7.2 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .4 4.8 2.76 2.76 0 0 0 1.95 1.95c1.75.45 7.65.45 7.65.45s5.9 0 7.65-.45a2.76 2.76 0 0 0 1.95-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2Z"/></svg>
            </a>
          </div>
        </div>

        <div className="gba-footer__cols">
          <div className="gba-footer__col">
            <h3>Products</h3>
            <ul>
              <li><Link to="/products/adhesives">Adhesives</Link></li>
              <li><Link to="/products/grouts">Grouts</Link></li>
              <li><Link to="/products/admix">Admix</Link></li>
              <li><Link to="/products/cleaners">Cleaners</Link></li>
              <li><Link to="/products/glue">Glue</Link></li>
            </ul>
          </div>
          <div className="gba-footer__col">
            <h3>Solutions</h3>
            <ul>
              <li><Link to="/solutions/commercial">Commercial</Link></li>
              <li><Link to="/solutions/residential">Residential</Link></li>
              <li><Link to="/solutions/infrastructure">Infrastructure</Link></li>
              <li><Link to="/solutions/industrial">Industrial</Link></li>
            </ul>
          </div>
          <div className="gba-footer__col">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/catalog">Projects</Link></li>
              <li><Link to="/product-guide">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="gba-footer__bottom">
        <p>© {new Date().getFullYear()} Globalbond Adhesives. All rights reserved.</p>
        <div className="gba-footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
