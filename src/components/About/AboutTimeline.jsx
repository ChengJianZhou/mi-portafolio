import { useLang } from '../../context/LangContext'
import { about } from '../../data/about'

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
  const { lang } = useLang()
  const a = about[lang] ?? about.en

  return (
    <section className="about__section">
      <h2 className="about__section-title">{a.timeline_title}</h2>
      <div className="timeline">
        {a.timeline.map((entry, i) => (
          <TimelineEntry key={i} {...entry} />
        ))}
      </div>
    </section>
  )
}