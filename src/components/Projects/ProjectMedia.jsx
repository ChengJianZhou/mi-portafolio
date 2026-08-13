// src/components/Projects/ProjectMedia.jsx
//
// Renderiza la portada de un proyecto según su tipo (image, gif o video).
// Centralizado aquí para no repetir la lógica en ProjectCard y, más
// adelante, en ProjectDetail.

export function ProjectMedia({ cover, alt }) {
  if (!cover) return null

  if (cover.type === 'video') {
    return (
      <video
        className="project-media"
        src={cover.src}
        autoPlay
        loop
        muted
        playsInline
      />
    )
  }

  // 'image' y 'gif' se comportan igual en el DOM
  return (
    <img className="project-media" src={cover.src} alt={alt} loading="lazy" />
  )
}