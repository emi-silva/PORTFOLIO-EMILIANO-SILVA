'use client';

import { useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiJest,
  SiMocha,
  SiPostman,
  SiInsomnia,
  SiEslint,
  SiPrettier,
} from 'react-icons/si';
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
  const iconFor = (label: string): IconType | null => {
    switch (label) {
      case 'HTML5':
        return SiHtml5;
      case 'CSS3':
        return SiCss3;
      case 'JavaScript (ES6+)':
        return SiJavascript;
      case 'React':
        return SiReact;
      case 'Angular':
        return SiAngular;
      case 'Vue':
        return SiVuedotjs;
      case 'Tailwind CSS':
        return SiTailwindcss;
      case 'Sass':
        return SiSass;
      case 'Node.js':
        return SiNodedotjs;
      case 'Express.js':
        return SiExpress;
      case 'Python':
        return SiPython;
      case 'Django':
        return SiDjango;
      case 'Flask':
        return SiFlask;
      case 'Spring Boot':
        return SiSpring;
      case 'PostgreSQL':
        return SiPostgresql;
      case 'MySQL':
        return SiMysql;
      case 'MongoDB':
        return SiMongodb;
      case 'Jest':
        return SiJest;
      case 'Mocha':
        return SiMocha;
      case 'Postman':
        return SiPostman;
      case 'Insomnia':
        return SiInsomnia;
      case 'ESLint':
        return SiEslint;
      case 'Prettier':
        return SiPrettier;
      default:
        return null;
    }
  };

  const Badge = ({ label }: { label: string }) => {
    const Icon = iconFor(label);
    return (
      <span className="px-4 py-2 rounded-full border border-slate-700/60 bg-slate-900/60 text-slate-200 text-sm hover:border-slate-600 hover:bg-slate-900 transition inline-flex items-center gap-2">
        {Icon ? <Icon className="h-5 w-5 text-slate-400" /> : null}
        <span>{label}</span>
      </span>
    );
  };

  type CardProps = {
    title: string;
    gradient: string;
    badges: string[];
  };

  const Card = ({ title, gradient, badges }: CardProps) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="bg-slate-800/80 hover:bg-slate-800 transition rounded-xl p-6 border border-slate-700/50">
        <div className="flex items-center justify-between">
          <h3 className={`text-2xl font-semibold bg-clip-text text-transparent ${gradient}`}>{title}</h3>
          <button
            className="md:hidden text-slate-300 hover:text-white transition"
            aria-label={`Alternar ${title}`}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
            >
              <path fillRule="evenodd" d="M12 14.5a1 1 0 0 1-.707-.293l-6-6a1 1 0 1 1 1.414-1.414L12 12.086l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6A1 1 0 0 1 12 14.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`mt-4 ${open ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const frontendBadges = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React',
    'Angular',
    'Vue',
    'Tailwind CSS',
    'Sass',
  ];

  const backendBadges = [
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'Flask',
    'Spring Boot',
  ];

  const dbBadges = ['PostgreSQL', 'MySQL', 'MongoDB'];
  const testBadges = ['Jest', 'Mocha', 'Postman', 'Insomnia', 'ESLint', 'Prettier'];

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
                  <div className="group relative rounded-xl p-px bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="rounded-xl bg-slate-900/90 p-3 flex flex-col items-center justify-center h-full shadow-lg transition-colors duration-300 group-hover:bg-slate-900/70">
                      <span className="text-2xl font-bold text-blue-400">35+</span>
                      <span className="text-slate-400 text-xs">Proyectos</span>
                    </div>
                  </div>

                  {/* Experiencia */}
                  <div className="group relative rounded-xl p-px bg-linear-to-r from-cyan-500 to-emerald-500 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="rounded-xl bg-slate-900/90 p-3 flex flex-col items-center justify-center h-full shadow-lg transition-colors duration-300 group-hover:bg-slate-900/70">
                      <span className="text-2xl font-bold text-cyan-300">1.5+</span>
                      <span className="text-slate-400 text-xs">Años de experiencia</span>
                    </div>
                  </div>

                  {/* Satisfacción */}
                  <div className="group relative rounded-xl p-px bg-linear-to-r from-emerald-500 to-teal-500 transition-transform duration-300 hover:scale-[1.02]">
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
              <Card
                title="🌐 Frontend"
                gradient="bg-linear-to-r from-cyan-400 to-blue-500"
                badges={frontendBadges}
              />

              <Card
                title="⚙️ Backend"
                gradient="bg-linear-to-r from-teal-400 to-emerald-400"
                badges={backendBadges}
              />

              <Card
                title="🗄️ Bases de datos"
                gradient="bg-linear-to-r from-purple-400 to-pink-400"
                badges={dbBadges}
              />

              <Card
                title="🧪 Testing y calidad"
                gradient="bg-linear-to-r from-orange-300 to-pink-400"
                badges={testBadges}
              />
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
                  <a href="mailto:emilianosilva25@gmail.com" className="text-slate-300 hover:text-blue-400 transition">
                    emilianosilva25@gmail.com
                  </a>
                </div>

                {/* Teléfono */}
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Teléfono</h3>
                  <a href="tel:+543413916033" className="text-slate-300 hover:text-cyan-400 transition">
                    +54 341 3 916033
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
                  <p className="text-slate-300">Rosario, Santa Fe Argentina 🇦🇷</p>
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
                <p className="text-2xl font-bold text-blue-400">Inmediata</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 mb-2">Horario Laboral</p>
                <p className="text-2xl font-bold text-cyan-400">Full Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
