import './AboutHeroBanner.css'

function AboutHeroBanner() {
  return (
    <section className="gba-hero-about" aria-labelledby="about-hero-heading">
      <div className="gba-hero-about__overlay" aria-hidden="true" />
      <div className="gba-hero-about__content">
        <h1 id="about-hero-heading" className="gba-hero-about__title">
          For The Builders Of
          <span>A Better World</span>
        </h1>
        <p className="gba-hero-about__subtitle">
          Crafting reliable adhesives that support the people building tomorrow.
        </p>
      </div>
    </section>
  )
}

export default AboutHeroBanner
