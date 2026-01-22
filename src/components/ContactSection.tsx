import './ContactSection.css'

function ContactSection() {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    alert('Thanks! Our team will get back to you shortly.')
  }
  return (
    <section id="contact" className="gba-section gba-section--accent">
      <div className="gba-section__header">
        <h2>Can&apos;t find what you&apos;re looking for?</h2>
        <p>
          Share your project brief and our technical team will recommend a fit‑for‑purpose system.
        </p>
      </div>
      <div className="gba-contact gba-contact--grid">
        <aside className="gba-contact__aside" aria-label="Quick contact">
          <h3>Talk to us</h3>
          <p className="gba-contact__aside-text">We respond fast during working hours.</p>
          <div className="gba-contact__chips">
            <a className="gba-contact__chip" href="tel:+919306357300" aria-label="Call customer care">📞 Call</a>
            <a className="gba-contact__chip" href="mailto:globalbondgbad@gmail.com" aria-label="Email support">✉️ Email</a>
            <a className="gba-contact__chip" href="https://wa.me/919306357300" target="_blank" rel="noreferrer" aria-label="WhatsApp">💬 WhatsApp</a>
          </div>
          <ul className="gba-contact__aside-list">
            <li><strong>Hours:</strong> Mon–Sat, 9:00am–6:00pm</li>
            <li><strong>Head Office:</strong> Bahadurgarh, Haryana</li>
            <li><strong>Branch:</strong> Vasai, Maharashtra</li>
          </ul>
        </aside>

        <form className="gba-contact__form" onSubmit={onSubmit} noValidate>
          <div className="gba-contact__row">
            <label>
              Name
              <input type="text" name="name" placeholder="Enter your full name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>
          <div className="gba-contact__row">
            <label>
              Phone
              <input type="tel" name="phone" placeholder="+91-XXXXXXXXXX" />
            </label>
            <label>
              Country
              <input type="text" name="country" placeholder="Where is the project located?" />
            </label>
          </div>
          <div className="gba-contact__row">
            <label>
              Company / Organization
              <input type="text" name="company" placeholder="Company or practice" />
            </label>
            <label>
              Inquiry type
              <select name="type" defaultValue="Consultation">
                <option>Consultation</option>
                <option>Product specs</option>
                <option>Bulk order</option>
                <option>Dealership</option>
              </select>
            </label>
          </div>
          <label>
            Project details
            <textarea
              name="details"
              rows={5}
              placeholder="Briefly describe your project and challenges."
              required
            />
          </label>

          <div className="gba-contact__methods" role="group" aria-label="Preferred contact method">
            <span>Preferred contact:</span>
            <label className="gba-contact__radio"><input type="radio" name="pref" defaultChecked /> Phone</label>
            <label className="gba-contact__radio"><input type="radio" name="pref" /> Email</label>
            <label className="gba-contact__radio"><input type="radio" name="pref" /> WhatsApp</label>
          </div>

          <button type="submit" className="gba-btn gba-btn--primary">
            Send request
          </button>
          <p className="gba-contact__note">
            This is a front‑end sample only. Wire it up to your CRM or email service to start capturing leads.
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
