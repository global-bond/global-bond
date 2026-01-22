import './ProductCategoriesSection.css'

const categories = [
  {
    title: 'ADHESIVES',
    description:
      'Polymer‑modified tile adhesives for ceramic, vitrified and large‑format slabs — interior & exterior.',
    accent: 'adhesives',
  },
  {
    title: 'GROUTS',
    description:
      'Cement, epoxy and exterior grouts designed for durable, color‑stable joints.',
    accent: 'grouts',
  },
  {
    title: 'ADMIX',
    description:
      'Additives and modifiers that enhance bond strength, flexibility and waterproofing.',
    accent: 'admix',
  },
  {
    title: 'CLEANERS',
    description:
      'Tile and tap cleaners for fast action, brighter shine and easy maintenance.',
    accent: 'cleaners',
  },
]

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
        {categories.map((category) => (
          <article key={category.title} className={`gba-card gba-card--${category.accent}`}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button type="button" className="gba-card__link">
              Learn more
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductCategoriesSection
