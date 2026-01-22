import './Contact.css'
import ContactSection from '../components/ContactSection'
import HeroBanner from '../components/HeroBanner'

function Contact() {
  return (
    <div>
      {/* Hero */}
      <HeroBanner
        backgroundImage="/images/contact-hero.jpg"
        title="Let’s Talk About Your Project"
        subtitle="Fast support from our technical team across India."
        actions={[
          { href: 'tel:+919306357300', label: 'Call +91-9306357300', variant: 'primary' },
          { href: 'mailto:globalbondgbad@gmail.com', label: 'Email Us', variant: 'ghost' }
        ]}
        headingId="contact-hero-title"
      />

      {/* Info cards */}
      <section className="gba-section gba-section--light" aria-label="Office locations">
        <div className="gba-cards-grid">
          <article className="gba-card">
            <h3>Head Office</h3>
            <p><strong>GLOBALBOND ADHESIVES PRIVATE LIMITED</strong></p>
            <p>Bahadurgarh, Haryana</p>
            <p>Customer Care: <a href="tel:+919306357300">+91-9306357300</a></p>
            <p>Email: <a href="mailto:globalbondgbad@gmail.com">globalbondgbad@gmail.com</a></p>
          </article>
          <article className="gba-card">
            <h3>Branch Office</h3>
            <p><strong>GLOBALBOND ADHESIVES PRIVATE LIMITED</strong></p>
            <p>Vasai, Maharashtra</p>
            <p>Customer Care: <a href="tel:+919306357300">+91-9306357300</a></p>
            <p>Email: <a href="mailto:globalbondgbad@gmail.com">globalbondgbad@gmail.com</a></p>
          </article>
        </div>
      </section>

      {/* Contact form */}
      <ContactSection />
    </div>
  )
}

export default Contact
