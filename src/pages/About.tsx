import { lazy, Suspense } from 'react'
import HeroBanner from '../components/HeroBanner'

const AboutSection = lazy(() => import('../components/AboutSection'))
const FooterSection = lazy(() => import('../components/FooterSection'))

function AboutPage() {
  return (
    <div>
      <HeroBanner
        backgroundImage="/images/about-hero.png"
        title="For The Builders Of"
        highlight="A Better World"
        subtitle="Crafting reliable adhesives that support the people building tomorrow."
        headingId="about-hero-heading"
      />
      <Suspense fallback={<div className="gba-section gba-section--loading" aria-busy="true"><p>Loading About…</p></div>}>
        <AboutSection />
        <FooterSection />
      </Suspense>
    </div>
  )
}

export default AboutPage
