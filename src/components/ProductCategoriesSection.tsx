import './ProductCategoriesSection.css'
import { Link } from 'react-router-dom'
import { catalogCategories } from '../content/products'

function CategoryIcon({ keyName }: { keyName: string }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const
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

function ProductCategoriesSection() {
  return (
    <section id="solutions" className="gba-section gba-section--light">
      <div className="gba-section__header">
        <h2>Product Categories</h2>
        <p>
          A complete portfolio of adhesives and systems engineered to perform from substrate to surface.
        </p>
      </div>
      <div className="gba-cards-grid" aria-label="Product categories">
        {catalogCategories.map((c) => (
          <article key={c.key} className={`gba-card gba-card--${c.key.toLowerCase()}`}>
            <div className="gba-card__icon" aria-hidden="true"><CategoryIcon keyName={c.key} /></div>
            <h3>{c.title.toUpperCase()}</h3>
            <p>{c.blurb}</p>
            <Link to={`/catalog/${c.key}`} className="gba-card__link" aria-label={`View ${c.title}`}>
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductCategoriesSection
