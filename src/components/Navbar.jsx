import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav
    initial={{
  opacity: 0,
  y: -40,
  filter: "blur(20px)",
}}

animate={{
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
}}

transition={{
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
}}
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-[1400px]
        backdrop-blur-xl
        rounded-full
        px-10 py-5
        shadow-lg
        transition-all duration-300
        ${
          darkMode
            ? "bg-[#121212]/80 border border-[#2A2A2A]"
            : "bg-white/75 border border-[#E8E1D8]"
        }
      `}
    >
      <div className="flex items-center justify-between">

        {/* Logo */}

        <h1
          className={`text-3xl font-bold tracking-tight ${
            darkMode ? "text-white" : "text-[#1D1D1D]"
          }`}
        >
          Ananya.
        </h1>

        {/* Navigation */}

        <ul
          className={`hidden md:flex items-center gap-12 text-[17px] font-medium ${
            darkMode ? "text-gray-300" : "text-[#555555]"
          }`}
        >
          <li>
            <a href="#overview" className="hover:text-[#B8A89F] transition">
              Overview
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#B8A89F] transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#B8A89F] transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-[#B8A89F] transition">
              Skills
            </a>
          </li>

          <li>
            <a
              href="#certifications"
              className="hover:text-[#B8A89F] transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#B8A89F] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          {/* Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
              w-12 h-12 rounded-full
              flex items-center justify-center
              transition-all duration-300
              hover:scale-105
              ${
                darkMode
                  ? "bg-[#1E1E1E] text-white border border-[#333]"
                  : "bg-white text-[#1D1D1D] border border-[#E8E1D8]"
              }
            `}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          {/* Resume Button */}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-7 py-3
              rounded-full
              bg-gradient-to-r
              from-[#B8A89F]
              to-[#C5B4D4]
              text-white
              font-semibold
              shadow-md
              hover:scale-105
              transition-all duration-300
            "
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;