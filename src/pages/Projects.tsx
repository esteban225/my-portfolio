import Atropos from 'atropos/react';
import 'atropos/atropos.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Landing Page Interactiva',
    description:
      'Landing page moderna y responsiva diseñada para captar la atención del usuario con animaciones sutiles. Desarrollada con React y Tailwind CSS.',
    image: 'https://via.placeholder.com/600x400?text=Landing+Page+Project',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Aplicación de Gestión de Tareas',
    description:
      'Aplicación full-stack para organizar y gestionar tareas diarias. Incorpora autenticación de usuarios y una interfaz intuitiva con MERN Stack.',
    image: 'https://via.placeholder.com/600x400?text=Task+App+Project',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'Portafolio Personal',
    description:
      'Este portafolio refleja mis habilidades en desarrollo frontend y diseño UI/UX, empleando React, Tailwind CSS y animaciones interactivas con Atropos.',
    image: 'https://via.placeholder.com/600x400?text=Portfolio+Project',
    technologies: ['React', 'Tailwind CSS', 'Atropos.js', 'Vite'],
    liveDemo: '#',
    github: '#',
  },
  {
    title: 'E-commerce Sencillo',
    description:
      'Prototipo funcional de tienda online con carrito de compras y pagos simulados con Stripe. Enfocado en una experiencia de usuario fluida.',
    image: 'https://via.placeholder.com/600x400?text=E-commerce+Project',
    technologies: ['Next.js', 'Stripe (simulado)', 'Context API'],
    liveDemo: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-blue-400">
        Mis Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Atropos
            key={index}
            className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
            rotateXMax={10}
            rotateYMax={10}
            shadow
            highlight={false}
          >
            <div className="p-6 flex flex-col h-full">
              {/* Imagen del proyecto */}
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden relative" data-atropos-offset="5">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold mb-3 text-blue-400" data-atropos-offset="2">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-300 text-base mb-4 flex-grow" data-atropos-offset="0">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4" data-atropos-offset="-1">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-600/20 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex justify-start gap-4 mt-auto" data-atropos-offset="-2">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300 text-sm font-semibold shadow-lg"
                  >
                    <FaExternalLinkAlt /> Ver Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-gray-200 px-5 py-2 rounded-full hover:bg-gray-600 transition duration-300 text-sm font-semibold shadow-lg"
                  >
                    <FaGithub /> Código
                  </a>
                )}
              </div>
            </div>
          </Atropos>
        ))}
      </div>
    </section>
  );
}
