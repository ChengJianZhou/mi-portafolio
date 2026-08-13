import { useParams, Navigate, Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { projects } from '../data/projects'
import { ProjectMedia } from '../components/Projects/ProjectMedia'
import '../styles/projectDetail.css'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const { lang } = useLang()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  // Mismo patrón que ProjectCard: content[lang] con fallback a content.en
  const content = project.content[lang] ?? project.content.en

  return (
    <main className="project-detail">
      <Link to="/projects" className="project-detail__back">
        ← Proyectos
      </Link>

      <div className="project-detail__media">
        <ProjectMedia cover={project.cover} alt={content.title} />
      </div>

      <header className="project-detail__header">
        <h1 className="project-detail__title">{content.title}</h1>
        <p className="project-detail__summary">{content.summary}</p>

        <div className="project-detail__stack">
          {project.stack.map(tech => (
            <span key={tech} className="project-detail__tag">{tech}</span>
          ))}
        </div>

        <div className="project-detail__links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="btn btn-solid">
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn btn-outline">
              Demo
            </a>
          )}
        </div>
      </header>

      {/* Nota aparte, visualmente diferenciada, aclarando el rol secundario del frontend */}
      {content.frontendNote && (
        <aside className="project-detail__note">
          <span className="project-detail__note-label">Sobre el frontend</span>
          <p>{content.frontendNote}</p>
        </aside>
      )}

      <section className="project-detail__section">
        <h2 className="project-detail__section-title">El proyecto</h2>
        {content.description.map((paragraph, i) => (
          <p key={i} className="project-detail__paragraph">{paragraph}</p>
        ))}
      </section>

      {content.features?.length > 0 && (
        <section className="project-detail__section">
          <h2 className="project-detail__section-title">Puntos técnicos destacados</h2>
          <ul className="project-detail__features">
            {content.features.map((feature, i) => (
              <li key={i} className="project-detail__feature">{feature}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}