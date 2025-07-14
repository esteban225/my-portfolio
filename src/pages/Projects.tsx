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
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-black via-[#18001a] to-[#32005c] text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-cyan-400 drop-shadow-lg">
        Mis Proyectos Destacados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Atropos
            key={index}
            className="bg-[#1e1e2f] rounded-2xl shadow-2xl hover:shadow-purple-700/60 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden"
            rotateXMax={10}
            rotateYMax={10}
            shadow
            highlight
          >
            <div className="p-6 flex flex-col h-full">
              {/* Imagen del proyecto */}
              <div
                className="w-full h-48 rounded-lg mb-4 overflow-hidden relative group"
                data-atropos-offset="5"
              >
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:blur-[1px]"
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>

              {/* Título */}
              <h3
                className="text-2xl font-bold mb-3 text-cyan-300"
                data-atropos-offset="2"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
              >
                {project.title}
              </h3>

              {/* Descripción */}
              <p
                className="text-gray-300 text-base mb-4 flex-grow"
                data-atropos-offset="0"
              >
                {project.description}
              </p>

              {/* Tecnologías */}
              <div
                className="flex flex-wrap gap-2 mb-4"
                data-atropos-offset="-1"
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-br from-purple-700 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div
                className="flex justify-start gap-4 mt-auto"
                data-atropos-offset="-2"
              >
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition duration-300 text-sm font-semibold shadow-md hover:scale-105"
                  >
                    <FaExternalLinkAlt /> Ver Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-gray-200 px-5 py-2 rounded-full hover:bg-gray-700 transition duration-300 text-sm font-semibold shadow-md hover:scale-105"
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
