import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import './Home.css'
import { products } from '../content/products'

const FooterSection = lazy(() => import('../components/FooterSection'))

function HomePage() {
  const allProducts = products.flatMap((group) => group.items)
  const sliderProducts = [...allProducts, ...allProducts, ...allProducts]
  const sliderContainerRef = useRef<HTMLDivElement | null>(null)
  const sliderTrackRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [leadMessage, setLeadMessage] = useState('')

  const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz-m8HombMNxJo300vmV3Tgmx1UN0ny3buJfU0yIWA-P_sBVMk93uNjf0MBqo4kEqpy/exec'

  const getProductImage = (product: (typeof allProducts)[number]) => (
    product.image ?? `/images/products/${product.code}.png`
  )

  // Auto-slide functionality
  useEffect(() => {
    const slideNext = () => {
      setCurrentIndex((prev) => (prev + 1) % allProducts.length)
    }

    autoPlayRef.current = setInterval(slideNext, 3000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [allProducts.length])

  const applySliderTransform = () => {
    if (!sliderTrackRef.current) return
    const firstCard = sliderTrackRef.current.querySelector<HTMLElement>('.home__slider-card')
    if (!firstCard) return
    const cardRect = firstCard.getBoundingClientRect()
    const trackStyles = window.getComputedStyle(sliderTrackRef.current)
    const gapValue = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '0')
    const cardWidth = cardRect.width + (Number.isNaN(gapValue) ? 0 : gapValue)
    sliderTrackRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`
  }

  // Apply transform based on currentIndex and card size
  useEffect(() => {
    applySliderTransform()
  }, [currentIndex])

  useEffect(() => {
    const handleResize = () => applySliderTransform()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mouse/Touch drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderContainerRef.current.offsetLeft)
    setScrollLeft(sliderContainerRef.current.scrollLeft)
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Restart autoplay
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProducts.length)
    }, 3000)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderContainerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - sliderContainerRef.current.offsetLeft)
    setScrollLeft(sliderContainerRef.current.scrollLeft)
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderContainerRef.current) return
    const x = e.touches[0].pageX - sliderContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    // Restart autoplay
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProducts.length)
    }, 3000)
  }

  const handleLeadSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('[LeadForm] submit handler fired')

    if (!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL.includes('PASTE_YOUR_WEB_APP_URL_HERE')) {
      setLeadStatus('error')
      setLeadMessage('Web app URL missing. Please configure the Google Sheets web app URL.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    console.log('[LeadForm] form data', Object.fromEntries(formData.entries()))

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
      setLeadStatus('error')
      setLeadMessage(`Please fill the required field: ${missingField[1]}.`)
      return
    }

    try {
      setLeadStatus('sending')
      setLeadMessage('')

      // Send as URL-encoded form data
      console.log('[LeadForm] sending request', GOOGLE_SHEETS_WEB_APP_URL)
      await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
      console.log('[LeadForm] request sent')

      // Assume success if no error is thrown
      setLeadStatus('success')
      setLeadMessage('Thanks! Your request has been submitted.')
      form.reset()
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setLeadStatus('idle')
        setLeadMessage('')
      }, 5000)
    } catch (error) {
      setLeadStatus('error')
      setLeadMessage('Sorry, we could not submit your request. Please try again.')
    }
  }

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-background">
          <img src="/hero-home.png" alt="Construction site with professional tile installation and adhesive application" />
          <div className="home__hero-overlay"></div>
        </div>
        <div className="home__hero-content">
          <h1 className="home__hero-title">
            <span className="home__hero-title-line">Beauty Meets Durability —</span>
            <span className="home__hero-title-line">Discover Your Perfect Tile.</span>
          </h1>
          <p className="home__hero-subtitle">
            Globalbond Adhesives combines trusted quality and long-lasting performance, providing construction adhesives for a wide range of tiles and stones.
          </p>
          <div className="home__hero-buttons">
            <a href="#contact" className="home__btn home__btn--primary">Get Consultation</a>
            <button className="home__hero-menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="/products" className="home__btn home__btn--secondary">Explore Products</a>
          </div>
          <div className="home__hero-features">
            <div className="home__hero-feature">
              <span className="home__hero-feature-icon">🛡️</span>
              <span>Engineered for Performance</span>
            </div>
            <div className="home__hero-feature">
              <span className="home__hero-feature-icon">⭐</span>
              <span>Trusted by Contractors Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Company Stats */}
      <section className="home__trust-bar">
        <div className="home__trust-container">
          <div className="home__trust-item">
            <div className="home__trust-number">10+</div>
            <div className="home__trust-label">Years Experience</div>
          </div>
          <div className="home__trust-item">
            <div className="home__trust-number">500+</div>
            <div className="home__trust-label">Distribution Partners</div>
          </div>
          <div className="home__trust-item">
            <div className="home__trust-number">PAN</div>
            <div className="home__trust-label">India Network</div>
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="home__product-ecosystem">
        <div className="home__section-header">
          <h2>Product Ecosystem</h2>
          <p>Comprehensive bonding solutions engineered for every construction challenge</p>
        </div>
        <div className="home__product-grid">
          <div className="home__product-card">
            <div className="home__product-icon">📦</div>
            <h3>Adhesives</h3>
            <p>High-performance bonding solutions for tile, stone, and substrate applications</p>
            <a href="/products" className="home__card-link">Explore <span>→</span></a>
          </div>
          <div className="home__product-card">
            <div className="home__product-icon home__product-icon--image">
              <img src="/images/Grouts.png" alt="Grouts" />
            </div>
            <h3>Grouts</h3>
            <p>Premium joint filling systems with superior strength and aesthetics</p>
            <a href="/products" className="home__card-link">Explore <span>→</span></a>
          </div>
          <div className="home__product-card">
            <div className="home__product-icon">🧪</div>
            <h3>Admix</h3>
            <p>Advanced concrete additives for enhanced performance and durability</p>
            <a href="/products" className="home__card-link">Explore <span>→</span></a>
          </div>
          <div className="home__product-card">
            <div className="home__product-icon">🧴</div>
            <h3>Cleaners</h3>
            <p>Specialized cleaning and maintenance solutions for construction surfaces</p>
            <a href="/products" className="home__card-link">Explore <span>→</span></a>
          </div>
          <div className="home__product-card">
            <div className="home__product-icon home__product-icon--image">
              <img src="/images/glue-icon.png" alt="Glue" />
            </div>
            <h3>Glue</h3>
            <p>Quick bonding & specialty glues</p>
            <a href="/products" className="home__card-link">Explore <span>→</span></a>
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="home__products-slider">
        <div className="home__section-header">
          <h2>Products in Adhesives</h2>
          <p>Premium bonding solutions trusted by professionals nationwide</p>
        </div>
        <div 
          className="home__slider-container" 
          ref={sliderContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="home__slider-track" ref={sliderTrackRef}>
            {sliderProducts.map((product, index) => (
              <a 
                href={`/product/${product.code}`} 
                className="home__slider-card" 
                key={`${product.code}-${index}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="home__slider-card-image">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.src = '/images/product-placeholder.svg'
                    }}
                    draggable={false}
                  />
                </div>
                <div className="home__slider-card-content">
                  <h3>{product.name}</h3>
                  {product.code && <p className="home__slider-card-code">{product.code}</p>}
                  {product.type && <p className="home__slider-card-type">{product.type}</p>}
                  {product.features && (
                    <ul className="home__slider-card-features">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  {product.packSize && (
                    <p className="home__slider-card-pack">Pack: <strong>{product.packSize}</strong></p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="home__industries">
        <div className="home__section-header">
          <h2>Industry Solutions</h2>
          <p>Specialized applications across every construction vertical</p>
        </div>
        <div className="home__industries-grid">
          <div className="home__industry-card">
            <img src="/images/solutions/commercial.png" alt="Modern commercial building with tile installation" />
            <div className="home__industry-overlay"></div>
            <div className="home__industry-content">
              <h3>Commercial</h3>
              <p>High-traffic solutions for retail, hospitality, and office spaces</p>
              <a href="/solutions/commercial" className="home__industry-link">Learn More <span>→</span></a>
            </div>
          </div>
          <div className="home__industry-card">
            <img src="/images/solutions/residential.png" alt="Luxury residential interior with premium tile flooring" />
            <div className="home__industry-overlay"></div>
            <div className="home__industry-content">
              <h3>Residential</h3>
              <p>Premium solutions for homes, villas, and apartment complexes</p>
              <a href="/solutions/residential" className="home__industry-link">Learn More <span>→</span></a>
            </div>
          </div>
          <div className="home__industry-card">
            <img src="/images/solutions/infrastructure.png" alt="Metro station construction with large format tile" />
            <div className="home__industry-overlay"></div>
            <div className="home__industry-content">
              <h3>Infrastructure</h3>
              <p>Heavy-duty systems for metros, airports, and public facilities</p>
              <a href="/solutions/infrastructure" className="home__industry-link">Learn More <span>→</span></a>
            </div>
          </div>
          <div className="home__industry-card">
            <img src="/images/solutions/industrial.png" alt="Industrial factory floor with coating application" />
            <div className="home__industry-overlay"></div>
            <div className="home__industry-content">
              <h3>Industrial</h3>
              <p>Chemical-resistant solutions for manufacturing and processing plants</p>
              <a href="/solutions/industrial" className="home__industry-link">Learn More <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="home__distribution">
        <div className="home__section-header">
          <h2>Distribution Power</h2>
          <p>Pan-India presence ensuring rapid delivery and local support</p>
        </div>
        <div className="home__distribution-content">
          <div className="home__distribution-stats">
            <div className="home__distribution-stat">
              <div className="home__distribution-stat-number">28</div>
              <div className="home__distribution-stat-label">States Covered</div>
            </div>
            <div className="home__distribution-stat">
              <div className="home__distribution-stat-number">500+</div>
              <div className="home__distribution-stat-label">Distribution Partners</div>
            </div>
            <div className="home__distribution-stat">
              <div className="home__distribution-stat-number">48hrs</div>
              <div className="home__distribution-stat-label">Average Delivery</div>
            </div>
            <div className="home__distribution-stat">
              <div className="home__distribution-stat-number">24/7</div>
              <div className="home__distribution-stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="home__lead-capture" id="contact">
        <div className="home__lead-content">
          <div className="home__lead-header">
            <h2>Start Your Project</h2>
            <p>Connect with our technical experts for product recommendations and project support</p>
          </div>
          <form className="home__lead-form" onSubmit={handleLeadSubmit} noValidate>
            <div className="home__form-row">
              <div className="home__form-group">
                <label htmlFor="fullName" className="home__form-label">Full Name <span className="home__form-required">*</span></label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
              </div>
              <div className="home__form-group">
                <label htmlFor="email" className="home__form-label">Email Address <span className="home__form-required">*</span></label>
                <input type="email" id="email" name="email" placeholder="your.email@company.com" required />
              </div>
            </div>
            
            <div className="home__form-row">
              <div className="home__form-group">
                <label htmlFor="phone" className="home__form-label">Phone Number <span className="home__form-required">*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="+91-XXXXXXXXXX" required />
              </div>
              <div className="home__form-group">
                <label htmlFor="company" className="home__form-label">Company / Organization <span className="home__form-required">*</span></label>
                <input type="text" id="company" name="company" placeholder="Your company name" required />
              </div>
            </div>

            <div className="home__form-row">
              <div className="home__form-group">
                <label htmlFor="location" className="home__form-label">Project Location <span className="home__form-required">*</span></label>
                <input type="text" id="location" name="location" placeholder="City, State" required />
              </div>
              <div className="home__form-group">
                <label htmlFor="inquiryType" className="home__form-label">Inquiry Type <span className="home__form-required">*</span></label>
                <select id="inquiryType" name="inquiryType" required>
                  <option value="">Select inquiry type</option>
                  <option value="product-info">Product Information</option>
                  <option value="quotation">Quotation Request</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="home__form-row">
              <div className="home__form-group">
                <label htmlFor="budget" className="home__form-label">Budget Range</label>
                <select id="budget" name="budget">
                  <option value="">Select budget range</option>
                  <option value="under-1-lac">Under ₹1,00,000</option>
                  <option value="1-5-lac">₹1,00,000 - ₹5,00,000</option>
                  <option value="5-10-lac">₹5,00,000 - ₹10,00,000</option>
                  <option value="10-50-lac">₹10,00,000 - ₹50,00,000</option>
                  <option value="above-50-lac">Above ₹50,00,000</option>
                </select>
              </div>
              <div className="home__form-group">
                <label htmlFor="timeline" className="home__form-label">Project Timeline</label>
                <select id="timeline" name="timeline">
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (This Month)</option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="6-12-months">6-12 Months</option>
                  <option value="planning">Still Planning</option>
                </select>
              </div>
            </div>

            <div className="home__form-row full">
              <div className="home__form-group full">
                <label htmlFor="projectDetails" className="home__form-label">Project Details <span className="home__form-required">*</span></label>
                <textarea id="projectDetails" name="projectDetails" placeholder="Tell us about your project requirements, specifications, and any specific challenges you're facing..." rows={5} required></textarea>
              </div>
            </div>

            <div className="home__form-footer">
              <button type="submit" className="home__btn home__btn--primary" disabled={leadStatus === 'sending'}>
                {leadStatus === 'sending' ? 'Sending…' : 'Send Request'}
              </button>
            </div>
            {leadMessage && (
              <p className={`home__form-status home__form-status--${leadStatus}`} role="status">
                {leadMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      <Suspense fallback={<div className="gba-section gba-section--loading" aria-busy="true"><p>Loading Footer…</p></div>}>
        <FooterSection />
      </Suspense>
    </main>
  )
}

export default HomePage
