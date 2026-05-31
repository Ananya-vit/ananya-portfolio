import { motion } from "framer-motion";

function Hero({ darkMode }) {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#C5B4D4]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#A7B5C5]/20 blur-[140px] rounded-full"></div>

      {/* Content */}

      <motion.div
        className="max-w-6xl mx-auto px-8 text-center"
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
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Badge */}

        <motion.div
          className="flex justify-center mb-10 mt-8"
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
            delay: 0.2,
            duration: 1,
          }}
        >
          <div
            className={`inline-flex items-center px-8 py-4 rounded-full border backdrop-blur-md shadow-sm ${
              darkMode
                ? "bg-[#1A1A1A]/80 border-[#333]"
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
            y: 30,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.4,
            duration: 1.2,
          }}
          className={`text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight ${
            darkMode ? "text-white" : "text-[#1D1D1D]"
          }`}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 1,
          }}
          className={`mt-10 text-xl md:text-2xl font-medium tracking-wide ${
            darkMode ? "text-gray-300" : "text-[#4F4F4F]"
          }`}
        >
          Computer Science Undergraduate at VIT Bhopal
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 1,
          }}
          className={`mt-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${
            darkMode ? "text-gray-400" : "text-[#555555]"
          }`}
        >
          Passionate about Artificial Intelligence,
          Cyber Security, Machine Learning,
          Data Structures & Algorithms,
          and Full Stack Development.

          <br />
          <br />

          Building impactful digital experiences,
          solving real-world problems,
          and continuously learning emerging technologies.
        </motion.p>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {[
            "Artificial Intelligence",
            "Cyber Security",
            "Machine Learning",
            "DSA",
            "Full Stack Development",
          ].map((skill) => (
            <div
              key={skill}
              className={`px-6 py-3 rounded-full border text-base font-medium shadow-sm ${
                darkMode
                  ? "bg-[#1E1E1E] border-[#333] text-gray-300"
                  : "bg-white border-[#E7DED5] text-[#444444]"
              }`}
            >
              {skill}
            </div>
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
            delay: 1.3,
            duration: 1,
          }}
          className="flex justify-center gap-5 mt-14 flex-wrap"
        >
          <a
            href="#projects"
            className={`px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all ${
              darkMode
                ? "bg-white text-[#111827]"
                : "bg-[#1D1D1D] text-white"
            }`}
          >
            View Projects
          </a>

          <a
            href="#contact"
            className={`px-8 py-4 rounded-full border font-semibold hover:scale-105 transition-all ${
              darkMode
                ? "bg-[#1E1E1E] border-[#333] text-white"
                : "bg-white border-[#E7DED5] text-[#1D1D1D]"
            }`}
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;