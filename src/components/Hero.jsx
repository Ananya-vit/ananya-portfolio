import { motion } from "framer-motion";

function Hero({ darkMode }) {
  const skills = [
    "Artificial Intelligence",
    "Cyber Security",
    "Machine Learning",
    "DSA",
    "Full Stack Development",
  ];

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-[#C5B4D4]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#A7B5C5]/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
          className="flex justify-center mb-10"
        >
          <div
            className={`inline-flex items-center px-8 py-4 rounded-full border backdrop-blur-md shadow-sm ${
              darkMode
                ? "bg-[#111111]/80 border-[#2A2A2A]"
                : "bg-white/70 border-[#E7DED5]"
            }`}
          >
            <span
              className={`text-base md:text-lg font-medium ${
                darkMode ? "text-gray-300" : "text-[#555555]"
              }`}
            >
              Software Engineer · Cyber Security Enthusiast · GenAI Developer
            </span>
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.3,
            delay: 0.2,
          }}
          className={`
            font-bold
            tracking-tight
            leading-[0.95]
            max-w-5xl
            mx-auto
            text-5xl
            md:text-7xl
            lg:text-[88px]
            ${
              darkMode
                ? "text-white"
                : "text-[#1D1D1D]"
            }
          `}
        >
          Turning ideas into{" "}
          <span className="bg-gradient-to-r from-[#B8A89F] via-[#A7B5C5] to-[#C5B4D4] bg-clip-text text-transparent">
            vision
          </span>

          <br />

          and vision into reality.
        </motion.h1>

        {/* Subtitle */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className={`mt-10 text-xl md:text-3xl font-medium ${
            darkMode ? "text-gray-300" : "text-[#4B5563]"
          }`}
        >
          B.Tech Computer Science Undergraduate at
          <br />
          Vellore Institute of Technology, Bhopal
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          className={`mt-8 max-w-3xl mx-auto text-base md:text-xl leading-relaxed ${
            darkMode ? "text-gray-400" : "text-[#6B7280]"
          }`}
        >
          Passionate about Artificial Intelligence,
          Cyber Security, Machine Learning,
          Generative AI, Data Structures &
          Algorithms, and Full Stack Development.

          <br />
          <br />

          Building impactful digital experiences,
          solving real-world problems, and
          continuously learning emerging technologies.
        </motion.p>

        {/* Skills */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className={`
                px-6 py-3
                rounded-full
                border
                text-sm md:text-base
                font-medium
                transition-all
                ${
                  darkMode
                    ? "bg-[#151515] border-[#2A2A2A] text-gray-300"
                    : "bg-white border-[#E7DED5] text-[#444444]"
                }
              `}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          className="flex flex-wrap justify-center gap-5 mt-14"
        >
          <a
            href="#projects"
            className={`
              px-10 py-4
              rounded-full
              font-semibold
              transition-all
              hover:scale-105
              ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-[#1D1D1D] text-white"
              }
            `}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className={`
              px-10 py-4
              rounded-full
              border
              font-semibold
              transition-all
              hover:scale-105
              ${
                darkMode
                  ? "border-[#333333] text-white"
                  : "border-[#E7DED5] text-[#1D1D1D]"
              }
            `}
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;