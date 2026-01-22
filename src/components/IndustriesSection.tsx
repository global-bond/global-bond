import './IndustriesSection.css'

const industries = [
  {
    name: 'Commercial & Institutional',
    summary: 'Premium finishes for offices, hospitality, and public spaces.',
  },
  {
    name: 'Residential',
    summary: 'Comfort‑first systems for modern homes, villas, and apartments.',
  },
  {
    name: 'Infrastructure & Utilities',
    summary: 'High‑duty performance for transport hubs and public utilities.',
  },
  {
    name: 'Industrial',
    summary: 'Durable flooring and lining solutions for heavy‑load environments.',
  },
]

function IndustriesSection() {
  return (
    <section id="industries" className="gba-section gba-section--light">
      <div className="gba-section__header">
        <h2>Top Solutions for Your Industry</h2>
        <p>
          Explore curated solutions designed around performance, lifecycle costs, and installation speed.
        </p>
      </div>
      <div className="gba-industries">
        {industries.map((industry) => (
          <article key={industry.name} className="gba-industries__card">
            <h3>{industry.name}</h3>
            <p>{industry.summary}</p>
            <button type="button" className="gba-industries__link">
              Explore systems
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default IndustriesSection
