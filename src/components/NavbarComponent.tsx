import { useState } from "react";
// Usaremos iconos de react-icons para mayor flexibilidad y estilo moderno
// Asegúrate de instalarlos si aún no lo has hecho: npm install react-icons
import { FiMenu, FiX } from "react-icons/fi"; // Mantener estos para el menú hamburguesa
import { FaHome, FaUser, FaLaptopCode, FaEnvelope } from "react-icons/fa"; // Nuevos iconos de React Icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- Definición de colores de la paleta ---
  const colors = {
    black: '#0D0D0D',
    purpleVibrant: '#A259FF', // Ajusté este morado para que sea el mismo de tus otras secciones
    purpleMedium: '#C084FC', // Ajusté este morado también
    yellowSoft: '#FFE599',   // Ajusté este amarillo también
    blueAccent: '#3B82F6',   // Añadido tu nuevo color azul
  };

  return (
    <nav
      className="fixed top-0 w-full shadow-xl z-50 text-white"
      style={{
        // ¡Usamos tu nuevo degradado coherente con Hero!
        background: `linear-gradient(to right, ${colors.black}, ${colors.purpleVibrant})`
      }}
    >
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo o Nombre del Portafolio */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wider transition-colors duration-300 transform hover:scale-105 active:scale-95" // Añadimos transformaciones al click/hover
          style={{
            color: colors.yellowSoft,
            textShadow: `0 0 10px ${colors.purpleVibrant}, 0 0 20px rgba(162, 89, 255, 0.4)` // Sombra más pronunciada para el pop
          }}
        >
          Esteban.dev
        </a>

        {/* Menú de Navegación para pantallas grandes */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <li>
            <a
              href="#hero"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ ['--tw-ring-color' as string]: colors.yellowSoft, ['--tw-ring-offset-color' as string]: colors.black }} // Anillo amarillo, offset negro
              aria-label="Ir a la sección de Inicio"
            >
              <FaHome // Nuevo icono de inicio
                className="text-3xl transition-all duration-300" // Tamaño con Tailwind, transiciones
                style={{
                  color: colors.purpleMedium, // Color morado medio por defecto
                  filter: `drop-shadow(0 0 2px ${colors.black})`, // Pequeña sombra para el icono
                }}
              />
              <span
                className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 text-sm font-semibold"
                style={{ color: colors.yellowSoft }} // Texto del hover en amarillo suave
              >Inicio</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ ['--tw-ring-color' as string]: colors.yellowSoft, ['--tw-ring-offset-color' as string]: colors.black }}
              aria-label="Ir a la sección Sobre Mí"
            >
              <FaUser // Nuevo icono de usuario
                className="text-3xl transition-all duration-300"
                style={{
                  color: colors.purpleMedium,
                  filter: `drop-shadow(0 0 2px ${colors.black})`,
                }}
              />
              <span
                className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 text-sm font-semibold"
                style={{ color: colors.yellowSoft }}
              >Sobre Mí</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ ['--tw-ring-color' as string]: colors.yellowSoft, ['--tw-ring-offset-color' as string]: colors.black }}
              aria-label="Ir a la sección de Proyectos"
            >
              <FaLaptopCode // Nuevo icono de código/proyectos
                className="text-3xl transition-all duration-300"
                style={{
                  color: colors.purpleMedium,
                  filter: `drop-shadow(0 0 2px ${colors.black})`,
                }}
              />
              <span
                className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 text-sm font-semibold"
                style={{ color: colors.yellowSoft }}
              >Proyectos</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ ['--tw-ring-color' as string]: colors.yellowSoft, ['--tw-ring-offset-color' as string]: colors.black }}
              aria-label="Ir a la sección de Contacto"
            >
              <FaEnvelope // Nuevo icono de contacto (sobre)
                className="text-3xl transition-all duration-300"
                style={{
                  color: colors.purpleMedium,
                  filter: `drop-shadow(0 0 2px ${colors.black})`,
                }}
              />
              <span
                className="ml-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 text-sm font-semibold"
                style={{ color: colors.yellowSoft }}
              >Contacto</span>
            </a>
          </li>
        </ul>

        {/* Botón de Hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 rounded-lg transition-colors duration-300 active:scale-90"
            style={{ color: colors.yellowSoft }}
          >
            {isOpen ? (
              <FiX className="h-7 w-7 transform rotate-90 transition-transform duration-300" />
            ) : (
              <FiMenu className="h-7 w-7 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
        style={{ background: colors.black }}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium py-2">
          <li>
            <a
              href="#hero"
              onClick={toggleMenu}
              className="block py-2 px-4 rounded-md transition-colors duration-300 text-center hover:bg-opacity-20 transform hover:scale-105"
              style={{ color: colors.yellowSoft, backgroundColor: colors.purpleVibrant }} // Utilizar el color del hover aquí
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="block py-2 px-4 rounded-md transition-colors duration-300 text-center hover:bg-opacity-20 transform hover:scale-105"
              style={{ color: colors.yellowSoft, ['--tw-bg-opacity' as string]: '0', backgroundColor: colors.purpleVibrant }}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="block py-2 px-4 rounded-md transition-colors duration-300 text-center hover:bg-opacity-20 transform hover:scale-105"
              style={{ color: colors.yellowSoft, ['--tw-bg-opacity' as string]: '0', backgroundColor: colors.purpleVibrant }}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block py-2 px-4 rounded-md transition-colors duration-300 text-center hover:bg-opacity-20 transform hover:scale-105"
              style={{ color: colors.yellowSoft, ['--tw-bg-opacity' as string]: '0', backgroundColor: colors.purpleVibrant }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}