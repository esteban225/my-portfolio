export default function Footer() {
  const colors = {
    black: "#0D0D0D", // Tu color negro de la paleta
    // Aquí podrías añadir los otros colores si los necesitaras en el footer
    // purpleVibrant: "#A259FF",
    // purpleMedium: "#C084FC",
    // yellowSoft: "#FFE599",
    // blueAccent: "#3B82F6",
  };

  return (
    <footer
      className="text-white text-center py-6"
      style={{
        backgroundColor: colors.black, // Establecemos el fondo con tu color negro
      }}
    >
      <p>&copy; {new Date().getFullYear()} Esteban. Todos los derechos reservados.</p>
    </footer>
  );
}