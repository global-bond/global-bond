import React from 'react'
import './HeroBanner.css'

type Action = {
  href: string
  label: string
  variant?: 'primary' | 'ghost'
}

interface HeroBannerProps {
  backgroundImage: string
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  actions?: Action[]
  headingId?: string
}

function HeroBanner({
  backgroundImage,
  eyebrow,
  title,
  highlight,
  subtitle,
  actions,
  headingId = 'hero-heading'
}: HeroBannerProps) {
  const style = {
    backgroundImage: `url(${backgroundImage}), url('/hero-home.png')`
  } as React.CSSProperties

  return (
    <section className="gba-hero" aria-labelledby={headingId} style={style}>
      <div className="gba-hero__overlay" aria-hidden="true" />
      <div className="gba-hero__content">
        {eyebrow && <p className="gba-hero__eyebrow">{eyebrow}</p>}
        <h1 id={headingId} className="gba-hero__title">
          {title}
          {highlight && <span>{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="gba-hero__subtitle">{subtitle}</p>
        )}
        {actions && actions.length > 0 && (
          <div className="gba-hero__actions">
            {actions.map((a) => (
              <a
                key={a.href + a.label}
                href={a.href}
                className={`gba-btn ${a.variant === 'ghost' ? 'gba-btn--ghost' : 'gba-btn--primary'}`}
              >
                {a.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroBanner
