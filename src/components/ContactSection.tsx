import { useState } from 'react'
import './ContactSection.css'

function ContactSection() {
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [contactMessage, setContactMessage] = useState('')

  const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz-m8HombMNxJo300vmV3Tgmx1UN0ny3buJfU0yIWA-P_sBVMk93uNjf0MBqo4kEqpy/exec'

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    console.log('[ContactForm] submit handler fired')

    const form = e.currentTarget
    const formData = new FormData(form)
    console.log('[ContactForm] form data', Object.fromEntries(formData.entries()))

    const requiredFields: Array<[string, string]> = [
      ['fullName', 'Full Name'],
      ['email', 'Email Address'],
      ['phone', 'Phone Number'],
      ['company', 'Company / Organization'],
      ['location', 'Project Location'],
      ['inquiryType', 'Inquiry Type'],
      ['projectDetails', 'Project Details'],
    ]

    const missingField = requiredFields.find(([key]) => !String(formData.get(key) || '').trim())
    if (missingField) {
      setContactStatus('error')
      setContactMessage(`Please fill the required field: ${missingField[1]}.`)
      return
    }

    try {
      setContactStatus('sending')
      setContactMessage('')

      console.log('[ContactForm] sending request', GOOGLE_SHEETS_WEB_APP_URL)
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
      console.log('[ContactForm] request sent')

      setContactStatus('success')
      setContactMessage('Thanks! Our team will get back to you shortly.')
      form.reset()

      setTimeout(() => {
        setContactStatus('idle')
        setContactMessage('')
      }, 5000)
    } catch (error) {
      setContactStatus('error')
      setContactMessage('Sorry, we could not submit your request. Please try again.')
    }
  }
  return (
    <section id="contact" className="gba-contact-form" aria-labelledby="contact-form-title">
      <div className="gba-contact-form__header">
        <h2 id="contact-form-title">Submit Your Inquiry</h2>
        <p>Our team will respond within 24 hours.</p>
      </div>

      <div className="gba-contact-form__card">
        <form className="gba-contact-form__form" onSubmit={onSubmit} noValidate>
          <div className="gba-contact-form__grid">
            <label>
              Full Name *
              <input type="text" name="fullName" placeholder="Enter your full name" required />
            </label>
            <label>
              Email Address *
              <input type="email" name="email" placeholder="your.email@company.com" required />
            </label>
          </div>

          <div className="gba-contact-form__grid">
            <label>
              Phone Number *
              <input type="tel" name="phone" placeholder="+91-XXXXXXXXXX" required />
            </label>
            <label>
              Company / Organization *
              <input type="text" name="company" placeholder="Your company name" required />
            </label>
          </div>

          <div className="gba-contact-form__grid">
            <label>
              Project Location *
              <input type="text" name="location" placeholder="City, State" required />
            </label>
            <label>
              Inquiry Type *
              <span className="gba-contact-form__select">
                <select name="inquiryType" defaultValue="" required>
                  <option value="" disabled>Select inquiry type</option>
                  <option value="product">Product Information</option>
                  <option value="technical">Technical Support</option>
                  <option value="quotation">Request Quotation</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                <span className="gba-contact-form__select-icon" aria-hidden="true">▾</span>
              </span>
            </label>
          </div>

          <div className="gba-contact-form__grid">
            <label>
              Budget Range
              <span className="gba-contact-form__select">
                <select name="budget" defaultValue="">
                  <option value="">Select budget range</option>
                  <option value="under-5">Under ₹5 Lakhs</option>
                  <option value="5-20">₹5 - 20 Lakhs</option>
                  <option value="20-50">₹20 - 50 Lakhs</option>
                  <option value="50-1cr">₹50 Lakhs - 1 Crore</option>
                  <option value="above-1cr">Above ₹1 Crore</option>
                </select>
                <span className="gba-contact-form__select-icon" aria-hidden="true">▾</span>
              </span>
            </label>
            <label>
              Project Timeline
              <span className="gba-contact-form__select">
                <select name="timeline" defaultValue="">
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="1-3">1-3 Months</option>
                  <option value="3-6">3-6 Months</option>
                  <option value="6plus">6+ Months</option>
                </select>
                <span className="gba-contact-form__select-icon" aria-hidden="true">▾</span>
              </span>
            </label>
          </div>

          <label>
            Project Details *
            <textarea
              name="projectDetails"
              rows={6}
              placeholder="Tell us about your project requirements, specifications, and any specific challenges you're facing..."
              required
            />
          </label>

          <button type="submit" className="gba-contact-form__submit" disabled={contactStatus === 'sending'}>
            {contactStatus === 'sending' ? 'Sending…' : 'Send Request'}
          </button>
          {contactMessage && (
            <p className={`gba-contact-form__status gba-contact-form__status--${contactStatus}`} role="status">
              {contactMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactSection
