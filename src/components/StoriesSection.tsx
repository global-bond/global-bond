import './StoriesSection.css'

const stories = [
  {
    title: 'Metro concourse, Southeast Asia',
    description:
      'Rapid‑set systems allowed overnight tile replacement across 12,000 m8 of traffic‑intense concourses.',
  },
  {
    title: 'Luxury hotel tower, Middle East',
    description:
      'Large‑format marble installed across wet and dry areas with flex adhesives and epoxy grouts.',
  },
  {
    title: 'Manufacturing plant, Europe',
    description:
      'Anti‑static, chemical‑resistant flooring withstands heavy traffic and aggressive cleaning cycles.',
  },
]

function StoriesSection() {
  return (
    <section id="stories" className="gba-section">
      <div className="gba-section__header">
        <h2>Proven Results, Happier Clients</h2>
        <p>
          A snapshot of how Global Bond Adhesives solutions help projects open faster and perform longer.
        </p>
      </div>
      <div className="gba-stories">
        {stories.map((story) => (
          <article key={story.title} className="gba-stories__card">
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <button type="button" className="gba-stories__link">
              View case study
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoriesSection
