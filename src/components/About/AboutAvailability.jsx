import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'
import cv from '../../assets/cv/curriculum Chengjian Zhou.pdf'

export function AboutAvailability() {
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return (
    <section className="about__section">
      <h2 className="about__section-title">{a.availability_title}</h2>
      <p className="about__personal">{a.availability}</p>

      {/* Nota + CTA de descarga, usando el PDF real (mismo import que ContactInfo) */}
      <p className="about__cv-note">{a.cv_note}</p>
      <a href={cv} download className="btn btn-solid availability__cv-btn">
        {a.cv_download}
      </a>
    </section>
  )
}