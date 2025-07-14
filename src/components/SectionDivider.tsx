import React from 'react'; // Es buena práctica importar React

export default function SectionDivider() {
  const colors = {
    black: "#0D0D0D",
    purpleVibrant: "#A259FF",
    purpleMedium: "#C084FC",
    yellowSoft: "#FFE599",
    blueAccent: "#3B82F6",
  };

  // Puedes ajustar la altura del SVG y la complejidad de las ondas aquí
  const svgHeight = 150; // Mayor altura para más detalle en las ondas

  return (
    <div className="w-full overflow-hidden leading-none" style={{ height: `${svgHeight}px` }}>
      <svg
        viewBox={`0 0 1440 ${svgHeight}`} // Ajusta el viewBox a la altura deseada
        className="w-full"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Degradado para la onda inferior - de tu morado vibrante a negro */}
          <linearGradient id="gradientBottomWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.purpleVibrant} />
            <stop offset="100%" stopColor={colors.black} />
          </linearGradient>

          {/* Degradado para la onda del medio - de tu azul acento a morado medio */}
          <linearGradient id="gradientMiddleWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.blueAccent} />
            <stop offset="100%" stopColor={colors.purpleMedium} />
          </linearGradient>

          {/* Degradado para la onda superior - de tu amarillo suave a morado vibrante */}
          <linearGradient id="gradientTopWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.yellowSoft} />
            <stop offset="100%" stopColor={colors.purpleVibrant} />
          </linearGradient>
        </defs>

        {/* Capa de onda inferior (más profunda) - Usando el degradado de morado a negro */}
        <path
          fill="url(#gradientBottomWave)"
          opacity="0.8" // Un poco transparente
          d={`M0,${svgHeight * 0.7} C240,${svgHeight * 0.9}, 480,${svgHeight * 0.5}, 720,${svgHeight * 0.7} C960,${svgHeight * 0.9}, 1200,${svgHeight * 0.5}, 1440,${svgHeight * 0.7} L1440,${svgHeight} L0,${svgHeight} Z`}
        />

        {/* Capa de onda media - Usando el degradado de azul a morado medio */}
        <path
          fill="url(#gradientMiddleWave)"
          opacity="0.7" // Ligeramente más transparente
          d={`M0,${svgHeight * 0.6} C240,${svgHeight * 0.8}, 480,${svgHeight * 0.4}, 720,${svgHeight * 0.6} C960,${svgHeight * 0.8}, 1200,${svgHeight * 0.4}, 1440,${svgHeight * 0.6} L1440,${svgHeight} L0,${svgHeight} Z`}
        />

        {/* Capa de onda superior (más cercana) - Usando el degradado de amarillo a morado vibrante */}
        <path
          fill="url(#gradientTopWave)"
          opacity="0.6" // Más transparente, dejando ver las de abajo
          d={`M0,${svgHeight * 0.5} C240,${svgHeight * 0.7}, 480,${svgHeight * 0.3}, 720,${svgHeight * 0.5} C960,${svgHeight * 0.7}, 1200,${svgHeight * 0.3}, 1440,${svgHeight * 0.5} L1440,${svgHeight} L0,${svgHeight} Z`}
        />
      </svg>
    </div>
  );
}