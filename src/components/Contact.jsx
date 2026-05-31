import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className="relative py-40 px-8 overflow-hidden"
    >
      {/* Ambient Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#A7B5C5]/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#C5B4D4]/10 blur-[180px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            ${
              darkMode
                ? "text-white"
                : "text-[#111]"
            }
          `}
        >
          Let's Build
          <br />
          Something Meaningful.
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
          }}
          className={`
            mt-8
            text-xl
            leading-relaxed
            ${
              darkMode
                ? "text-gray-400"
                : "text-[#666]"
            }
          `}
        >
          Open to internships, collaborations,
          and opportunities in AI, Cyber Security,
          Full Stack Development and emerging technologies.
        </motion.p>

        {/* Social Cards */}

        <div className="flex flex-wrap justify-center gap-5 mt-16">

          <a
            href="mailto:yourmail@gmail.com"
            className={`
              px-8 py-4
              rounded-full
              flex items-center gap-3
              backdrop-blur-xl
              border
              transition-all
              hover:scale-105
              ${
                darkMode
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white/70 border-[#E7DED5] text-[#111]"
              }
            `}
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className={`
              px-8 py-4
              rounded-full
              flex items-center gap-3
              backdrop-blur-xl
              border
              transition-all
              hover:scale-105
              ${
                darkMode
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white/70 border-[#E7DED5] text-[#111]"
              }
            `}
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={`
              px-8 py-4
              rounded-full
              flex items-center gap-3
              backdrop-blur-xl
              border
              transition-all
              hover:scale-105
              ${
                darkMode
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white/70 border-[#E7DED5] text-[#111]"
              }
            `}
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://instagram.com/yeah_ananyyaa"
            target="_blank"
            rel="noreferrer"
            className={`
              px-8 py-4
              rounded-full
              flex items-center gap-3
              backdrop-blur-xl
              border
              transition-all
              hover:scale-105
              ${
                darkMode
                  ? "bg-white/5 border-white/10 text-white"
                  : "bg-white/70 border-[#E7DED5] text-[#111]"
              }
            `}
          >
            <FaInstagram />
            Instagram
          </a>

        </div>

        {/* Footer */}

        <p
          className={`
            mt-20
            text-sm
            ${
              darkMode
                ? "text-gray-500"
                : "text-gray-400"
            }
          `}
        >
          © 2026 Ananya. Crafted with React & Tailwind CSS.
        </p>

      </div>
    </section>
  );
}

export default Contact;