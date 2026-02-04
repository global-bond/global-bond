import './Contact.css'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

function Contact() {
  return (
    <main className="gba-contact-page">
      <section className="gba-contact-hero" aria-labelledby="contact-hero-title">
        <div className="gba-contact-hero__media" aria-hidden="true">
          <img src="/images/contact-hero.jpg" alt="Construction professionals reviewing project plans" />
          <div className="gba-contact-hero__overlay" />
        </div>
        <div className="gba-contact-hero__content">
          <h1 id="contact-hero-title">Let’s Talk About Your Project</h1>
          <p>Fast support from our technical team across India.</p>
          <div className="gba-contact-hero__actions">
            <a href="tel:+919306357300" className="gba-contact-btn gba-contact-btn--primary">
              Call +91-9306357300
            </a>
            <a href="mailto:globalbondgbad@gmail.com" className="gba-contact-btn gba-contact-btn--ghost">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <section className="gba-contact-trust" aria-label="Contact highlights">
        <div className="gba-contact-trust__grid">
          <div className="gba-contact-trust__item">
            <span className="gba-contact-trust__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2 4 5v6c0 5.25 3.44 10.08 8 11 4.56-.92 8-5.75 8-11V5l-8-3Zm0 18.1c-2.94-.84-5.5-4.2-5.5-8.02V6.2L12 4l5.5 2.2v5.88c0 3.82-2.56 7.18-5.5 8.02Z"/></svg>
            </span>
            <h3>Pan-India Support</h3>
            <p>Nationwide coverage</p>
          </div>
          <div className="gba-contact-trust__item">
            <span className="gba-contact-trust__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 1a9 9 0 0 0-9 9v5a3 3 0 0 0 3 3h1v-7H5a7 7 0 1 1 14 0h-2v7h2a2 2 0 0 0 2-2v-6a9 9 0 0 0-9-9Z"/><path fill="currentColor" d="M8 15h2v6H8zm6 0h2v6h-2z"/></svg>
            </span>
            <h3>Fast Technical Assistance</h3>
            <p>Responsive expert support</p>
          </div>
          <div className="gba-contact-trust__item">
            <span className="gba-contact-trust__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2 9.4 7.3 4 8l4 4-1 5.7L12 15l5 2.7L16 12l4-4-5.4-.7L12 2Z"/></svg>
            </span>
            <h3>Trusted by Contractors</h3>
            <p>Industry-proven performance</p>
          </div>
          <div className="gba-contact-trust__item">
            <span className="gba-contact-trust__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5C19 16 16 14 12 14Z"/><path fill="currentColor" d="M21 9h-2V7h2V5h-2V3h-2v2h-2v2h2v2h2V9Z"/></svg>
            </span>
            <h3>Expert Engineering Team</h3>
            <p>Certified professionals</p>
          </div>
        </div>
      </section>

      <section className="gba-contact-quick" aria-labelledby="quick-contact-title">
        <div className="gba-contact-quick__header">
          <h2 id="quick-contact-title">Prefer Instant Contact?</h2>
          <p>Choose your preferred method to reach us immediately.</p>
        </div>
        <div className="gba-contact-quick__actions">
          <a className="gba-contact-pill" href="tel:+919306357300">
            <span className="gba-contact-pill__icon" aria-hidden="true">📞</span>
            Call +91-9306357300
          </a>
          <a className="gba-contact-pill" href="mailto:globalbondgbad@gmail.com">
            <span className="gba-contact-pill__icon" aria-hidden="true">✉️</span>
            Email Us
          </a>
          <a className="gba-contact-pill" href="https://wa.me/919306357300" target="_blank" rel="noreferrer">
            <span className="gba-contact-pill__icon" aria-hidden="true">💬</span>
            WhatsApp
          </a>
        </div>
      </section>

      <ContactSection />

      <section className="gba-contact-offices" aria-labelledby="offices-title">
        <div className="gba-contact-offices__header">
          <h2 id="offices-title">Our Offices</h2>
          <p>Visit us at our locations across India.</p>
        </div>
        <div className="gba-contact-offices__grid">
          <article className="gba-contact-office">
            <div className="gba-contact-office__header">
              <div>
                <span className="gba-contact-badge">Head Office</span>
                <h3>GLOBALBOND ADHESIVES PRIVATE LIMITED</h3>
              </div>
              <span className="gba-contact-office__icon" aria-hidden="true">🏢</span>
            </div>
            <ul className="gba-contact-office__list">
              <li>
                <span aria-hidden="true">📍</span>
                <span>Bahadurgarh, Haryana</span>
              </li>
              <li>
                <span aria-hidden="true">📞</span>
                <a href="tel:+919306357300">+91-9306357300</a>
              </li>
              <li>
                <span aria-hidden="true">✉️</span>
                <a href="mailto:globalbondgbad@gmail.com">globalbondgbad@gmail.com</a>
              </li>
              <li>
                <span aria-hidden="true">🕒</span>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </article>

          <article className="gba-contact-office">
            <div className="gba-contact-office__header">
              <div>
                <span className="gba-contact-badge gba-contact-badge--muted">Branch Office</span>
                <h3>GLOBALBOND ADHESIVES PRIVATE LIMITED</h3>
              </div>
              <span className="gba-contact-office__icon" aria-hidden="true">🏢</span>
            </div>
            <ul className="gba-contact-office__list">
              <li>
                <span aria-hidden="true">📍</span>
                <span>Vasai, Maharashtra</span>
              </li>
              <li>
                <span aria-hidden="true">📞</span>
                <a href="tel:+919306357300">+91-9306357300</a>
              </li>
              <li>
                <span aria-hidden="true">✉️</span>
                <a href="mailto:globalbondgbad@gmail.com">globalbondgbad@gmail.com</a>
              </li>
              <li>
                <span aria-hidden="true">🕒</span>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="gba-contact-map" aria-label="Map">
        <iframe
          title="Globalbond head office map"
          src="https://maps.google.com/maps?q=Bahadurgarh%2C%20Haryana&t=&z=11&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <FooterSection />
    </main>
  )
}

export default Contact
