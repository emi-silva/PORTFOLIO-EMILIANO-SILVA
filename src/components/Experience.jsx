import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/icons8-tailwind-css-48.png";
import htmlLogo from "../assets/icons8-html-5-48.png";
import cssLogo from "../assets/icons8-css-48.png";
import jsLogo from "../assets/icons8-javascript-48.png";
import viteLogo from "../assets/vite.svg";
import nodeLogo from "../assets/icons8-node-js-48.png";
import vscodeLogo from "../assets/icons8-visual-studio-code-2019-48.png";
import figmaLogo from "../assets/icons8-figma-48.png";
import mongoLogo from "../assets/icons8-mongodb-48.png";

const logos = [
  { src: reactLogo, alt: "React" },
  { src: tailwindLogo, alt: "TailwindCSS" },
  { src: htmlLogo, alt: "HTML5" },
  { src: cssLogo, alt: "CSS3" },
  { src: jsLogo, alt: "JavaScript" },
  { src: viteLogo, alt: "Vite" },
  { src: nodeLogo, alt: "Node.js" },
  { src: vscodeLogo, alt: "VS Code" },
  { src: figmaLogo, alt: "Figma" },
  { src: mongoLogo, alt: "MongoDB" },
];

const experiences = [
  {
    emoji: "💻",
    title: "Desarrollador Full Stack",
    role: "Freelance · 2024 — Presente",
    desc: "Creación de aplicaciones web completas con React, Node.js y MongoDB. Desarrollo de interfaces modernas y APIs REST escalables para clientes.",
  },
  {
    emoji: "🎨",
    title: "Diseñador UI/UX",
    role: "Proyectos personales · 2023 — Presente",
    desc: "Diseño de prototipos en Figma con enfoque en experiencia de usuario, accesibilidad y diseño responsive para web y mobile.",
  },
  {
    emoji: "🚀",
    title: "Proyectos destacados",
    role: "Open source · 2024 — Presente",
    desc: "Contribución a proyectos open source y desarrollo de herramientas web modernas con Vite, TailwindCSS y Framer Motion.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <motion.section
      id="experiencia"
      className="experience-section"
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
        <p className="section-label">Experiencia</p>
        <h2 className="section-title">Experiencia &amp; Skills</h2>
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, i) => (
          <motion.div key={i} className="timeline-card" variants={cardVariants}>
            <div className="timeline-icon">{exp.emoji}</div>
            <div className="timeline-body">
              <h3>{exp.title}</h3>
              <p className="timeline-role">{exp.role}</p>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="skills-grid">
        <motion.div
          className="skill-group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3>Frontend</h3>
          <p className="skill-desc">React + TailwindCSS + Framer Motion</p>
          <div className="logo-grid">
            {logos.slice(0, 5).map((logo, i) => (
              <div key={i} className="logo-item">
                <div className="logo-badge">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skill-group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3>Backend &amp; Tools</h3>
          <p className="skill-desc">Node + Express + MongoDB + Figma</p>
          <div className="logo-grid">
            {logos.slice(5).map((logo, i) => (
              <div key={i} className="logo-item">
                <div className="logo-badge">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="about-card">
          <ul>
            <li>📍 Rosario, Argentina</li>
            <li>💼 Desarrollador Full Stack</li>
            <li>🧠 +2 años de experiencia</li>
          </ul>
        </div>
        <div className="about-card">
          <p>
            Apasionado por crear soluciones digitales que combinan diseño atractivo
            con código sólido. Siempre explorando nuevas tecnologías.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
