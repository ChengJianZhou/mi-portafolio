// src/components/Projects/ProjectCard.jsx
import { Link } from 'react-router-dom'
import { ProjectMedia } from './ProjectMedia'

export function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__media">
        <ProjectMedia cover={project.cover} alt={project.title} />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

        <div className="project-card__stack">
          {project.stack.map(tech => (
            <span key={tech} className="project-card__tag">{tech}</span>
          ))}
        </div> 
      </div>
    </Link>
  )
}