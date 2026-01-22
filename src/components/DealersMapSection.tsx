import './DealersMapSection.css'

function DealersMapSection() {
  return (
    <section className="gba-section gba-section--light" aria-labelledby="dealers-map-heading">
      <header className="gba-dealers__header">
        <h2 id="dealers-map-heading" className="gba-dealers__title">Distributors / Dealers (India)</h2>
        <p className="gba-dealers__subtitle">Our nationwide presence to serve you faster</p>
      </header>

      <div className="gba-dealers" role="region" aria-label="Distributors and Dealers across India">
        <figure className="gba-dealers__figure">
          <img
            src="/images/dealers-map-india.png"
            alt="Distributors and dealers locations across India"
            className="gba-dealers__img"
          />
          <figcaption className="gba-dealers__caption">Distributors / Dealers (India)</figcaption>
        </figure>

        <div className="gba-dealers__cards" aria-label="Reach us">
          <article className="gba-dealers__card" aria-labelledby="office-head">
            <div className="gba-dealers__badge">Head Office</div>
            <h3 id="office-head" className="gba-dealers__card-title">GLOBALBOND ADHESIVES PRIVATE LIMITED</h3>
            <ul className="gba-dealers__meta">
              <li><span className="gba-dealers__icon" aria-hidden>📍</span> Bahadurgarh, Haryana</li>
              <li>
                <span className="gba-dealers__icon" aria-hidden>📞</span>
                <a href="tel:+919306357300" className="gba-dealers__link">+91-9306357300</a>
              </li>
              <li>
                <span className="gba-dealers__icon" aria-hidden>✉️</span>
                <a href="mailto:globalbondgbad@gmail.com" className="gba-dealers__link">globalbondgbad@gmail.com</a>
              </li>
            </ul>
            <div className="gba-dealers__actions">
              <a className="gba-dealers__btn" href="tel:+919306357300">Call Now</a>
              <a className="gba-dealers__btn gba-dealers__btn--secondary" href="mailto:globalbondgbad@gmail.com">Email Us</a>
            </div>
          </article>

          <article className="gba-dealers__card" aria-labelledby="office-branch">
            <div className="gba-dealers__badge gba-dealers__badge--alt">Branch Office</div>
            <h3 id="office-branch" className="gba-dealers__card-title">GLOBALBOND ADHESIVES PRIVATE LIMITED</h3>
            <ul className="gba-dealers__meta">
              <li><span className="gba-dealers__icon" aria-hidden>📍</span> Vasai, Maharashtra</li>
              <li>
                <span className="gba-dealers__icon" aria-hidden>📞</span>
                <a href="tel:+919306357300" className="gba-dealers__link">+91-9306357300</a>
              </li>
              <li>
                <span className="gba-dealers__icon" aria-hidden>✉️</span>
                <a href="mailto:globalbondgbad@gmail.com" className="gba-dealers__link">globalbondgbad@gmail.com</a>
              </li>
            </ul>
            <div className="gba-dealers__actions">
              <a className="gba-dealers__btn" href="tel:+919306357300">Call Now</a>
              <a className="gba-dealers__btn gba-dealers__btn--secondary" href="mailto:globalbondgbad@gmail.com">Email Us</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default DealersMapSection
