import { lazy, Suspense, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home.tsx'))
const AboutPage = lazy(() => import('./pages/About.tsx'))
const ProductGuidePage = lazy(() => import('./pages/ProductGuide.tsx'))
const OurProductsPage = lazy(() => import('./pages/OurProducts.tsx'))
const ContactPage = lazy(() => import('./pages/Contact.tsx'))

function App() {
  useEffect(() => {
    const setHeaderHeight = () => {
      const el = document.querySelector('.gba-header') as HTMLElement | null
      const h = el ? el.offsetHeight : 110
      document.documentElement.style.setProperty('--gba-header-height', `${h}px`)
    }
    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    return () => window.removeEventListener('resize', setHeaderHeight)
  }, [])
  return (
    <div className="gba-app">
      <NavigationBar />
      <Suspense fallback={<div className="gba-section gba-section--loading" aria-busy="true"><p>Loading…</p></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product-guide" element={<ProductGuidePage />} />
          <Route path="/products" element={<OurProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
