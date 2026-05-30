import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#111111] text-white"
          : "bg-[#FAF7F2] text-[#1D1D1D]"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />

      <Project darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Skills darkMode={darkMode} />

      <Certification darkMode={darkMode} />

      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;