import { lazy, Suspense } from 'react'
import './About.css'

const FooterSection = lazy(() => import('../components/FooterSection'))

function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__hero-background">
          <img src="/images/about-hero.png" alt="GBAD GLOBALBOND manufacturing facility" />
          <div className="about__hero-overlay"></div>
        </div>
        <div className="about__hero-content">
          <h1 className="about__hero-title">
            <span>For The Builders Of</span>
            <span className="about__hero-highlight">A Better World</span>
          </h1>
          <p className="about__hero-subtitle">Crafting reliable adhesives that support the people building tomorrow.</p>
          <a href="#contact" className="about__hero-cta">Get In Touch</a>
        </div>
      </section>

      {/* Trust Bar - Company Stats */}
      <section className="about__trust-bar">
        <div className="about__trust-container">
          <div className="about__trust-item">
            <div className="about__trust-icon">📦</div>
            <h3>500+ Products</h3>
            <p>Comprehensive portfolio</p>
          </div>
          <div className="about__trust-item">
            <div className="about__trust-icon">🌍</div>
            <h3>Pan-India Network</h3>
            <p>Nationwide coverage</p>
          </div>
          <div className="about__trust-item">
            <div className="about__trust-icon">⭐</div>
            <h3>Trusted Partners</h3>
            <p>Industry leaders</p>
          </div>
          <div className="about__trust-item">
            <div className="about__trust-icon">👥</div>
            <h3>Expert Team</h3>
            <p>Certified professionals</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about__overview">
        <div className="about__overview-grid">
          <div className="about__overview-media">
            <img src="/images/about-hero.png" alt="GBAD GLOBALBOND manufacturing facility" />
          </div>
          <div className="about__overview-content">
            <h2>About GBAD GLOBALBOND</h2>
            <p>GBAD GLOBALBOND ADHESIVES PRIVATE LIMITED is a leading manufacturer of construction chemicals and adhesive solutions in India. For decades, we've been committed to delivering premium-quality products that support infrastructure development across the nation.</p>
            <p>Our mission is simple: to provide innovative, reliable adhesive solutions that enable builders and contractors to construct with confidence.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Modern Layout */}
      <section className="about__vision-mission">
        <div className="about__vm-grid">
          <div className="about__vm-card">
            <div className="about__vm-icon">🎯</div>
            <h3>Our Vision</h3>
            <p>To be the most trusted adhesive and construction chemical brand in India, synonymous with quality, innovation, and reliability.</p>
          </div>
          <div className="about__vm-card">
            <div className="about__vm-icon">💼</div>
            <h3>Our Mission</h3>
            <p>To manufacture and deliver superior construction adhesives that enhance structural integrity and durability of projects nationwide.</p>
          </div>
          <div className="about__vm-card">
            <div className="about__vm-icon">✨</div>
            <h3>Our Values</h3>
            <p>Quality first, customer focus, innovation, sustainability, and professional excellence in everything we do.</p>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="about__strengths">
        <div className="about__section-heading">
          <h2>Why Choose GBAD GLOBALBOND</h2>
          <p>The principles and strengths that guide every decision we make.</p>
        </div>
        <div className="about__strengths-grid">
          <div className="about__strength-card">
            <span className="about__strength-number">1</span>
            <h3>Quality Assurance</h3>
            <p>Every product undergoes rigorous testing to meet international standards and certifications.</p>
          </div>
          <div className="about__strength-card">
            <span className="about__strength-number">2</span>
            <h3>Technical Support</h3>
            <p>Expert engineering team available 24/7 for project guidance and technical assistance.</p>
          </div>
          <div className="about__strength-card">
            <span className="about__strength-number">3</span>
            <h3>Innovation</h3>
            <p>Continuous R&D to develop advanced formulations for modern construction challenges.</p>
          </div>
          <div className="about__strength-card">
            <span className="about__strength-number">4</span>
            <h3>Pan-India Distribution</h3>
            <p>Extensive network ensures quick and reliable product availability nationwide.</p>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="about__offices">
        <div className="about__section-heading">
          <h2>Our Locations</h2>
          <p>Visit us at our flagship office in India.</p>
        </div>
        <div className="about__offices-grid">
          <div className="about__office-card">
            <div className="about__office-badge">Head Office</div>
            <h3>GBAD Headquarters</h3>
            <div className="about__office-details">
              <div className="about__office-item">
                <span className="about__office-icon">📍</span>
                <div>
                  <p>Bahadurgarh, Haryana</p>
                  <p>India</p>
                </div>
              </div>
              <div className="about__office-item">
                <span className="about__office-icon">📞</span>
                <a href="tel:+919306357300">+91-9306357300</a>
              </div>
              <div className="about__office-item">
                <span className="about__office-icon">✉️</span>
                <a href="mailto:globalbondgbad@gmail.com">globalbondgbad@gmail.com</a>
              </div>
              <div className="about__office-item">
                <span className="about__office-icon">🕐</span>
                <div>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <a href="#" className="about__office-link">Get Directions →</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about__cta-section" id="contact">
        <div className="about__cta-content">
          <h2>Ready to Partner With Us?</h2>
          <p>Connect with our team for product information, technical support, or business inquiries.</p>
          <div className="about__cta-buttons">
            <a href="tel:+919306357300" className="about__cta-primary">
              Call Now
            </a>
            <a href="mailto:globalbondgbad@gmail.com" className="about__cta-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="gba-section gba-section--loading" aria-busy="true"><p>Loading Footer…</p></div>}>
        <FooterSection />
      </Suspense>
    </main>
  )
}

export default AboutPage
