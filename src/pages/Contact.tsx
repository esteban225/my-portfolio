import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const colors = {
    black: '#000000',
    purpleVibrant: '#9929EA',
    purpleMedium: '#CC66DA',
    yellowSoft: '#FAEB92',
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/moqgprrq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Hubo un problema. Intenta de nuevo.');
      }
    } catch (err) {
      console.error(err);
      alert('Error de red. Intenta más tarde.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${colors.black}, ${colors.purpleVibrant})`,
        color: colors.yellowSoft,
      }}
    >
      {/* Fondo decorativo SVG */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="90" cy="10" r="15" fill={colors.purpleMedium} />
          <rect x="10" y="80" width="20" height="20" rx="5" ry="5" fill={colors.yellowSoft} />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg" style={{ color: colors.yellowSoft }}>
          Hablemos de tu Próximo Proyecto
        </h2>
        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white">
          ¿Tienes una idea o proyecto que necesita un <strong>toque full stack</strong>? ¡Estoy listo para escucharte!
        </p>

        {sent ? (
          <p className="text-green-400 text-lg font-semibold">¡Gracias por tu mensaje! Te responderé pronto.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto space-y-6 bg-opacity-20 p-8 rounded-xl shadow-xl border border-purple-500 backdrop-blur"
            style={{ backgroundColor: colors.black }}
          >
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre Completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-400 transition duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-400 transition duration-200"
            />
            <textarea
              name="message"
              placeholder="Tu Mensaje o Consulta"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full p-3 bg-transparent border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white placeholder-gray-400 resize-y transition duration-200"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#CC66DA] to-[#9929EA] text-white font-bold py-3 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
            >
              Enviar Mensaje
            </button>
          </form>
        )}

        {/* Redes sociales con animación */}
        <div className="mt-16 text-center">
          <p className="text-xl mb-4 text-white">También puedes encontrarme en:</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/esteban-ricardo-2411b8303/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                alt="LinkedIn"
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://github.com/esteban225"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                alt="GitHub"
                className="h-10 w-10"
              />
            </a>
            <a
              href="mailto:esteban.ricardo.dev@gmail.com"
              className="transition transform hover:scale-110"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
                alt="Email"
                className="h-10 w-10"
              />
            </a>
          </div>
          <p className="mt-8 text-md text-gray-300">
            Prefiero comunicarme por correo electrónico o LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}
