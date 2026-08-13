import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsGrid() {
  return (
    <div className="projects__grid">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}