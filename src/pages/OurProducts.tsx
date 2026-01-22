import { Suspense, lazy } from 'react'

const OurProductsSection = lazy(() => import('../components/OurProductsSection'))
const FooterSection = lazy(() => import('../components/FooterSection'))

function OurProductsPage() {
  return (
    <div>
      <Suspense fallback={<div className="gba-section gba-section--loading" aria-busy="true"><p>Loading products…</p></div>}>
        <OurProductsSection />
        <FooterSection />
      </Suspense>
    </div>
  )
}

export default OurProductsPage
