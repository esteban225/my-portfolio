export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center gap-8 py-4 text-lg font-semibold">
        <li><a href="#hero" className="hover:text-blue-500">Inicio</a></li>
        <li><a href="#about" className="hover:text-blue-500">Sobre mí</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contacto</a></li>
      </ul>
    </nav>
  );
}