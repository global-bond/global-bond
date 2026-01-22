import { lazy, Suspense } from 'react'
import HeroSection from '../components/HeroSection'

const ProductCategoriesSection = lazy(() => import('../components/ProductCategoriesSection'))
const ResourcesSection = lazy(() => import('../components/ResourcesSection'))
const IndustriesSection = lazy(() => import('../components/IndustriesSection'))
const StoriesSection = lazy(() => import('../components/StoriesSection'))
const DealersMapSection = lazy(() => import('../components/DealersMapSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const FooterSection = lazy(() => import('../components/FooterSection'))

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div className="gba-section gba-section--loading" aria-busy="true"><p>Loading sections…</p></div>}>
        <ProductCategoriesSection />
        <ResourcesSection />
        <IndustriesSection />
        <StoriesSection />
        <DealersMapSection />
        <ContactSection />
        <FooterSection />
      </Suspense>
    </div>
  )
}

export default HomePage
