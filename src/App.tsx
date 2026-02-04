import { lazy, Suspense, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/Home.tsx'))
const AboutPage = lazy(() => import('./pages/About.tsx'))
const ProductGuidePage = lazy(() => import('./pages/ProductGuide.tsx'))
const OurProductsPage = lazy(() => import('./pages/OurProducts.tsx'))
const ProductCategoryPage = lazy(() => import('./pages/ProductCategory.tsx'))
const ContactPage = lazy(() => import('./pages/Contact.tsx'))
const CatalogCategoriesPage = lazy(() => import('./pages/CatalogCategories'))
const CatalogListPage = lazy(() => import('./pages/CatalogList'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetails'))
const SolutionsPage = lazy(() => import('./pages/Solutions'))

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
          <Route path="/products/:category" element={<ProductCategoryPage />} />
          <Route path="/catalog" element={<CatalogCategoriesPage />} />
          <Route path="/catalog/:category" element={<CatalogListPage />} />
          <Route path="/product/:code" element={<ProductDetailsPage />} />
          <Route path="/solutions/:solution" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
