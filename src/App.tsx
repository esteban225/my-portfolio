import "./App.css";
import Navbar from "./components/NavbarComponent";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/FooterComponent";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
