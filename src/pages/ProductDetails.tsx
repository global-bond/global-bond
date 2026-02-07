import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { productByCode, guideFor } from '../content/products'
import './ProductDetails.css'

function ProductDetails() {
  const { code } = useParams<{ code: string }>()
  const product = code ? productByCode(code) : undefined
  const guide = code ? guideFor(code) : undefined

  if (!product) {
    return (
      <section className="gba-section">
        <div className="catalog__header">
          <h2>Product not found</h2>
          <p>The code "{code}" didn’t match any product.</p>
          <Link className="catalog__link" to="/catalog">Back to categories</Link>
        </div>
      </section>
    )
  }

  return (
    <main className="product-detail">
      {/* Hero Section */}
      <section className="product-detail__hero">
        <div className="product-detail__hero-glow"></div>
        <div className="product-detail__hero-content">
          <div className="product-detail__hero-left">
            <span className="product-detail__badge">{product.type || 'Professional Grade'}</span>
            <h1 className="product-detail__title">{product.name}</h1>
            <p className="product-detail__subtitle">{product.code}</p>
            <div className="product-detail__cert-card">
              <div className="product-detail__cert-icon" aria-hidden="true">🏅</div>
              <div>
                <p className="product-detail__cert-label">Certified Product</p>
                <p className="product-detail__cert-title">{product.name}</p>
                <p className="product-detail__cert-meta">{product.type || 'Standard'} Certified</p>
              </div>
            </div>
            <ProductGuideLinks />
          </div>
          <ProductImage product={product} />
        </div>
      </section>

      <section className="product-detail__main">
        <div className="product-detail__main-grid">
          <div className="product-detail__main-left">
            {/* Product Description */}
            {guide?.description && (
              <section className="product-detail__description-section">
                <div className="product-detail__container">
                  <h2>Product Description</h2>
                  <p>{guide.description}</p>
                </div>
              </section>
            )}

            {/* Features & Benefits */}
            <section className="product-detail__features-section">
              <div className="product-detail__container">
                <h2>Features & Benefits</h2>
                <ul className="product-detail__features-list">
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <span className="product-detail__check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Coverage */}
            {guide?.coverage && (
              <section className="product-detail__coverage-section">
                <div className="product-detail__container">
                  <div className="product-detail__coverage-card">
                    <div className="product-detail__coverage-icon" aria-hidden="true">📏</div>
                    <div>
                      <h3>Coverage</h3>
                      <p>{guide.coverage}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Pack Size */}
            {product.packSize && (
              <section className="product-detail__packsize-section">
                <div className="product-detail__container">
                  <div className="product-detail__packsize-card">
                    <div className="product-detail__packsize-icon" aria-hidden="true">📦</div>
                    <div>
                      <p className="product-detail__packsize-label">Available Pack Size</p>
                      <p className="product-detail__packsize-value">{product.packSize}</p>
                    </div>
                    <span className="product-detail__packsize-tag">{product.type || 'Professional Grade'}</span>
                  </div>
                </div>
              </section>
            )}

            {/* Care of Handling */}
            {guide?.careOfHandling && (
              <section className="product-detail__care-section">
                <div className="product-detail__container">
                  <h2>Care of Handling</h2>
                  <p>{guide.careOfHandling}</p>
                </div>
              </section>
            )}

            {/* Cautions */}
            {guide?.cautions && (
              <section className="product-detail__cautions-section">
                <div className="product-detail__container">
                  <h2>Cautions</h2>
                  <p>{guide.cautions}</p>
                </div>
              </section>
            )}
          </div>

          {/* Technical Specifications */}
          {(guide?.bedThickness || guide?.jointWidth || guide?.colour || guide?.walls || guide?.floors || 
            guide?.mixingRatio || guide?.potLife || guide?.settingTime || guide?.openTime || 
            guide?.adjustability || guide?.footTraffic || guide?.tensileAdhesion || 
            guide?.compressiveStrength || guide?.specificGravity || guide?.grouting) && (
            <aside className="product-detail__main-right">
              <section className="product-detail__specs-section">
                <div className="product-detail__specs-panel">
                  <h3>Technical Specifications</h3>
                  <div className="product-detail__specs-table-wrapper">
                    <table className="product-detail__specs-table">
                      <thead>
                        <tr>
                          <th scope="col">Property</th>
                          <th scope="col">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-detail__spec-label">Pack Size</td>
                          <td className="product-detail__spec-value">{product.packSize}</td>
                        </tr>
                        <tr>
                          <td className="product-detail__spec-label">Type Classification</td>
                          <td className="product-detail__spec-value">{product.type || 'Standard'}</td>
                        </tr>
                        <tr>
                          <td className="product-detail__spec-label">Category</td>
                          <td className="product-detail__spec-value">{guide?.category ?? product.category}</td>
                        </tr>
                      {guide?.bedThickness && (
                        <tr>
                          <td className="product-detail__spec-label">Bed Thickness</td>
                          <td className="product-detail__spec-value">{guide.bedThickness}</td>
                        </tr>
                      )}
                      {guide?.jointWidth && (
                        <tr>
                          <td className="product-detail__spec-label">Joint Width</td>
                          <td className="product-detail__spec-value">{guide.jointWidth}</td>
                        </tr>
                      )}
                      {guide?.colour && (
                        <tr>
                          <td className="product-detail__spec-label">Colour</td>
                          <td className="product-detail__spec-value">{guide.colour}</td>
                        </tr>
                      )}
                      {guide?.walls && (
                        <tr>
                          <td className="product-detail__spec-label">Walls</td>
                          <td className="product-detail__spec-value">{guide.walls}</td>
                        </tr>
                      )}
                      {guide?.floors && (
                        <tr>
                          <td className="product-detail__spec-label">Floors</td>
                          <td className="product-detail__spec-value">{guide.floors}</td>
                        </tr>
                      )}
                      {guide?.mixingRatio && (
                        <tr>
                          <td className="product-detail__spec-label">Mixing Ratio</td>
                          <td className="product-detail__spec-value">{guide.mixingRatio}</td>
                        </tr>
                      )}
                      {guide?.potLife && (
                        <tr>
                          <td className="product-detail__spec-label">Pot Life</td>
                          <td className="product-detail__spec-value">{guide.potLife}</td>
                        </tr>
                      )}
                      {guide?.settingTime && (
                        <tr>
                          <td className="product-detail__spec-label">Setting Time</td>
                          <td className="product-detail__spec-value">{guide.settingTime}</td>
                        </tr>
                      )}
                      {guide?.openTime && (
                        <tr>
                          <td className="product-detail__spec-label">Open Time</td>
                          <td className="product-detail__spec-value">{guide.openTime}</td>
                        </tr>
                      )}
                      {guide?.adjustability && (
                        <tr>
                          <td className="product-detail__spec-label">Adjustability</td>
                          <td className="product-detail__spec-value">{guide.adjustability}</td>
                        </tr>
                      )}
                      {guide?.footTraffic && (
                        <tr>
                          <td className="product-detail__spec-label">Foot Traffic</td>
                          <td className="product-detail__spec-value">{guide.footTraffic}</td>
                        </tr>
                      )}
                      {guide?.tensileAdhesion && (
                        <tr>
                          <td className="product-detail__spec-label">Tensile Adhesion</td>
                          <td className="product-detail__spec-value">{guide.tensileAdhesion}</td>
                        </tr>
                      )}
                      {guide?.compressiveStrength && (
                        <tr>
                          <td className="product-detail__spec-label">Compressive Strength</td>
                          <td className="product-detail__spec-value">{guide.compressiveStrength}</td>
                        </tr>
                      )}
                      {guide?.specificGravity && (
                        <tr>
                          <td className="product-detail__spec-label">Specific Gravity</td>
                          <td className="product-detail__spec-value">{guide.specificGravity}</td>
                        </tr>
                      )}
                      {guide?.grouting && (
                        <tr>
                          <td className="product-detail__spec-label">Grouting</td>
                          <td className="product-detail__spec-value">{guide.grouting}</td>
                        </tr>
                      )}
                      {guide?.recommended && (
                        <tr>
                          <td className="product-detail__spec-label">Substrate Compatibility</td>
                          <td className="product-detail__spec-value">{guide.recommended}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </aside>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-detail__cta-section">
        <div className="product-detail__cta-container">
          <h2>Ready to get started with <span className="product-detail__cta-highlight">{product.name}?</span></h2>
          <div className="product-detail__cta-buttons">
            <Link to="/contact" className="product-detail__cta-primary">Enquire Now</Link>
          </div>
        </div>
      </section>
    </main>
  )
}



function ProductImage({ product }: { product: NonNullable<ReturnType<typeof productByCode>> }) {
  const primary = product.image ?? `/images/products/${product.code}.png`
  const fallback = `/images/products/${product.code}.jpg`
  const [src, setSrc] = useState(primary)

  useEffect(() => {
    setSrc(primary)
  }, [primary])

  const onError = () => setSrc(prev => (prev.endsWith('.png') ? fallback : '/images/product-placeholder.svg'))

  return (
    <div className="product-detail__image-wrapper">
      <div className="product-detail__image-glow"></div>
      <div className="product-detail__image-container">
        <img src={src} onError={onError} alt={product.name} />
      </div>
    </div>
  )
}

function ProductGuideLinks() {
  return (
    <div className="product-detail__guides">
      <div className="product-detail__guides-header">Technical Assets</div>
      <a href="#" className="product-detail__guide-item">
        <span className="product-detail__guide-icon">📄</span> Data Sheet
      </a>
      <a href="#" className="product-detail__guide-item">
        <span className="product-detail__guide-icon">📖</span> Product Guide
      </a>
      <a href="#" className="product-detail__guide-item">
        <span className="product-detail__guide-icon">🛡️</span> MSDS
      </a>
    </div>
  )
}

export default ProductDetails
