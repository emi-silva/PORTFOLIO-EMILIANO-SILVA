export default function Projects() {
  const proyectos = [
    {
      titulo: "Portfolio Moderno",
      descripcion: "Diseño oscuro y experiencia fluida creada con React, Vite y CSS.",
      tecnologias: "React · Vite · CSS",
      link: "#",
    },
    {
      titulo: "App de Tareas",
      descripcion: "Gestión de actividades con lógica de usuario y experiencia móvil.",
      tecnologias: "React · Node.js · MongoDB",
      link: "#",
    },
    {
      titulo: "Landing Web",
      descripcion: "Landing page responsive con una estructura clara y visual moderna.",
      tecnologias: "HTML · CSS · JavaScript",
      link: "#",
    },
  ];

  return (
    <section id="proyectos" className="projects">
      <div className="section-header">
        <p className="section-label">Proyectos</p>
        <h2>Algunos trabajos recientes</h2>
      </div>

      <div className="project-grid">
        {proyectos.map((p, i) => (
          <article key={i} className="project-card">
            <div className="project-top">
              <span className="project-tag">Proyecto</span>
              <span className="project-tech">{p.tecnologias}</span>
            </div>
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="button secondary">
              Ver más
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
