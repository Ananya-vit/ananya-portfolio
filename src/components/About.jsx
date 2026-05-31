import { motion } from "framer-motion";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className="relative py-40 px-8 overflow-hidden"
    >
      {/* Ambient Glow */}

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
          w-[450px]
          h-[450px]
          bg-[#A7B5C5]/10
          blur-[180px]
          rounded-full
        "
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
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
          w-[450px]
          h-[450px]
          bg-[#C5B4D4]/10
          blur-[180px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

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
          transition={{
            duration: 0.8,
          }}
          className={`
            text-5xl
            md:text-7xl
            font-bold
            mb-20
            text-center
            ${
              darkMode
                ? "text-white"
                : "text-[#111]"
            }
          `}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center"
          >
            <div
              className={`
                p-3
                rounded-[36px]
                backdrop-blur-xl
                border
                ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/70 border-[#E7DED5]"
                }
              `}
            >
              <img
                src="/profile.jpeg"
                alt="Ananya Singh"
                className="
                  w-[320px]
                  md:w-[420px]
                  rounded-[28px]
                  shadow-2xl
                "
              />
            </div>
          </motion.div>

          {/* Text */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <p
              className={`
                text-xl
                md:text-2xl
                leading-10
                ${
                  darkMode
                    ? "text-gray-400"
                    : "text-[#555555]"
                }
              `}
            >
              I'm Ananya, a Computer Science
              Undergraduate at Vellore Institute
              of Technology, Bhopal, with interests
              in Artificial Intelligence, Cyber Security,
              Generative & Agentic AI, Machine Learning,
              Data Structures & Algorithms, and
              Full Stack Development.

              <br />
              <br />

              I enjoy building impactful projects,
              learning emerging technologies,
              building and learning, and solving
              real-world problems through technology
              and innovation.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;