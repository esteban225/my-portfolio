import "atropos/atropos.css";

const developerIllustration = "/yo-removebg-preview.png";

export default function Hero() {
  const colors = {
    black: "#0D0D0D",
    purpleVibrant: "#A259FF",
    purpleMedium: "#C084FC",
    yellowSoft: "#FFE599",
    blueAccent: "#3B82F6",
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-custom-black text-white flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div
          className="absolute inset-0 bg-repeat bg-center animate-background-pan"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/stardust.png")',
            backgroundSize: "260px 260px",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `linear-gradient(135deg, ${colors.black}, ${colors.purpleVibrant}, ${colors.blueAccent})`,
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto py-12 md:py-20 gap-8 md:gap-16">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-xl sm:text-2xl font-light mb-4 animate-fade-in-up delay-200"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            ¡Hola! 👋
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-400"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            SOY{" "}
            <span
              className="block sm:inline"
              style={{
                color: colors.purpleVibrant,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              ESTEBAN DAVID RICARDO FUENTES
            </span>
          </h1>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 animate-fade-in-up delay-600"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            <img
              src={`https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=${colors.yellowSoft.substring(1)}&center=true&vCenter=true&width=500&lines=Full+Stack+Developer`}
              alt="Typing animation: Full Stack Developer"
              className="inline-block pb-1"
              style={{
                borderBottom: `2px solid ${colors.purpleVibrant}`,
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
              }}
            />
          </h2>

          <a
            href="/cv-esteban.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 animate-fade-in-up delay-800 cv-button-hover-effect"
            style={{
              backgroundColor: colors.purpleVibrant,
              color: colors.black,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
            }}
          >
            Ver o Descargar CV
          </a>
        </div>

        {/* Imagen con animación personalizada */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-10 md:mt-0">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float-fade">
            <img
              src={developerIllustration}
              alt="Esteban David Ricardo Fuentes"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }

        .animate-float-fade {
          animation: fade-in-up 1s ease-out forwards, float 5s ease-in-out infinite;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }

        @keyframes background-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .animate-background-pan {
          animation: background-pan 60s linear infinite;
        }

        .cv-button-hover-effect:hover {
          background-color: ${colors.purpleMedium};
          transform: scale(1.05);
          color: ${colors.black};
        }
      `}</style>
    </section>
  );
}
