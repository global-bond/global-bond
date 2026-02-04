import { Suspense, lazy, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { productsByCategory, catalogCategories } from '../content/products'
import type { CatalogCategory } from '../content/products'
import './ProductCategory.css'

const FooterSection = lazy(() => import('../components/FooterSection'))

function ProductCategoryPage() {
  const { category } = useParams<{ category: string }>()
  
  const categoryData = useMemo(() => {
    const raw = category ? decodeURIComponent(category) : ''
    const normalized = raw.toLowerCase()
    const cat = catalogCategories.find(c => c.key.toLowerCase() === normalized)
    if (!cat) return null
    return {
      ...cat,
      products: productsByCategory(cat.key as CatalogCategory)
    }
  }, [category])

  if (!categoryData || categoryData.products.length === 0) {
    return <Navigate to="/products" replace />
  }

  return (
    <div className="product-category-page">
      <section className="product-category-hero">
        <div className="product-category-hero__content">
          <h1>{categoryData.title}</h1>
          <p>Explore our range of {categoryData.title.toLowerCase()} products</p>
        </div>
      </section>

      <section className="product-category-products">
        <div className="gba-section__header">
          <h2>Products in {categoryData.title}</h2>
        </div>
        <div className="gba-products__grid">
          {categoryData.products.map((product) => (
            <Link
              key={`${product.code}-${product.name}`}
              to={`/product/${product.code}`}
              className="gba-product-card"
            >
              <figure className="gba-product-card__media">
                <img
                  src={product.image ?? `/images/products/${product.code}.png`}
                  alt={`${product.name} product image`}
                  className="gba-product-card__img"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.src = '/images/product-placeholder.svg'
                  }}
                />
              </figure>
              <div className="gba-product-card__content">
                <h3 className="gba-product-card__name">{product.name}</h3>
                <span className="gba-product-card__code">{product.code}</span>
                {product.type && <p className="gba-product-card__type">{product.type}</p>}
                <ul className="gba-product-card__features">
                  {product.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="gba-product-card__meta">
                  <span className="gba-product-card__pack">Pack: <strong>{product.packSize}</strong></span>
                </div>
              </div>
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

export default ProductCategoryPage
