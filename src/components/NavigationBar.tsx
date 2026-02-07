import './NavigationBar.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { catalogCategories, productsByCategory } from '../content/products'
import type { CatalogCategory } from '../content/products'

function NavigationBar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lastYRef = useRef<number>(0)

  useEffect(() => {
    const threshold = 8 // small noise guard
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      const lastY = lastYRef.current
      setScrolled(y > 8)

      if (y > lastY + threshold && y > 80) {
        // scrolling down beyond header area -> hide
        setHidden(true)
      } else if (y < lastY - threshold || y <= 80) {
        // scrolling up or near top -> show
        setHidden(false)
      }
      lastYRef.current = y
    }

    // initialize
    lastYRef.current = window.scrollY || 0
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const location = useLocation()
  const isActive = (path: string) => location.pathname === path
  const isProductsActive = location.pathname.startsWith('/products')

  const [productsOpen, setProductsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CatalogCategory | null>(null)
  const [activeOffset, setActiveOffset] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!productsOpen) return
    const onClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProductsOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [productsOpen])

  useEffect(() => {
    if (!productsOpen) return
    setActiveCategory(null)
    setActiveOffset(0)
  }, [productsOpen])

  const activeProducts = useMemo(() => {
    if (!activeCategory) return []
    return productsByCategory(activeCategory)
  }, [activeCategory])

  return (
    <header className={`gba-header ${hidden ? 'gba-header--hidden' : ''} ${scrolled ? 'gba-header--scrolled' : ''}`}>
      <div className="gba-header__top">
        <div className="gba-header__top-left">
          <span className="gba-header__top-item gba-header__top-item--phone">
            +91-9306357300
          </span>
          <span className="gba-header__divider" aria-hidden="true">
            |
          </span>
          <span className="gba-header__top-item">
            Monday to Saturday: <strong>9:00am - 6:00pm</strong>
          </span>
        </div>
        <div className="gba-header__top-right">
          <span className="gba-header__top-link">
            <span className="gba-header__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" focusable="false">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </span>
            Location
          </span>
          <span className="gba-header__divider" aria-hidden="true">
            |
          </span>
          <span className="gba-header__top-link">
            <span className="gba-header__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" focusable="false">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 3.2l8 5 8-5V7H4v1.2z"/>
              </svg>
            </span>
            Email us
          </span>
          <a className="gba-header__social" href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" focusable="false" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.01 3.657 9.159 8.438 9.878v-6.988H8.898v-2.89h1.54V9.845c0-1.52.907-2.362 2.297-2.362.665 0 1.362.118 1.362.118v1.497h-.767c-.756 0-.993.469-.993.949v1.138h1.69l-.27 2.89h-1.42v6.988C18.343 21.159 22 17.01 22 12z"/>
            </svg>
          </a>
          <a className="gba-header__social" href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" focusable="false" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm6.5-.8a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="gba-header__main">
        <Link to="/" className="gba-header__brand" aria-label="GBAD Globalbond">
          <div className="gba-header__logo-box">
            <img
              src="/logo-gbad-globalbond.svg"
              alt="GBAD Globalbond logo"
              className="gba-header__logo-img"
            />
          </div>
          <span className="gba-header__tagline">Tile Adhesive, Grout, Epoxy</span>
        </Link>

        <nav className="gba-header__links" aria-label="Main navigation">
          <Link to="/" className={`gba-nav__link ${isActive('/') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/product-guide" className={`gba-nav__link ${isActive('/product-guide') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Product Guide
          </Link>
          <div className={`gba-nav__dropdown ${productsOpen ? 'is-open' : ''}`} ref={dropdownRef}>
            <button
              type="button"
              className={`gba-nav__link gba-nav__link--button ${isProductsActive ? 'gba-nav__link--active' : ''}`}
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen(open => !open)}
            >
              Products
            </button>
            <div
              className="gba-mega"
              role="menu"
              aria-label="Product categories"
              onMouseLeave={() => {
                setActiveCategory(null)
                setActiveOffset(0)
              }}
            >
              <div className="gba-mega__cats">
                {catalogCategories.map(cat => (
                  <Link
                    key={cat.key}
                    to={`/products/${encodeURIComponent(cat.key)}`}
                    className={`gba-mega__cat ${activeCategory === cat.key ? 'is-active' : ''}`}
                    onMouseEnter={event => {
                      setActiveCategory(cat.key)
                      setActiveOffset((event.currentTarget as HTMLAnchorElement).offsetTop)
                    }}
                    onFocus={event => {
                      setActiveCategory(cat.key)
                      setActiveOffset((event.currentTarget as HTMLAnchorElement).offsetTop)
                    }}
                    onClick={() => setProductsOpen(false)}
                  >
                    {cat.title}
                  </Link>
                ))}
                {activeCategory && productsOpen && (
                  <div className="gba-mega__submenu" style={{ top: activeOffset }}>
                    <div className="gba-mega__submenu-title">{activeCategory}</div>
                    <div className="gba-mega__submenu-list">
                      {activeProducts.length === 0 ? (
                        <span className="gba-mega__submenu-empty">No products found.</span>
                      ) : (
                        activeProducts.map(product => (
                          <Link
                            key={product.code}
                            to={`/product/${encodeURIComponent(product.code)}`}
                            className="gba-mega__submenu-item"
                            onClick={() => setProductsOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link to="/about" className={`gba-nav__link ${isActive('/about') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className={`gba-nav__link ${isActive('/contact') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Button for Mobile */}
        <button
          className={`gba-header__menu-btn ${mobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="gba-header__mobile-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Drawer */}
        <nav className={`gba-header__mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
          <Link to="/" className={`gba-nav__link ${isActive('/') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/product-guide" className={`gba-nav__link ${isActive('/product-guide') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Product Guide
          </Link>
          <Link to="/products" className={`gba-nav__link ${isProductsActive ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Products
          </Link>
          <Link to="/about" className={`gba-nav__link ${isActive('/about') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className={`gba-nav__link ${isActive('/contact') ? 'gba-nav__link--active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="gba-header__actions">
          <Link to="/contact" className="gba-header__cta">Get Consultation</Link>
        </div>

      </div>
    </header>
  )
}

export default NavigationBar
