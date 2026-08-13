import { useLang } from '../../context/LangContext'

export function AboutLanguages() {
  const { t } = useLang()
  const about = t('about')

  return (
    <section className="about__section">
      <h2 className="about__section-title">{about.languages_title}</h2>
      <ul className="languages__list">
        {about.languages.map(lang => (
          <li key={lang.name} className="languages__item">
            <span className="languages__name">{lang.name}</span>
            <span className="languages__level">{lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}