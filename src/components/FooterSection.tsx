import './FooterSection.css'

function FooterSection() {
  return (
    <footer className="gba-footer">
      <div className="gba-footer__brand">
        <span className="gba-footer__logo">GB</span>
        <div>
          <p className="gba-footer__title">Global Bond Adhesives</p>
          <p className="gba-footer__tagline">For builders who demand better bonds.</p>
        </div>
      </div>
      <div className="gba-footer__cols">
        <div>
          <h3>About</h3>
          <ul>
            <li>Company overview</li>
            <li>Innovation and testing</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>
            <li>Tile & stone systems</li>
            <li>Waterproofing</li>
            <li>Industrial flooring</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: info@globalbondadhesives.com</li>
            <li>Phone: +[country code] [number]</li>
            <li>Follow on social channels</li>
          </ul>
        </div>
      </div>
      <p className="gba-footer__bottom">
        © {new Date().getFullYear()} Global Bond Adhesives. All rights reserved.
      </p>
    </footer>
  )
}

export default FooterSection
