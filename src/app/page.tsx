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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero + About Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20 relative z-10">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            {/* Contenido Principal */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hola, Soy Emiliano Silva
              </h1>
              <p className="text-lg text-slate-400 mb-4 leading-relaxed">
                Soy un desarrollador Full Stack con más de 5 años de experiencia en el desarrollo de aplicaciones web modernas. Mi pasión es crear soluciones tecnológicas que resuelvan problemas reales y brinden valor a los usuarios.
              </p>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Especializado en React, Next.js, Node.js y TypeScript. Apasionado por aprender nuevas tecnologías y compartir conocimientos con la comunidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                >
                  Ver Proyectos
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg font-semibold transition"
                >
                  Contactarme
                </button>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg text-center hover:bg-slate-700 transition">
                  <h3 className="text-2xl font-bold text-blue-400 mb-1">50+</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Proyectos</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg text-center hover:bg-slate-700 transition">
                  <h3 className="text-2xl font-bold text-blue-400 mb-1">5+</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Experiencia</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg text-center hover:bg-slate-700 transition">
                  <h3 className="text-2xl font-bold text-blue-400 mb-1">100%</h3>
                  <p className="text-xs sm:text-sm text-slate-400">Satisfacción</p>
                </div>
              </div>
            </div>

            {/* Foto y Tarjeta Perfil */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full max-w-xs aspect-square bg-linear-to-br from-blue-500 to-cyan-500 rounded-full mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-8xl">👨‍💻</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg w-full text-center">
                <h3 className="text-2xl font-bold mb-2">Emili García</h3>
                <p className="text-slate-400 mb-4">Full Stack Developer</p>
                <div className="flex gap-2 justify-center">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Problem Solver</span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Tech Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tecnologías Principales</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech) => (
                <div key={tech} className="bg-slate-800 p-4 rounded-lg text-center hover:bg-slate-700 transition transform hover:scale-105">
                  <p className="text-blue-400 font-semibold">{tech}</p>
                </div>
              ))}
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
        </div>
      </section>
    </div>
  );
}
