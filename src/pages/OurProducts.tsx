import { Suspense, lazy, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { catalogCategories, productsByCategory } from '../content/products'
import './OurProducts.css'

const FooterSection = lazy(() => import('../components/FooterSection'))

function CategoryIcon({ keyName }: { keyName: string }) {
  const common = { width: 32, height: 32, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const
  switch (keyName) {
    case 'Adhesives':
      return (
        <svg {...common}><path d="M4 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm3-1a1 1 0 0 0-1 1v3h10V7a1 1 0 0 0-1-1H7zm3 9h2v2H10v-2z"/></svg>
      )
    case 'Grouts':
      return (
        <svg {...common}><path d="M3 3h18v2H3V3zm2 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v8h14V9H5zm3 2h2v4H8v-4zm4 0h2v4h-2v-4z"/></svg>
      )
    case 'Admix':
      return (
        <svg {...common}><path d="M12 2a5 5 0 0 1 5 5v3h3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10h3V7a5 5 0 0 1 5-5zm-3 8h6V7a3 3 0 1 0-6 0v3z"/></svg>
      )
    case 'Cleaners':
      return (
        <svg {...common}><path d="M10 2h4l2 4h4v2h-3l-2 12H9L7 8H4V6h4l2-4zm1.6 6 1.2 8h2L15 8h-3.4z"/></svg>
      )
    default:
      return null
  }
}

function OurProductsPage() {
  const categoriesWithCounts = useMemo(() => {
    return catalogCategories.map(cat => ({
      ...cat,
      count: productsByCategory(cat.key as any).length
    }))
  }, [])

  return (
    <div className="our-products-page">
      <section className="our-products-hero">
        <div className="our-products-hero__content">
          <h1>Our Products</h1>
          <p>Explore adhesives, grouts, chemicals and accessories engineered for reliable installation.</p>
        </div>
      </section>

      <section className="our-products-categories">
        <div className="our-products-categories__grid">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.key}
              to={`/products/${category.key.toLowerCase()}`}
              className="category-card"
            >
              <div className="category-card__icon">
                <CategoryIcon keyName={category.key} />
              </div>
              <h3>{category.title}</h3>
              <p className="category-card__description">{category.blurb}</p>
              <span className="category-card__cta">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <Suspense fallback={<div className="gba-section gba-section--loading"><p>Loading…</p></div>}>
        <FooterSection />
      </Suspense>
    </div>
  )
}

export default OurProductsPage
