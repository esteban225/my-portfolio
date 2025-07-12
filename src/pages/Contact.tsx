import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Fondo visual sutil */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="10" r="15" fill="url(#blueGradientContact)" />
          <rect x="10" y="80" width="20" height="20" rx="5" ry="5" fill="url(#purpleGradientContact)" />
          <defs>
            <linearGradient id="blueGradientContact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="purpleGradientContact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-blue-400">
          Hablemos de tu Próximo Proyecto
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          ¿Tienes una idea en mente, un proyecto que necesita un toque de <strong>desarrollo full stack</strong> o simplemente quieres saludar? ¡No dudes en contactarme! Estoy emocionado por saber de ti.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto space-y-6 bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre Completo"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje o Consulta"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-y"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Enviar Mensaje
          </button>
        </form>

        {/* Redes sociales */}
        <div className="mt-16 text-center">
          <p className="text-xl mb-4">También puedes encontrarme en:</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/esteban-ricardo-2411b8303/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="h-10 w-10" />
            </a>
            <a href="https://github.com/esteban225" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="h-10 w-10" />
            </a>
            <a href="mailto:esteban.ricardo.dev.com">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png" alt="Email" className="h-10 w-10" />
            </a>
          </div>
          <p className="mt-8 text-md text-gray-400">
            Prefiero comunicarme por correo electrónico o LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}
