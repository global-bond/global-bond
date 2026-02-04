import { useParams, Link } from 'react-router-dom'
import type { CatalogCategory } from '../content/products'
import { productsByCategory } from '../content/products'
import './Catalog.css'

function CatalogList() {
  const { category } = useParams<{ category: CatalogCategory }>()
  const items = category ? productsByCategory(category) : []

  return (
    <section className="gba-section">
      <div className="catalog__header">
        <h2>{category} Products</h2>
        <p>{items.length} items</p>
      </div>
      <ul className="catalog__grid" aria-label={`${category} products`}>
        {items.map(p => (
          <li className="catalog__card" key={p.code}>
            <div className="catalog__card-inner">
              <div className="catalog__meta">
                <span className="catalog__code">{p.code}</span>
                {p.type && <span className="catalog__type">{p.type}</span>}
              </div>
              <h3>{p.name}</h3>
              <p className="catalog__blurb">Pack: {p.packSize}</p>
              <Link className="catalog__link" to={`/product/${p.code}`}>View details</Link>
            </div>
          </li>
        ))}
        {items.length === 0 && (
          <li className="catalog__empty">No products for this category.</li>
        )}
      </ul>
      <div className="catalog__footer">
        <Link className="catalog__link" to="/catalog">Back to categories</Link>
      </div>
    </section>
  )
}

export default CatalogList
