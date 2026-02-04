import HeroBanner from './HeroBanner'

function HeroSection() {
  return (
    <HeroBanner
      backgroundImage="/hero-home.png"
      eyebrow="GLOBALBOND ADHESIVES PVT. LTD."
      title="Beauty Meets Durability"
      highlight="— Discover Your Perfect Tile."
      subtitle="Globalbond Adhesives combines trusted quality and long-lasting performance, providing construction adhesives for a wide range of tiles and stones."
      actions={[
        { href: '#contact', label: 'Get Consultation', variant: 'primary' },
        { href: '/catalog', label: 'View Our Products', variant: 'ghost' }
      ]}
      headingId="hero-heading"
    />
  )
}

export default HeroSection
