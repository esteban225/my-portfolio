import Atropos from "atropos/react";
import "atropos/atropos.css";

const developerIllustration = "/yo-removebg-preview.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background animado */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div
          className="absolute inset-0 bg-repeat bg-center animate-background-pan"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/stardust.png")',
            backgroundSize: "260px 260px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900 opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto py-12 md:py-20 gap-8 md:gap-16">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl sm:text-2xl font-light mb-4 animate-fade-in-up delay-200">
            ¡Hola!👋
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-400">
            SOY{" "}
            <span className="text-purple-400 block sm:inline">
              ESTEBAN DAVID RICARDO FUENTES
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-300 mb-8 animate-fade-in-up delay-600">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=93C5FD&center=true&vCenter=true&width=500&lines=Full+Stack+Developer"
              alt="Typing animation: Full Stack Developer"
              className="inline-block border-b-2 border-blue-500 pb-1"
            />
          </h2>

          {/* Botón para ver o descargar el CV */}
          <a
            href="/cv-esteban.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 animate-fade-in-up delay-800"
          >
            Ver o Descargar CV
          </a>
        </div>

        {/* Imagen con Atropos */}
        <div className="flex-1 flex justify-center md:justify-end items-center mt-10 md:mt-0">
          <Atropos
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            activeOffset={40}
            shadowScale={1.1}
            highlight
          >
            <img
              src={developerIllustration}
              alt="Esteban David Ricardo Fuentes"
              className="w-full h-full object-contain animate-fade-in-up delay-1000"
              data-atropos-offset="5"
            />
          </Atropos>
        </div>
      </div>

      {/* Animaciones personalizadas */}
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

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
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
      `}</style>
    </section>
  );
}
