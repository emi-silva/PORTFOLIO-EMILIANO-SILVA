import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)' }}>
      {/* Imagen del proyecto */}
      {imageUrl ? (
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="bg-linear-to-r from-blue-500 to-cyan-500 h-48 flex items-center justify-center">
          <span className="text-white text-4xl">📦</span>
        </div>
      )}

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4">{description}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-2 rounded transition"
            >
              GitHub
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition"
            >
              Ver Proyecto
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
