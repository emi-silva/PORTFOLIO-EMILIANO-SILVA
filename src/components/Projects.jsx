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
        className="featured-project"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="featured-project-image">⚡</div>
        <div className="featured-project-content">
          <h3>Portfolio Profesional</h3>
          <p>
            Diseño oscuro con animaciones suaves, tipografía bold y experiencia
            fluida. Construido con React, Vite, Framer Motion y modo oscuro/claro.
          </p>
          <a className="button primary" href="#">Ver proyecto →</a>
        </div>
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
