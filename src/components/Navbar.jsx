import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
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
        fixed top-5 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-7xl
        rounded-full
        backdrop-blur-xl
        shadow-lg
        border
        transition-all duration-300
        ${
          darkMode
            ? "bg-[#121212]/80 border-[#2A2A2A]"
            : "bg-white/75 border-[#E8E1D8]"
        }
      `}
    >
      <div className="flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <h1
          className={`
            text-2xl
            md:text-3xl
            font-bold
            tracking-tight
            ${darkMode ? "text-white" : "text-[#1D1D1D]"}
          `}
        >
          Ananya.
        </h1>

        {/* Links */}

        <ul
          className={`
            hidden md:flex
            items-center
            gap-10
            text-[16px]
            font-medium
            ${
              darkMode
                ? "text-gray-300"
                : "text-[#555555]"
            }
          `}
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

        <div className="flex items-center gap-3">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
              w-11 h-11
              rounded-full
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
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <a
            href="https://drive.google.com/file/d/1S1nb8qUT5xn2BNC7yPn78Hp-xoNJgemK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              rounded-full
              bg-gradient-to-r
              from-[#B8A89F]
              to-[#C5B4D4]
              text-white
              font-semibold
              text-sm
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