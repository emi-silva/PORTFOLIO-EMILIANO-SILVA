import { useState } from "react";
import { motion } from "framer-motion";
import proyectos from "../data/projects.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ProjectImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="project-image-fallback">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>
    );
  }

  return (
    <img
      className="project-image"
      src={src}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  return (
    <motion.section
      id="proyectos"
      className="projects-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-label">Proyectos</p>
        <h2 className="section-title">Trabajos recientes</h2>
      </motion.div>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {proyectos.map((p, i) => (
          <motion.article
            key={i}
            className="project-card"
            variants={cardVariants}
          >
            <ProjectImage src={p.imagen} alt={p.titulo} />
            <div className="project-top">
              <span className="project-tag">Proyecto</span>
              <span className="project-tech">{p.tecnologias}</span>
            </div>
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="button secondary">
              Ver más →
            </a>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
