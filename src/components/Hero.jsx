import { motion } from "framer-motion";

function Hero({ darkMode }) {
  return (
    <section
  id="overview"
  className={`
    relative
    min-h-screen
    flex
    items-center
    justify-center
    overflow-hidden
    px-8
    pt-20
    md:pt-24
    ${
      darkMode
        ? "bg-[#070B14]"
        : "bg-[#FAF7F2]"
    }
  `}
>
  {/* Left Glow */}

<motion.div
  animate={{
    x: [0, 80, 0],
    y: [0, -40, 0],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute
    top-0
    left-0
    w-[500px]
    h-[500px]
    bg-[#A7B5C5]/20
    blur-[180px]
    rounded-full
  "
/>

{/* Right Glow */}

<motion.div
  animate={{
    x: [0, -100, 0],
    y: [0, 60, 0],
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute
    bottom-0
    right-0
    w-[500px]
    h-[500px]
    bg-[#C5B4D4]/20
    blur-[180px]
    rounded-full
  "
/>

{/* Center Glow */}

<motion.div
  animate={{
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[400px]
    h-[400px]
    bg-[#D9C6B0]/10
    blur-[140px]
    rounded-full
  "
/>
    
      {/* Ambient Background */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#A7B5C5]/20 blur-[180px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5B4D4]/20 blur-[180px] rounded-full"
      />

      {/* Content */}

      <motion.div
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
        }}
        className="relative z-10 max-w-6xl text-center mt-20"
      >
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <span
            className={`
            px-8 py-4
            rounded-full
            text-lg
            font-medium
            backdrop-blur-xl
            border
            ${
              darkMode
                ? "bg-white/5 border-white/10 text-gray-300"
                : "bg-white/70 border-[#E7DED5] text-[#555]"
            }
          `}
          >
            Software Engineer · Cyber Security Enthusiast · GenAI Developer
          </span>
        </motion.div>

        {/* Main Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.3,
            duration: 1.2,
          }}
          className={`
          text-6xl
          md:text-8xl
          lg:text-[90px]
          font-bold
          leading-[0.92]
          tracking-[-0.05em]
          ${
            darkMode
              ? "text-white"
              : "text-[#111]"
          }
        `}
        >
          Turning ideas
          <br />

          into{" "}

          <span className="bg-gradient-to-r from-[#B8A89F] via-[#A7B5C5] to-[#C5B4D4] bg-clip-text text-transparent">
            vision
          </span>

          <br />

          and vision
          <br />

          into reality.
        </motion.h1>

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
            delay: 0.7,
          }}
          className={`
          mt-10
          text-xl
          md:text-2xl
          max-w-4xl
          mx-auto
          leading-relaxed
          ${
            darkMode
              ? "text-gray-400"
              : "text-[#555555]"
          }
        `}
        >
          Computer Science Undergraduate at VIT Bhopal.
          Passionate about Artificial Intelligence,
          Cyber Security, Machine Learning and Full Stack
          Development. Building technology that solves
          real-world problems and creates meaningful impact.
        </motion.p>

        {/* CTA */}

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
            delay: 1,
          }}
          className="flex justify-center gap-6 mt-14 flex-wrap"
        >
          <a
            href="#projects"
            className="
            px-10 py-5
            rounded-full
            bg-gradient-to-r
            from-[#B8A89F]
            to-[#C5B4D4]
            text-white
            text-lg
            font-semibold
            shadow-xl
            hover:scale-105
            transition-all
          "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className={`
            px-10 py-5
            rounded-full
            border
            text-lg
            font-semibold
            backdrop-blur-xl
            transition-all
            hover:scale-105
            ${
              darkMode
                ? "border-white/10 bg-white/5 text-white"
                : "border-[#E7DED5] bg-white/70 text-[#111]"
            }
          `}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Skills */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
          }}
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-16
        "
        >
          {[
            "Artificial Intelligence",
            "Cyber Security",
            "Machine Learning",
            "Full Stack",
            "DSA",
          ].map((skill) => (
            <div
              key={skill}
              className={`
              px-5 py-3
              rounded-full
              text-sm
              md:text-base
              font-medium
              ${
                darkMode
                  ? "bg-white/5 border border-white/10 text-gray-300"
                  : "bg-white border border-[#E7DED5] text-[#444]"
              }
            `}
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;