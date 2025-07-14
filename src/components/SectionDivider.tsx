export default function SectionDivider() {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 100" className="w-full h-24">
        <path
          fill="#32005c" // Puedes ajustar esto si tu sección siguiente tiene otro fondo
          d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,37.3C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32V100H1392C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100H0Z"
        />
      </svg>
    </div>
  );
}
