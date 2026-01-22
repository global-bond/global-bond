import './AboutSection.css'
import { Link } from 'react-router-dom'

// Fallback for missing images in About section
const FALLBACK_IMG = '/images/product-placeholder.svg'
function onImgError(e: any) {
  if (e?.currentTarget) {
    e.currentTarget.src = FALLBACK_IMG
    e.currentTarget.onerror = null
  }
}

function AboutSection() {
  return (
    <section id="about" className="gba-section gba-section--light gba-about" aria-labelledby="about-heading">
      <header className="gba-section__header">
        <h2 id="about-heading">About Us</h2>
        <p>GLOBALBOND ADHESIVES PVT. LTD.</p>
      </header>

      {/* Hero banner */}
      <div className="gba-about__hero" role="img" aria-label="For the builders of a better world">
        <div className="gba-about__hero-inner">
          <h3>For The Builders Of A<br />Better World</h3>
        </div>
      </div>

      <div className="gba-about__container" role="region" aria-label="Company overview">
        <div className="gba-about__content">
          <p>
            Globalbond is a synonym of trust, quality and service. We would like to
            introduce ourselves as one of the leading manufacturers of construction
            adhesives for all types of tiles and stones.
          </p>

          <p>
            The whole team of <strong>Globalbond</strong> works under the able guidance of
            <strong> Sh. C.R. Tehlan (M.Sc Chemistry)</strong> who is one of the leading
            scholars in the field of resins and adhesives.
          </p>

          <p>
            We at <strong>Globalbond</strong> have steadily risen in stature to be acknowledged
            as one of the prominent players in tile and stone installation solutions.
            Our standard products are the result of continuous innovation, rigorous R&amp;D
            efforts and in‑depth understanding of Indian working conditions.
          </p>

          <h3 className="gba-about__subhead">Product Range</h3>
          <p>
            Our world‑class product range includes <strong>Adhesive</strong>, <strong>Grout</strong>,
            <strong> Sealer</strong>, <strong>Gypsum</strong>, <strong>Cleaners</strong>,
            <strong> Waterproofing</strong>, <strong>POP</strong>, and <strong>Wall Putti</strong>.
            High quality of our products has made us the first choice among smart Builders,
            Architects and Construction Organisations.
          </p>

          <h3 className="gba-about__subhead">Quality Commitment</h3>
          <p>
            We are committed to ensuring the highest level of quality standards. Our plant
            is equipped with world‑class advanced testing equipment and staffed by qualified
            technicians.
          </p>

          <div className="gba-about__help">
            <p>
              An expert team is available <strong>24×7</strong> at our Customer Care No
              <strong> +91‑1723563038</strong> for any guidance related to queries regarding
              our products. You can also contact us at
              <strong> globalbondgbad@gmail.com</strong>.
            </p>
            <Link className="gba-about__cta" to="/contact">Contact Us</Link>
          </div>
        </div>

        <aside className="gba-about__highlights" aria-label="Highlights">
          <ul>
            <li>Continuous innovation and rigorous R&amp;D</li>
            <li>In‑depth understanding of Indian conditions</li>
            <li>Advanced testing and quality control</li>
            <li>Trusted by builders and architects</li>
          </ul>
        </aside>
      </div>

      {/* Distributors / Dealers (India) Map */}
      <div className="gba-about__map" role="region" aria-label="Distributors and Dealers across India">
        <figure className="gba-about__map-figure">
          <img
            src="/images/dealers-map-india.png"
            alt="Globalbond distributors and dealers coverage across India"
            className="gba-about__map-img"
            onError={onImgError}
          />
          <figcaption className="gba-about__map-caption">Distributors / Dealers (India)</figcaption>
        </figure>

        <div className="gba-about__contact-cards" aria-label="Head and Branch Office">
          <div className="gba-about__card">
            <h3>Head Office</h3>
            <p><strong>GLOBALBOND ADHESIVES PRIVATE LIMITED</strong></p>
            <p>Bahadurgarh, Haryana</p>
            <p>Customer Care: +91-9306357300</p>
            <p>Email: globalbondgbad@gmail.com</p>
            <p>Website: www.globalheadhesives.com</p>
          </div>
          <div className="gba-about__card">
            <h3>Branch Office</h3>
            <p><strong>GLOBALBOND ADHESIVES PRIVATE LIMITED</strong></p>
            <p>Vasai, Maharashtra</p>
            <p>Customer Care: +91-9306357300</p>
            <p>Email: globalbondgbad@gmail.com</p>
            <p>Website: www.globalheadhesives.com</p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="gba-about__vm" aria-label="Vision and Mission">
        <div className="gba-about__vm-card">
          <img src="/images/about-vision.jpg" alt="Our Vision" onError={onImgError} />
          <div>
            <h3>Our Vision</h3>
            <p>To be the leader in tile and stone installation products and services, trusted by professionals, customers and partners nationwide.</p>
          </div>
        </div>
        <div className="gba-about__vm-card">
          <img src="/images/about-mission.jpg" alt="Our Mission" onError={onImgError} />
          <div>
            <h3>Our Mission</h3>
            <p>We aim to create innovative, high‑quality solutions that elevate construction excellence while inspiring confidence and delighting customers, employees and partners.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="gba-about__values" aria-label="Our Core Values">
        <h3 className="gba-about__section-title">Our Core Values</h3>
        <ul className="gba-about__values-grid">
          <li><strong>Trust & Integrity</strong> — We build long‑term partnerships on a foundation of ethics.</li>
          <li><strong>Passion & Commitment</strong> — We deliver excellence through unwavering dedication.</li>
          <li><strong>Innovation</strong> — We continuously improve, creating leading solutions for the industry.</li>
          <li><strong>Customer Centricity</strong> — We put customer success at the heart of everything.</li>
          <li><strong>Growing Together</strong> — We empower teams and partners to thrive.</li>
          <li><strong>Care</strong> — We operate responsibly for people, products and the planet.</li>
        </ul>
      </section>

      {/* Brand Promises */}
      <section className="gba-about__promises" aria-label="Brand Promises">
        <div className="gba-about__promises-list">
          <h3 className="gba-about__section-title">Brand Promises</h3>
          <ul>
            <li>Developing innovative solutions</li>
            <li>Serving customers as family</li>
            <li>Enabling iconic designs</li>
            <li>Committing to sustainability</li>
            <li>Providing the best installer experience</li>
            <li>Fostering trust for life</li>
          </ul>
        </div>
        <img className="gba-about__promises-art" src="/images/brand-tree.png" alt="Brand art" onError={onImgError} />
      </section>

      {/* Production and R&D */}
      <section className="gba-about__production" aria-label="State‑of‑the‑art production">
        <div className="gba-about__production-map">
          <img src="/images/plant-locations-map.png" alt="Plant locations across India" onError={onImgError} />
        </div>
        <div className="gba-about__production-gallery">
          <figure>
            <img src="/images/plant-rd-centre.jpg" alt="R&D Centre" onError={onImgError} />
            <figcaption>Research & Development Centre</figcaption>
          </figure>
          <figure>
            <img src="/images/plant-rudraram.jpg" alt="Rudraram Plant" onError={onImgError} />
            <figcaption>Rudraram Plant</figcaption>
          </figure>
          <figure>
            <img src="/images/plant-sotanala.jpg" alt="Sotanala Plant" onError={onImgError} />
            <figcaption>Sotanala Plant</figcaption>
          </figure>
          <figure>
            <img src="/images/plant-perundurai.jpg" alt="Perundurai Plant" onError={onImgError} />
            <figcaption>Perundurai Plant</figcaption>
          </figure>
        </div>
      </section>

      {/* Leadership */}
      <section className="gba-about__leader" aria-label="Leadership">
        <div className="gba-about__leader-card">
          <img src="/images/leader.jpg" alt="Leadership portrait" onError={onImgError} />
          <div>
            <h3>Guiding with Integrity and Expertise</h3>
            <p>Our leadership brings decades of experience and a passion for innovation, ensuring customers receive reliable products and outstanding service.</p>
            <p><strong>Mr. Murli Yadama</strong><br />Vice Chairman & Managing Director</p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="gba-about__awards" aria-label="Recognized Excellence">
        <h3 className="gba-about__section-title">Recognized Excellence in the Industry</h3>
        <div className="gba-about__image-grid">
          <img src="/images/award-1.jpg" alt="Award 1" onError={onImgError} />
          <img src="/images/award-2.jpg" alt="Award 2" onError={onImgError} />
          <img src="/images/award-3.jpg" alt="Award 3" onError={onImgError} />
          <img src="/images/award-4.jpg" alt="Award 4" onError={onImgError} />
        </div>
      </section>

      {/* Certifications */}
      <section className="gba-about__certs" aria-label="Assured Quality and Compliance">
        <h3 className="gba-about__section-title">Assured Quality and Compliance</h3>
        <div className="gba-about__image-grid gba-about__image-grid--wide">
          <figure>
            <img src="/images/cert-igbc.jpg" alt="IGBC Certification" onError={onImgError} />
            <figcaption>IGBC Certification</figcaption>
          </figure>
          <figure>
            <img src="/images/cert-iso9001.jpg" alt="ISO 9001:2015" onError={onImgError} />
            <figcaption>ISO 9001:2015</figcaption>
          </figure>
          <figure>
            <img src="/images/cert-iso45001.jpg" alt="ISO 45001:2018" onError={onImgError} />
            <figcaption>ISO 45001:2018</figcaption>
          </figure>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="gba-about__cta-panel" aria-label="Need assistance">
        <p>Can’t find what you’re looking for? Our dedicated support team is ready to help.</p>
        <Link to="/contact" className="gba-about__cta">Contact Us</Link>
      </div>
    </section>
  )
}

export default AboutSection
