import heroImg from "../assets/hero.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <span className="brand">emi-dev</span>
        <nav className="header-nav">
          <a href="#experiencia">Sobre Mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>

      <div className="header-body">
        <div className="header-content">
          <span className="eyebrow">Hola, soy</span>
          <h1>Emiliano Silva</h1>
          <p className="subtitle">
            Construyo sitios web modernos con una experiencia de usuario limpia,
            rápida y profesional. Mi foco está en soluciones digitales que sean
            visualmente atractivas y fáciles de usar.
          </p>

          <div className="hero-chips">
            <span>Full Stack</span>
            <span>React</span>
            <span>Node.js</span>
            <span>UI/UX</span>
          </div>

          <div className="hero-actions">
            <a className="button primary" href="#proyectos">Ver proyectos</a>
            <a className="button secondary" href="#contacto">Contactarme</a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImg} alt="Foto de Emiliano" />
        </div>
      </div>
    </header>
  );
}
