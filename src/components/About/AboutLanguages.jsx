import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'

export function AboutLanguages() {
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return (
    <section className="about__section">
      <h2 className="about__section-title">{a.languages_title}</h2>
      <ul className="languages__list">
        {a.languages.map(item => (
          <li key={item.name} className="languages__item">
            <span className="languages__name">{item.name}</span>
            <span className="languages__level">{item.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}