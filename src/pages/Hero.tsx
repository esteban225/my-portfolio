import Atropos from 'atropos/react';
import 'atropos/atropos.css';

export default function Hero() {
  return (
    <section id="hero" className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Atropos className="w-[300px] h-[400px] rounded-xl shadow-lg p-5 bg-gradient-to-br from-blue-500 to-purple-600">
        <h1 className="text-3xl font-bold" data-atropos-offset="5">¡Hola, soy Esteban!</h1>
        <p className="mt-4 text-lg" data-atropos-offset="3">
          Desarrollador frontend. Bienvenido a mi portafolio.
        </p>
      </Atropos>
    </section>
  );
}