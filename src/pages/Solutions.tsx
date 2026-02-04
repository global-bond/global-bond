import { useParams, Link } from 'react-router-dom'
import { Suspense, lazy, useMemo } from 'react'
import { getSolutionByKey } from '../data/solutions'
import { catalogCategories } from '../content/products'
import './Solutions.css'

const FooterSection = lazy(() => import('../components/FooterSection'))

function Solutions() {
  const { solution } = useParams<{ solution: string }>()
  const solutionData = useMemo(() => solution ? getSolutionByKey(solution) : undefined, [solution])

  if (!solutionData) {
    return (
      <div className="solutions-page">
        <section className="solutions-error">
          <div className="solutions-error__content">
            <h2>Solution Not Found</h2>
            <p>The solution "{solution}" could not be found.</p>
            <Link to="/" className="solutions-error__link">Back to Home</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero__content">
          <div className="solutions-hero__left">
            <span className="solutions-hero__badge">{solutionData.tagline}</span>
            <h1 className="solutions-hero__title">
              {solutionData.title.split(' ')[0]}
              <br />
              <span className="solutions-hero__title-accent">{solutionData.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="solutions-hero__description">{solutionData.description}</p>
            
            <div className="solutions-hero__highlights">
              {solutionData.highlights.map((highlight, index) => (
                <div key={index} className="solutions-hero__highlight">
                  <span className="solutions-hero__check">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="solutions-hero__actions">
              <Link to="/contact" className="solutions-btn solutions-btn--primary">
                <span>Get Consultation</span>
                <span>→</span>
              </Link>
              <Link to="/products" className="solutions-btn solutions-btn--secondary">
                View Products
              </Link>
            </div>
          </div>

          <div className="solutions-hero__right">
            <div className="solutions-hero__image-wrapper">
              <div className="solutions-hero__image-glow"></div>
              <img 
                src={solutionData.heroImage} 
                alt={solutionData.title}
                className="solutions-hero__image"
                onError={(e) => {
                  e.currentTarget.src = '/images/product-placeholder.svg'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="solutions-applications">
        <div className="solutions-section__header">
          <h2>Where Our <span className="text-accent">Solutions Are Used</span></h2>
          <p>Trusted across diverse environments for superior performance</p>
        </div>
        <div className="solutions-applications__grid">
          {solutionData.applications.map((app, index) => (
            <div key={index} className="solutions-application-card">
              <div className="solutions-application-card__icon">{app.icon}</div>
              <h3>{app.title}</h3>
              <p>{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="solutions-why-choose">
        <div className="solutions-section__header">
          <h2>Why Choose <span className="text-accent">GBAD GLOBALBOND</span></h2>
          <p>Engineering excellence for construction demands</p>
        </div>
        <div className="solutions-why-choose__grid">
          {solutionData.whyChoose.map((item, index) => (
            <div key={index} className="solutions-why-card">
              <div className="solutions-why-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="solutions-products">
        <div className="solutions-section__header">
          <h2>Recommended <span className="text-accent">Product Categories</span></h2>
          <p>Complete solutions for construction projects</p>
        </div>
        <div className="solutions-products__grid">
          {catalogCategories.map((category) => (
            <Link 
              key={category.key} 
              to={`/products/${category.key.toLowerCase()}`}
              className="solutions-product-card"
            >
              <div className="solutions-product-card__icon">
                {getCategoryIcon(category.key)}
              </div>
              <h3>{category.title}</h3>
              <p>{category.blurb}</p>
              <span className="solutions-product-card__link">
                View Products <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Technical Section */}
      <section className="solutions-technical">
        <h2 className="solutions-technical__title">
          Technical <span className="text-accent">Suitability</span>
        </h2>
        <div className="solutions-technical__grid">
          {solutionData.technicalSuitability.map((tech, index) => (
            <div key={index} className="solutions-technical__item">
              <div className="solutions-technical__header">
                <span className="solutions-technical__icon">{tech.icon}</span>
                <h4>{tech.title}</h4>
              </div>
              <ul className="solutions-technical__list">
                {tech.items.map((item, i) => (
                  <li key={i}>
                    <span className="solutions-technical__bullet">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="solutions-compliance">
        <h2>Quality & <span className="text-accent">Compliance</span></h2>
        <p className="solutions-compliance__subtitle">Certified excellence for professional construction standards</p>
        <div className="solutions-compliance__grid">
          <div className="solutions-compliance__card">
            <div className="solutions-compliance__icon">🏆</div>
            <h4>IS / ISO Compliance</h4>
            <p>Meets Indian and international standards</p>
          </div>
          <div className="solutions-compliance__card">
            <div className="solutions-compliance__icon">🧪</div>
            <h4>Performance-Tested</h4>
            <p>Rigorous laboratory and field testing</p>
          </div>
          <div className="solutions-compliance__card">
            <div className="solutions-compliance__icon">👔</div>
            <h4>Professional Use</h4>
            <p>Trusted by contractors and architects</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta">
        <div className="solutions-cta__content">
          <h2>
            Need help selecting the right<br />
            <span className="text-accent">solution for your project?</span>
          </h2>
          <p>
            Our technical experts are ready to assist you with product selection, 
            application guidance, and project support.
          </p>
          <div className="solutions-cta__actions">
            <Link to="/contact" className="solutions-btn solutions-btn--primary solutions-btn--large">
              <span>Get Consultation</span>
              <span>→</span>
            </Link>
            <Link to="/products" className="solutions-btn solutions-btn--secondary solutions-btn--large">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <FooterSection />
      </Suspense>
    </div>
  )
}

function getCategoryIcon(key: string) {
  const icons: Record<string, string> = {
    'Adhesives': '🧱',
    'Grouts': '🎨',
    'Admix': '⚗️',
    'Cleaners': '🧹',
    'Glue': '💧'
  }
  return icons[key] || '📦'
}

export default Solutions
