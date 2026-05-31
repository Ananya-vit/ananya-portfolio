import { motion } from "framer-motion";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className="py-24 px-8 max-w-7xl mx-auto"
    >
      <motion.div
        className="
          grid
          md:grid-cols-[0.8fr_1.2fr]
          gap-24
          items-center
        "
        initial={{
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
      >
        {/* Image */}

        <div className="flex justify-center md:justify-start">
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 bg-[#C5B4D4]/20 blur-3xl rounded-full"></div>

            <img
              src="/profile.jpeg"
              alt="Ananya"
              className="
                relative
                w-[220px]
                md:w-[280px]
                h-[300px]
                md:h-[380px]
                object-cover
                rounded-[28px]
                shadow-2xl
              "
            />
          </div>
        </div>

        {/* Content */}

        <div>

          {/* Small Label */}

          <span
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#B8A89F]
            "
          >
             ABOUT ME 
          </span>

          {/* Heading */}

          <h2
            className={`
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              ${
                darkMode
                  ? "text-white"
                  : "text-[#1D1D1D]"
              }
            `}
          >
           WHERE CODE, CREATIVITY, AND CURIOSITY CONVERGE.
          </h2>

          {/* Paragraph 1 */}

          <p
            className={`
              mt-8
              text-lg
              md:text-xl
              leading-9
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-[#555555]"
              }
            `}
          >
            I'm Ananya, a B.Tech Computer Science Undergraduate at
            Vellore Institute of Technology, Bhopal, with strong
            interests in Artificial Intelligence, Cyber Security,
            Machine Learning, Generative AI, Data Structures &
            Algorithms, and Full Stack Development.
          </p>

          {/* Paragraph 2 */}

          <p
            className={`
              mt-6
              text-lg
              md:text-xl
              leading-9
              ${
                darkMode
                  ? "text-gray-300"
                  : "text-[#555555]"
              }
            `}
          >
            I enjoy building impactful projects, exploring emerging
            technologies, solving real-world problems, and continuously
            improving my technical and problem-solving skills.
          </p>

          {/* Skills */}

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "Artificial Intelligence",
              "Cyber Security",
              "Machine Learning",
              "Generative AI",
              "DSA",
              "Full Stack",
            ].map((skill) => (
              <span
                key={skill}
                className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  border
                  transition-all
                  ${
                    darkMode
                      ? "bg-[#1E1E1E] border-[#333] text-gray-200"
                      : "bg-white border-[#E7DED5] text-[#444444]"
                  }
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;