import ProjectCard from "@/components/ProjectCard";

const projectsData = [
  {
    title: "BASE PARA E-COMERCE",
    description: "Plataforma base para cualquier tipo de ecommerce con pagos y panel de administración.",
    technologies: ["Node.js", "Express", "React", "MongoDB", "JWT", "Vite"],
    imageUrl: "/images/ecomerce.png",
    githubUrl: "https://github.com/emi-silva/BASE-DE-ECOMERCE",
    liveUrl: "https://base-de-ecomerce.vercel.app/",
  },
  {
    title: "Aplicación de Gestión",
    description: "Aplicación de gestión de tareas en tiempo real con colaboración de equipo.",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "Prisma", "PostgreSQL", "Docker"],
    imageUrl: "/images/task-management.png",
    githubUrl: "https://github.com/emi-silva/APLICATION-MANAGEMENT",
    liveUrl: "https://aplication-management.vercel.app/",
  },
  {
    title: "Blog Platform",
    description: "Plataforma de blogs moderna con editor de contenido enriquecido.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima en tiempo real con pronóstico detallado.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Social Media Feed",
    description: "Red social con feed dinámico, likes y comentarios en tiempo real.",
    technologies: ["Next.js", "WebSocket", "MongoDB", "Redux"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Fitness Tracker",
    description: "Aplicación para rastrear entrenamientos, calorías y progreso personal.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Mis Proyectos
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Aquí encontrarás una selección de mis proyectos más destacados. Cada uno representa mi dedicación a la calidad y la innovación.
        </p>
      </section>

      {/* Proyectos Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
