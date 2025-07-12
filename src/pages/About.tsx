export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Fondo con formas sutiles para un toque moderno */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="80" r="15" fill="url(#blueGradient)" />
          <circle cx="80" cy="20" r="10" fill="url(#purpleGradient)" />
          <rect x="50" y="60" width="20" height="20" rx="5" ry="5" fill="url(#blueGradient)" />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
          <span className="block text-blue-400">¿Quién es Esteban?</span>
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          Soy un <strong>Desarrollador Full Stack</strong> con sólida formación en el SENA, apasionado por construir soluciones web modernas, robustas y escalables. Me enfoco en el desarrollo de software de calidad aplicando buenas prácticas, arquitectura limpia y tecnologías actualizadas.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          Trabajo tanto en el frontend como en el backend, combinando herramientas como <strong>React, Tailwind CSS, JavaScript</strong> y <strong>Laravel, Spring Boot, MySQL</strong> para crear experiencias completas, seguras y eficientes. También he integrado autenticación con JWT y servicios externos como Stripe y Cloudinary.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          Soy proactivo, autodidacta y siempre estoy en búsqueda de nuevos retos y oportunidades para seguir creciendo como desarrollador. Si necesitas alguien comprometido, con ojo para los detalles y pasión por la tecnología, ¡estoy listo para colaborar!
        </p>

        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-6 text-purple-300">Mis Habilidades Clave</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-800 text-blue-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">React.js</span>
            <span className="bg-gray-800 text-purple-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">Tailwind CSS</span>
            <span className="bg-gray-800 text-yellow-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">JavaScript (ES6+)</span>
            <span className="bg-gray-800 text-green-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">Laravel</span>
            <span className="bg-gray-800 text-pink-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">Spring Boot</span>
            <span className="bg-gray-800 text-orange-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">MySQL</span>
            <span className="bg-gray-800 text-red-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">JWT & Auth</span>
            <span className="bg-gray-800 text-teal-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">HTML5 & CSS3</span>
            <span className="bg-gray-800 text-cyan-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">Git & GitHub</span>
            <span className="bg-gray-800 text-lime-300 px-5 py-2 rounded-full text-md font-semibold shadow-md">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}
