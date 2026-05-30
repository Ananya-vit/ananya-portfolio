import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certification />
      <Contact />
    </div>
  );
}

export default App;