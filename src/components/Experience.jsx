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

export default function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="section-header">
        <p className="section-label">Sobre Mí</p>
        <h2>Transformo ideas en experiencias digitales</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Soy desarrollador full stack con especialidad en interfaces modernas,
            soluciones web escalables y experiencias centradas en el usuario. Me
            enfoco en crear productos que se vean bien, funcionen rápido y
            mantengan una sólida arquitectura técnica.
          </p>
          <p>
            Trabajo con equipos ágiles, aplico buenas prácticas de frontend y
            backend, y diseño flujos claros para cada proyecto. Mi prioridad es
            entregar resultados que destaquen por su claridad y usabilidad.
          </p>
        </div>

        <aside className="about-card">
          <div className="about-card-grid">
            <div className="quick-details">
              <h3>Detalles rápidos</h3>
              <ul>
                <li>📍 Rosario, Argentina</li>
                <li>💼 Desarrollador Full Stack</li>
                <li>🧠 +2 años de experiencia</li>
              </ul>

              <div className="logo-grid logo-grid-left">
                {[
                  { src: reactLogo, alt: 'React' },
                  { src: tailwindLogo, alt: 'TailwindCSS' },
                  { src: htmlLogo, alt: 'HTML5' },
                  { src: cssLogo, alt: 'CSS3' },
                  { src: jsLogo, alt: 'JavaScript' },
                  { src: viteLogo, alt: 'Vite' },
                  { src: nodeLogo, alt: 'Node.js' },
                  { src: vscodeLogo, alt: 'VS Code' },
                  { src: figmaLogo, alt: 'Figma' },
                  { src: mongoLogo, alt: 'MongoDB' },
                ].map((logo, index) => (
                  <div key={index} className="logo-item logo-item-small">
                    <div className="logo-badge logo-badge-small">
                      <img src={logo.src} alt={logo.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-groups">
              <div className="tech-group">
                <p className="tech-group-title">Frontend</p>
                <p>React + TailwindCSS + Framer Motion</p>
              </div>
              <div className="tech-group">
                <p className="tech-group-title">Backend</p>
                <p>Node + Express + MongoDB</p>
              </div>
              <div className="tech-group">
                <p className="tech-group-title">Despliegue</p>
                <p>Vercel (frontend) + Render (backend)</p>
              </div>
              <div className="tech-group">
                <p className="tech-group-title">Diseño</p>
                <p>Figma para prototipar tus secciones UI/UX</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
