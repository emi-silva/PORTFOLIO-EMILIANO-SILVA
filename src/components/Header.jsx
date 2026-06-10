import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroWebp from "../assets/hero.webp";
import heroPng from "../assets/IMG-20221217-WA0154~2-Photoroom.png";
import TypeWriter from "./TypeWriter";
import ScrollProgress from "./ScrollProgress";

const sections = [
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Header() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <nav className="navbar">
        <span className="navbar-logo">Emiliano.dev</span>
        <div className="navbar-links">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <motion.div
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.span className="hero-greeting" variants={itemVariants}>
            Hola, soy
          </motion.span>
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span>Emiliano</span>{" "}
            <span className="accent">Silva</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            <TypeWriter /> Developer &mdash; construyo experiencias digitales modernas, rápidas y centradas en el usuario.
          </motion.p>
          <motion.div className="hero-actions" variants={itemVariants}>
            <a className="button primary" href="#proyectos">Ver proyectos</a>
            <a className="button secondary" href="#contacto">Contactarme</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <picture>
              <source srcSet={heroWebp} type="image/webp" />
              <img src={heroPng} alt="Emiliano Silva" loading="eager" />
            </picture>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
