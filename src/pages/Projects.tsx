import Atropos from 'atropos/react';
import 'atropos/atropos.css';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
  { title: 'Proyecto 3', description: 'Descripción del proyecto 3' },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 text-black p-8">
      <h2 className="text-4xl font-bold text-center mb-10">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Atropos key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </Atropos>
        ))}
      </div>
    </section>
  );
}
