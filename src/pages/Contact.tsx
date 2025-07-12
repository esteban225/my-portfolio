export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white text-black p-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Contacto</h2>
      <form className="w-full max-w-md space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Correo electrónico" className="w-full p-2 border rounded" required />
        <textarea placeholder="Mensaje" className="w-full p-2 border rounded h-32" required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enviar</button>
      </form>
    </section>
  );
}