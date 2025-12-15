'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import StarryBackground from '@/components/StarryBackground';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas en tiempo real con colaboración de equipo.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Blog Platform',
    description: 'Plataforma de blogs moderna con editor de contenido enriquecido.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard del clima en tiempo real con pronóstico detallado.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Social Media Feed',
    description: 'Red social con feed dinámico, likes y comentarios en tiempo real.',
    technologies: ['Next.js', 'WebSocket', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Fitness Tracker',
    description: 'Aplicación para rastrear entrenamientos, calorías y progreso personal.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 relative">
      {/* Fondo de estrellas animadas */}
      <StarryBackground />
      
      {/* Efectos decorativos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Círculo superior izquierdo */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Círculo inferior derecho */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Círculo central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero + About Section */}
      <section id="hero" className="min-h-screen flex items-center pt-16 relative z-10">
        <div className="container mx-auto px-6 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
            {/* Contenido Principal */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hola, Soy Emiliano Silva
              </h1>
              <p className="text-lg text-slate-400 mb-4 leading-relaxed">
                Desarrollador full stack con un año de experiencia en la creación de aplicaciones web completas, desde la interfaz hasta la gestión de datos. Me destaco por construir soluciones escalables y seguras, aplicando buenas prácticas de arquitectura y validación.
              </p>
              <p className="text-lg text-slate-400 mb-4 leading-relaxed">
                He trabajado en proyectos con funcionalidades en tiempo real, sistemas de autenticación y optimización de flujos de datos, siempre priorizando la experiencia del usuario y la eficiencia del backend. Mi enfoque combina creatividad y precisión técnica, logrando entregas modernas, mantenibles y robustas.
              </p>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Cuento con experiencia en despliegue, control de versiones y pruebas, lo que me permite colaborar eficazmente en equipos y garantizar la calidad del producto final. Mi objetivo es seguir creciendo profesionalmente, aportando innovación y mejorando continuamente mis habilidades.
              </p>
              {/* Botones de acción removidos a pedido */}

              {/* Estadísticas removidas (ahora bajo la imagen) */}
            </div>

            {/* Foto y Tarjeta Perfil */}
            <div className="flex flex-col items-center justify-center mt-6 md:mt-8">
              <div className="w-64 md:w-72 aspect-square rounded-full mb-12 shadow-2xl overflow-hidden bg-slate-900">
                <img src="/images/profile.jpg" alt="Emiliano Silva" className="w-full h-full object-cover object-[50%_20%] scale-110" />
              </div>
              <div className="bg-slate-800/60 p-4 rounded-lg w-full text-center backdrop-blur border border-slate-700/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Proyectos */}
                  <div className="group relative rounded-xl p-[1px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="rounded-xl bg-slate-900/90 p-3 flex flex-col items-center justify-center h-full shadow-lg transition-colors duration-300 group-hover:bg-slate-900/70">
                      <span className="text-2xl font-bold text-blue-400">35+</span>
                      <span className="text-slate-400 text-xs">Proyectos</span>
                    </div>
                  </div>

                  {/* Experiencia */}
                  <div className="group relative rounded-xl p-[1px] bg-linear-to-r from-cyan-500 to-emerald-500 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="rounded-xl bg-slate-900/90 p-3 flex flex-col items-center justify-center h-full shadow-lg transition-colors duration-300 group-hover:bg-slate-900/70">
                      <span className="text-2xl font-bold text-cyan-300">1.5+</span>
                      <span className="text-slate-400 text-xs">Años de experiencia</span>
                    </div>
                  </div>

                  {/* Satisfacción */}
                  <div className="group relative rounded-xl p-[1px] bg-linear-to-r from-emerald-500 to-teal-500 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="rounded-xl bg-slate-900/90 p-3 flex flex-col items-center justify-center h-full shadow-lg transition-colors duration-300 group-hover:bg-slate-900/70">
                      <span className="text-2xl font-bold text-emerald-400">100%</span>
                      <span className="text-slate-400 text-xs">Satisfacción</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mt-36">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tecnologías Principales</h2>
            <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="bg-slate-800/80 hover:bg-slate-800 transition rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">🌐 Frontend</h3>
                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc pl-5">
                  <li><span className="text-slate-200 font-medium">HTML5, CSS3 y JavaScript (ES6+)</span>: base sólida para cualquier desarrollo web.</li>
                  <li><span className="text-slate-200 font-medium">Frameworks modernos</span>:</li>
                  <li>React (el más demandado, ideal para SPAs y ecosistemas grandes).</li>
                  <li>Alternativas: Angular o Vue, aunque React suele ser la mejor inversión inicial.</li>
                  <li><span className="text-slate-200 font-medium">Herramientas de estilo</span>: Tailwind CSS, Sass o Styled Components para modularidad y rapidez.</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-slate-800/80 hover:bg-slate-800 transition rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">⚙️ Backend</h3>
                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc pl-5">
                  <li><span className="text-slate-200 font-medium">Node.js</span>: entorno de ejecución rápido y asíncrono.</li>
                  <li><span className="text-slate-200 font-medium">Express.js</span>: framework ligero para construir APIs RESTful.</li>
                  <li>Otros lenguajes útiles: <span className="text-slate-200">Python (Django/Flask)</span> o <span className="text-slate-200">Java (Spring Boot)</span>, aunque con Node.js ya cubrís gran parte de las necesidades.</li>
                </ul>
              </div>

              {/* Bases de datos */}
              <div className="bg-slate-800/80 hover:bg-slate-800 transition rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">🗄️ Bases de datos</h3>
                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc pl-5">
                  <li><span className="text-slate-200 font-medium">SQL</span>: PostgreSQL o MySQL para datos estructurados.</li>
                  <li><span className="text-slate-200 font-medium">NoSQL</span>: MongoDB, muy usado en proyectos modernos.</li>
                </ul>
              </div>

              {/* Testing y calidad */}
              <div className="bg-slate-800/80 hover:bg-slate-800 transition rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-orange-300 to-pink-400 bg-clip-text text-transparent">🧪 Testing y calidad</h3>
                <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc pl-5">
                  <li><span className="text-slate-200 font-medium">Jest / Mocha / Chai</span>: pruebas unitarias y de integración.</li>
                  <li><span className="text-slate-200 font-medium">Postman / Insomnia</span>: testeo de APIs.</li>
                  <li><span className="text-slate-200 font-medium">ESLint / Prettier</span>: mantener código limpio y consistente.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-xl text-slate-400 max-w-2xl mb-12">
            Aquí encontrarás una selección de mis proyectos más destacados. Cada uno representa mi dedicación a la calidad y la innovación.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-slate-400 max-w-2xl mb-12">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? Déjame saber cómo puedo ayudarte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Información de Contacto */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Email</h3>
                  <a href="mailto:emili@example.com" className="text-slate-300 hover:text-blue-400 transition">
                    emili@example.com
                  </a>
                </div>

                {/* Teléfono */}
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Teléfono</h3>
                  <a href="tel:+34123456789" className="text-slate-300 hover:text-cyan-400 transition">
                    +34 123 456 789
                  </a>
                </div>

                {/* Redes Sociales */}
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Redes Sociales</h3>
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
                  <h3 className="text-lg font-bold mb-2 bg-linear-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">Ubicación</h3>
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
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Disponibilidad</h3>
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
        </div>
      </section>
    </div>
  );
}
