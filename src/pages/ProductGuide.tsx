import './ProductGuide.css'
import { productGuide } from '../data/productGuide'

function ProductGuidePage() {
  return (
    <section className="gba-section gba-product-guide" aria-labelledby="pg-title">
      <header className="gba-section__header">
        <h2 id="pg-title">Product Guide</h2>
        <p>Codes, descriptions, and recommended applications</p>
      </header>

      {productGuide.map((cat) => (
        <div className="gba-pg-category" key={cat.title} role="region" aria-label={cat.title}>
          <h3 className="gba-pg-title">{cat.title}</h3>
          <div className="gba-pg-table" role="table" aria-label={`${cat.title} table`}>
            <div className="gba-pg-row gba-pg-row--head" role="row">
              <div role="columnheader">Product Code</div>
              <div role="columnheader">Description</div>
              <div role="columnheader">Where to use / Recommended</div>
            </div>
            {cat.items.map((item) => (
              <div className="gba-pg-row" role="row" key={item.code}>
                <div role="cell">{item.code}</div>
                <div role="cell">{item.name}</div>
                <div role="cell">{item.recommended}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductGuidePage
