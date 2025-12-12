import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Ponte en Contacto
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          ¿Tienes un proyecto en mente? ¿Quieres colaborar? Déjame saber cómo puedo ayudarte.
        </p>
      </section>

      {/* Contenido */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Información de Contacto */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-400 mb-2">Email</h3>
                <a href="mailto:emili@example.com" className="text-slate-300 hover:text-blue-400 transition">
                  emili@example.com
                </a>
              </div>

              {/* Teléfono */}
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Teléfono</h3>
                <a href="tel:+34123456789" className="text-slate-300 hover:text-cyan-400 transition">
                  +34 123 456 789
                </a>
              </div>

              {/* Redes Sociales */}
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-purple-400 mb-4">Redes Sociales</h3>
                <div className="space-y-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-300 hover:text-purple-400 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-300 hover:text-purple-400 transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-300 hover:text-purple-400 transition"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-pink-400 mb-2">Ubicación</h3>
                <p className="text-slate-300">Madrid, España 🇪🇸</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Mapa de Disponibilidad */}
        <div className="bg-slate-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Disponibilidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-slate-400 mb-2">Freelance Projects</p>
              <p className="text-2xl font-bold text-green-400">Disponible</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 mb-2">Tiempo de Respuesta</p>
              <p className="text-2xl font-bold text-blue-400">24 horas</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 mb-2">Horario Laboral</p>
              <p className="text-2xl font-bold text-cyan-400">Flexible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
