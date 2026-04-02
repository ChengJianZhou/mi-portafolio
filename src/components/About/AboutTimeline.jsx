import { useLang } from '../../context/LangContext'

function TimelineEntry({ year, title, desc }) {
  return (
    <div className="timeline__entry">
      <span className="timeline__year">{year}</span>
      <div className="timeline__body">
        <h4 className="timeline__title">{title}</h4>
        <p className="timeline__desc">{desc}</p>
      </div>
    </div>
  )
}

export function AboutTimeline() {
  const { t } = useLang()
  const about = t('about')

  return (
    <section className="about__section">
      <h2 className="about__section-title">{about.timeline_title}</h2>
      <div className="timeline">
        {about.timeline.map((entry, i) => (
          <TimelineEntry key={i} {...entry} />
        ))}
      </div>
    </section>
  )
}
