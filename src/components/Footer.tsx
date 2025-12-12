'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Emili Dev</h3>
            <p className="text-slate-400">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras.
            </p>
          </div>

          {/* Sección 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection('hero')} className="text-slate-400 hover:text-blue-400 transition text-left">
                Inicio
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-blue-400 transition text-left">
                Proyectos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-blue-400 transition text-left">
                Contacto
              </button>
            </div>
          </div>

          {/* Sección 3 - Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sígueme</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400">
            © {currentYear} Emili Dev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
