import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#FAF7F2] text-[#1D1D1D] min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero / Overview */}
      <Hero />

      {/* Projects */}
      <Project />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Certifications */}
      <Certification />

      {/* Contact */}
      <Contact />

    </div>
  );
}

export default App;