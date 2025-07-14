import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import CodeIcon from "@mui/icons-material/Code";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- Definición de colores de la paleta para facilitar su uso ---
  const colors = {
    black: '#0D0D0D',
    purpleVibrant: '#9929EA',
    purpleMedium: '#CC66DA',
    yellowSoft: '#FAEB92',
  };

  return (
    <nav 
      // Usamos style para el background-image con el gradiente personalizado
      // Y clases de Tailwind para sombra y z-index
      className="fixed top-0 w-full shadow-xl z-50 text-white"
      style={{
        background: `linear-gradient(to right, ${colors.black}, ${colors.purpleVibrant})`
      }}
    >
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo o Nombre del Portafolio */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wider transition-colors duration-300"
          style={{ color: colors.yellowSoft, textShadow: `0 0 8px ${colors.purpleVibrant}` }} // Color amarillo para el texto del logo, con sombra para Pop!
        >
          Esteban.dev
        </a>

        {/* Menú de Navegación para pantallas grandes */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <li>
            <a
              href="#hero"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#9929EA]"
              aria-label="Ir a la sección de Inicio"
            >
              <HomeIcon
                sx={{
                  fontSize: 32,
                  color: colors.black, // Color morado medio por defecto
                  transition:
                    "color 0.3s ease-in-out, transform 0.3s ease-in-out",
                  ".group:hover &": {
                    color: colors.yellowSoft, // Amarillo suave al hacer hover
                    transform: "scale(1.1)",
                  },
                }}
              />
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
              style={{ ['--tw-ring-color' as string]: colors.purpleVibrant }}
              aria-label="Ir a la sección Sobre Mí"
            >
              <InfoOutlineIcon
                sx={{
                  fontSize: 32,
                  color: colors.black,
                  transition:
                    "color 0.3s ease-in-out, transform 0.3s ease-in-out",
                  ".group:hover &": {
                    color: colors.yellowSoft,
                    transform: "scale(1.1)",
                  },
                }}
              />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
              style={{['--tw-ring-color' as string]: colors.purpleVibrant }}
              aria-label="Ir a la sección de Proyectos"
            >
              <CodeIcon
                sx={{
                  fontSize: 32,
                  color: colors.black,
                  transition:
                    "color 0.3s ease-in-out, transform 0.3s ease-in-out",
                  ".group:hover &": {
                    color: colors.yellowSoft,
                    transform: "scale(1.1)",
                  },
                }}
              />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="group flex items-center p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
              style={{ ['--tw-ring-color' as string]: colors.purpleVibrant }}
              aria-label="Ir a la sección de Contacto"
            >
              <ContactPhoneIcon
                sx={{
                  fontSize: 32,
                  color: colors.black,
                  transition:
                    "color 0.3s ease-in-out, transform 0.3s ease-in-out",
                  ".group:hover &": {
                    color: colors.yellowSoft,
                    transform: "scale(1.1)",
                  },
                }}
              />
            </a>
          </li>
        </ul>

        {/* Botón de Hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            style={{ color: colors.yellowSoft }} // Color amarillo para el icono de hamburguesa
          >
            {isOpen ? (
              <FiX className="h-7 w-7" />
            ) : (
              <FiMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4`}
        style={{ background: colors.black }} // Fondo negro sólido para el menú móvil
      >
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
          <li>
            <a
              href="#hero"
              onClick={toggleMenu}
              className="block py-2 transition-colors duration-300 hover:text-[#9929EA]"
              style={{ color: colors.yellowSoft }} // Texto amarillo
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={toggleMenu}
              className="block py-2 transition-colors duration-300 hover:text-[#9929EA]"
              style={{ color: colors.yellowSoft }}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="block py-2 transition-colors duration-300 hover:text-[#9929EA]"
              style={{ color: colors.yellowSoft }}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="block py-2 transition-colors duration-300 hover:text-[#9929EA]"
              style={{ color: colors.yellowSoft }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}