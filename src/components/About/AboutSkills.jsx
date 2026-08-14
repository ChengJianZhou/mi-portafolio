import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'

function SkillGroup({ label, items }) {
  return (
    <div className="skills__group">
      <h4 className="skills__group-label">{label}</h4>
      <div className="skills__items">
        {items.map(item => (
          <span key={item} className="skills__tag">| {item} |</span>
        ))}
      </div>
    </div>
  )
}

export function AboutSkills() {
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return (
    <section className="about__section">
      <h2 className="about__section-title">{a.skills_title}</h2>
      <div className="skills">
        {Object.values(a.skills).map(group => (
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>
    </section>
  )
}