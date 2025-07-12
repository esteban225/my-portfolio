import { useState } from 'react'; // Necesitarás este hook para el estado del menú móvil
import { FiMenu, FiX } from 'react-icons/fi'; // Iconos para el menú móvil (asegúrate de instalarlos: npm install react-icons)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú móvil está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 shadow-xl z-50 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo o Nombre del Portafolio */}
        <a href="#hero" className="text-2xl font-bold tracking-wider hover:text-blue-400 transition-colors duration-300">
          Esteban.dev
        </a>

        {/* Menú de Navegación para pantallas grandes */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><a href="#hero" className="hover:text-blue-400 transition-colors duration-300">Inicio</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contacto</a></li>
        </ul>

        {/* Botón de Hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 pb-4`}>
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
          <li><a href="#hero" onClick={toggleMenu} className="block py-2 hover:text-blue-400 transition-colors duration-300">Inicio</a></li>
          <li><a href="#about" onClick={toggleMenu} className="block py-2 hover:text-blue-400 transition-colors duration-300">Sobre mí</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="block py-2 hover:text-blue-400 transition-colors duration-300">Proyectos</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="block py-2 hover:text-blue-400 transition-colors duration-300">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}