import './NavigationBar.css'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavigationBar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
        <div className="gba-header__brand" aria-label="GBAD Globalbond">
          <div className="gba-header__logo-box">
            <img
              src="/logo-gbad-globalbond.png"
              alt="GBAD Globalbond logo"
              className="gba-header__logo-img"
            />
          </div>
          <span className="gba-header__tagline">
            TILE ADHESIVE, GROUT, EPOXY
          </span>
        </div>

        <nav className="gba-header__links" aria-label="Main navigation">
          <Link to="/" className={isActive('/') ? 'active' : ''} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
          <Link to="/product-guide" className={isActive('/product-guide') ? 'active' : ''} aria-current={isActive('/product-guide') ? 'page' : undefined}>Product Guide</Link>
          <Link to="/products" className={isActive('/products') ? 'active' : ''} aria-current={isActive('/products') ? 'page' : undefined}>Our Products</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} aria-current={isActive('/about') ? 'page' : undefined}>About Us</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} aria-current={isActive('/contact') ? 'page' : undefined}>Contact Us</Link>
          <a href="#others">Others</a>
        </nav>

      </div>
    </header>
  )
}

export default NavigationBar
