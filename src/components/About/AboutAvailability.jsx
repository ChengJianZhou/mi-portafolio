import { useLang } from '../../context/LangContext'

export function AboutAvailability() {
  const { t } = useLang()
  const about = t('about')

  return (
    <section className="about__section about__availability">
      <div className="availability__block">
        <h2 className="about__section-title">{about.languages_title}</h2>
        <ul className="languages__list">
          {about.languages.map(lang => (
            <li key={lang.name} className="languages__item">
              <span className="languages__name">{lang.name}</span>
              <span className="languages__level">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="availability__block">
        <h2 className="about__section-title">{about.availability_title}</h2>
        <p className="about__personal">{about.availability}</p>
        {/* Reemplaza el href por la ruta real del PDF subido a public/cv/ */}
        <a
          href="../../src/assets/cv/curriculum Chengjian Zhou.pdf"
          download
          className="btn btn-solid availability__cv-btn"
        >
          {about.cv_download}
        </a>
      </div>
    </section>
  )
}