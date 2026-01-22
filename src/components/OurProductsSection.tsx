import './OurProductsSection.css'
import { products } from '../data/products'

function OurProductsSection() {
  return (
    <section id="products" className="gba-section gba-section--light" aria-labelledby="products-title">
      <div className="gba-section__header">
        <h2 id="products-title">Our Products</h2>
        <p>Explore adhesives, grouts, chemicals and accessories engineered for reliable installation.</p>
      </div>

      {products.map((cat) => (
        <div className="gba-products__category" key={cat.title} role="region" aria-label={cat.title}>
          <h3 className="gba-products__title">{cat.title}</h3>
          <div className="gba-products__grid" aria-label={`${cat.title} products`}>
            {cat.items.map((p) => (
              <article key={`${p.code}-${p.name}`} className="gba-product">
                <figure className="gba-product__media">
                  <img
                    src={p.image ?? `/images/products/${p.code}.png`}
                    alt={`${p.name} product image`}
                    className="gba-product__img"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement
                      img.src = '/images/product-placeholder.svg'
                    }}
                  />
                </figure>
                <header className="gba-product__header">
                  <h4 className="gba-product__name">{p.name}</h4>
                  <span className="gba-product__code" aria-label="Product code">{p.code}</span>
                </header>
                {p.type && <p className="gba-product__type">{p.type}</p>}
                <ul className="gba-product__features">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="gba-product__meta">
                  <span className="gba-product__pack">Pack Size: <strong>{p.packSize}</strong></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default OurProductsSection
