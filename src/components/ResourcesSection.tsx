import './ResourcesSection.css'

const personas = [
  {
    id: 'architects',
    label: 'Architects',
    description:
      'Specification‑ready datasheets, BIM objects, and curated systems for signature projects.',
  },
  {
    id: 'contractors',
    label: 'Contractors',
    description:
      'Application guides, method statements, and on‑site checklists for flawless execution.',
  },
  {
    id: 'distributors',
    label: 'Distributors',
    description:
      'Training assets, launch kits, and marketing collaterals to grow your adhesive category.',
  },
  {
    id: 'homeowners',
    label: 'Homeowners',
    description:
      'Simple product selectors and visualizers to help choose the right solution.',
  },
]

function ResourcesSection() {
  return (
    <section id="resources" className="gba-section">
      <div className="gba-section__header">
        <h2>Resources and Tools</h2>
        <p>
          Designed around how you workdiscover tailored tools, calculators, and reference projects.
        </p>
      </div>
      <div className="gba-resources">
        <div className="gba-resources__personas" aria-label="Resources by audience">
          {personas.map((persona) => (
            <article key={persona.id} className="gba-resources__persona-card">
              <h3>{persona.label}</h3>
              <p>{persona.description}</p>
              <button type="button" className="gba-resources__link">
                View resources
              </button>
            </article>
          ))}
        </div>
        <div className="gba-resources__utilities">
          <h3>Utility Calculators</h3>
          <ul>
            <li>Adhesive coverage calculator</li>
            <li>Grout consumption estimator</li>
            <li>Substrate readiness checklist</li>
          </ul>
          <p className="gba-resources__note">
            These are conceptual tools. Integrate them with your back‑end or CRM to power real‑time project planning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResourcesSection
