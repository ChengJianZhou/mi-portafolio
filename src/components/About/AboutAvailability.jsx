import { useLang } from '../../context/LangContext'
import cvFile from '../../assets/cv/curriculum Chengjian Zhou.pdf'

export function AboutAvailability() {
  const { t } = useLang()
  const about = t('about')

  return (
    <section className="about__section">
      <h2 className="about__section-title">{about.availability_title}</h2>
      <p className="about__personal">{about.availability}</p>
      {/* Reemplaza el href por la ruta real del PDF subido a public/cv/ */}
      <a
        href={cvFile}
        download
        className="btn btn-solid availability__cv-btn"
      >
        {about.cv_download}
      </a>
    </section>
  )
}