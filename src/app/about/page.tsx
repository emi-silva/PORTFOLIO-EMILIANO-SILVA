export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Sobre Mí
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Conoce mi historia, experiencia y pasión por la tecnología
        </p>
      </section>

      {/* Contenido */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Foto y Info */}
          <div className="flex flex-col justify-center">
            <div className="w-full aspect-square bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Emili García</h2>
            <p className="text-lg text-slate-400 mb-4">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>

          {/* Descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mi Historia</h3>
            <p className="text-slate-400 mb-4">
              Soy un desarrollador full stack con más de 5 años de experiencia en el desarrollo de aplicaciones web modernas. Mi pasión es crear soluciones tecnológicas que resuelvan problemas reales y brinden valor a los usuarios.
            </p>
            <p className="text-slate-400 mb-4">
              Comenzé mi carrera como desarrollador frontend y gradualmente expandí mis habilidades hacia el backend y la gestión de bases de datos. Hoy en día, me especializo en construir aplicaciones escalables de punta a punta.
            </p>
            <p className="text-slate-400">
              Cuando no estoy codificando, me encanta aprender nuevas tecnologías, contribuir a proyectos de código abierto y compartir conocimientos con la comunidad de desarrolladores.
            </p>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Habilidades Técnicas</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
                  <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'].map((skill) => (
                  <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Herramientas */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-purple-400 mb-4">Herramientas</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'VS Code', 'Figma', 'Postman'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Metodologías */}
            <div className="bg-slate-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-pink-400 mb-4">Metodologías</h4>
              <div className="flex flex-wrap gap-2">
                {['Agile', 'Scrum', 'TDD', 'Clean Code', 'REST APIs', 'Responsive Design', 'SEO', 'Performance'].map((skill) => (
                  <span key={skill} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Experiencia</h3>
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold">Senior Developer</h4>
                <span className="text-slate-400">2023 - Presente</span>
              </div>
              <p className="text-slate-400">Tech Company A</p>
              <p className="text-slate-300 mt-2">
                Lideré el desarrollo de aplicaciones críticas para la empresa, mejorando la velocidad de entrega en un 40%.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-cyan-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold">Full Stack Developer</h4>
                <span className="text-slate-400">2021 - 2023</span>
              </div>
              <p className="text-slate-400">Tech Company B</p>
              <p className="text-slate-300 mt-2">
                Desarrollé múltiples características de producto utilizando React y Node.js, trabajando con equipos cross-funcionales.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold">Junior Developer</h4>
                <span className="text-slate-400">2019 - 2021</span>
              </div>
              <p className="text-slate-400">Tech Company C</p>
              <p className="text-slate-300 mt-2">
                Comencé mi carrera desarrollando componentes de UI y trabajando con APIs REST.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
