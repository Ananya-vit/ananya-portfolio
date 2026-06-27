import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AltVerse from "./pages/AltVerse";
import StudyFlow from "./pages/StudyFlow"; // Make sure your file is named StudyFlow.jsx or change this to StudyFlowAI
import Reserve from "./pages/Reserve"; 

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-700 ${
        darkMode ? "bg-[#111827] text-white" : "bg-[#FAF7F2] text-[#1D1D1D]"
      }`}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Hero darkMode={darkMode} />
              <Project darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Skills darkMode={darkMode} />
              <Certification darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </>
          }
        />
        <Route path="/studyflow" element={<StudyFlow darkMode={darkMode} />} />
        <Route path="/altverse" element={<AltVerse darkMode={darkMode} />} />
        <Route path="/reserve" element={<Reserve darkMode={darkMode} />} />
      </Routes>
    </div>
  );
}

export default App;