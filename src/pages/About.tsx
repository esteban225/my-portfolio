export default function About() {
  // --- Definición de colores de la paleta ---
  const colors = {
    black: '#000000',
    purpleVibrant: '#9929EA',
    purpleMedium: '#CC66DA',
    yellowSoft: '#FAEB92',
  };

  return (
    <section
      id="about"
      className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden"
      // Fondo con tu degradado personalizado
      style={{
        background: `linear-gradient(to bottom right, ${colors.purpleVibrant}, ${colors.black})`,
      }}
    >
      {/* Fondo con formas sutiles para un toque moderno */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Círculo con gradiente de amarillo a morado vibrante */}
          <circle cx="20" cy="80" r="15" fill="url(#yellowPurpleGradient)" />
          {/* Círculo con gradiente de morado vibrante a amarillo */}
          <circle cx="80" cy="20" r="10" fill="url(#purpleYellowGradient)" />
          {/* Rectángulo con gradiente de amarillo a morado vibrante */}
          <rect x="50" y="60" width="20" height="20" rx="5" ry="5" fill="url(#yellowPurpleGradient)" />
          <defs>
            {/* Gradiente principal: amarillo suave a morado vibrante */}
            <linearGradient id="yellowPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.yellowSoft} />
              <stop offset="100%" stopColor={colors.purpleVibrant} />
            </linearGradient>
            {/* Gradiente inverso: morado vibrante a amarillo suave */}
            <linearGradient id="purpleYellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.purpleVibrant} />
              <stop offset="100%" stopColor={colors.yellowSoft} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
          <span
            className="block"
            style={{ color: colors.yellowSoft }} // Título con el amarillo suave para contraste
          >
            ¿Quién es Esteban?
          </span>
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          Soy un <strong>Desarrollador Full Stack</strong> con sólida formación en el SENA, apasionado por construir soluciones web modernas, robustas y escalables. Me enfoco en el desarrollo de software de calidad aplicando buenas prácticas, arquitectura limpia y tecnologías actualizadas.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          Trabajo tanto en el frontend como en el backend, combinando herramientas como{" "}
          <strong style={{ color: colors.yellowSoft }}>React</strong>,{" "}
          <strong style={{ color: colors.yellowSoft }}>Tailwind CSS</strong>,{" "}
          <strong style={{ color: colors.yellowSoft }}>JavaScript</strong> y{" "}
          <strong style={{ color: colors.yellowSoft }}>Laravel</strong>,{" "}
          <strong style={{ color: colors.yellowSoft }}>Spring Boot</strong>,{" "}
          <strong style={{ color: colors.yellowSoft }}>MySQL</strong> para crear experiencias completas, seguras y eficientes. También he integrado autenticación con JWT y servicios externos como Stripe y Cloudinary.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          Soy proactivo, autodidacta y siempre estoy en búsqueda de nuevos retos y oportunidades para seguir creciendo como desarrollador. Si necesitas alguien comprometido, con ojo para los detalles y pasión por la tecnología, ¡estoy listo para colaborar!
        </p>

        <div className="mt-12">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: colors.purpleMedium }} // Título de habilidades con el morado medio
          >
            Mis Habilidades Clave
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Tags de habilidades con fondo negro y texto amarillo suave */}
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">React.js</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">Tailwind CSS</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">JavaScript (ES6+)</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">Laravel</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">Spring Boot</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">MySQL</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">JWT & Auth</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">HTML5 & CSS3</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">Git & GitHub</span>
            <span className="bg-custom-black text-custom-yellow-soft px-5 py-2 rounded-full text-md font-semibold shadow-md">Docker</span>
          </div>
        </div>
      </div>
    </section>
  );
}