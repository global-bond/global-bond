import { Link } from 'react-router-dom'
import './Catalog.css'
import { catalogCategories } from '../content/products'

function CategoryIcon({ keyName }: { keyName: string }) {
  const common = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true } as const
  switch (keyName) {
    case 'Adhesives':
      return <svg {...common}><path d="M4 7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm3-1a1 1 0 0 0-1 1v3h10V7a1 1 0 0 0-1-1H7zm3 9h2v2H10v-2z"/></svg>
    case 'Grouts':
      return <svg {...common}><path d="M3 3h18v2H3V3zm2 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v8h14V9H5zm3 2h2v4H8v-4zm4 0h2v4h-2v-4z"/></svg>
    case 'Admix':
      return <svg {...common}><path d="M12 2a5 5 0 0 1 5 5v3h3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10h3V7a5 5 0 0 1 5-5zm-3 8h6V7a3 3 0 1 0-6 0v3z"/></svg>
    case 'Cleaners':
      return <svg {...common}><path d="M10 2h4l2 4h4v2h-3l-2 12H9L7 8H4V6h4l2-4zm1.6 6 1.2 8h2L15 8h-3.4z"/></svg>
    default:
      return null
  }
}

function CatalogCategories() {
  return (
    <section className="gba-section">
      <div className="catalog__header">
        <h2>Product Categories</h2>
        <p>Select a category to browse products.</p>
      </div>
      <ul className="catalog__grid" aria-label="Product categories">
        {catalogCategories.map(c => (
          <li className="catalog__card" key={c.key}>
            <div className="catalog__card-inner">
              <div className="catalog__icon" aria-hidden="true"><CategoryIcon keyName={c.key} /></div>
              <h3>{c.title}</h3>
              <p className="catalog__blurb">{c.blurb}</p>
              <Link className="catalog__link" to={`/catalog/${c.key}`}>View {c.title}</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CatalogCategories
