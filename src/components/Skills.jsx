import { motion } from "framer-motion";

function Skills({ darkMode }) {
  const skills = [
    {
      title: "Artificial Intelligence",
      desc: "Machine Learning, Deep Learning, Generative AI, Agentic AI",
    },
    {
      title: "Cyber Security",
      desc: "Network Security, Digital Forensics, Ethical Hacking",
    },
    {
      title: "Full Stack Development",
      desc: "React, Node.js, MongoDB, REST APIs",
    },
    {
      title: "Programming",
      desc: "Python, C++, JavaScript",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Problem Solving, Competitive Programming",
    },
    {
      title: "Tools & Platforms",
      desc: "Git, GitHub, Linux, VS Code",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-40 px-8 overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#A7B5C5]/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C5B4D4]/10 blur-[180px] rounded-full"></div>

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
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
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
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`
                p-8
                rounded-[32px]
                backdrop-blur-xl
                border
                transition-all
                ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white/70 border-[#E7DED5]"
                }
              `}
            >
              <h3
                className={`
                  text-2xl
                  font-semibold
                  mb-4
                  ${
                    darkMode
                      ? "text-white"
                      : "text-[#111]"
                  }
                `}
              >
                {skill.title}
              </h3>

              <p
                className={`
                  leading-relaxed
                  ${
                    darkMode
                      ? "text-gray-400"
                      : "text-[#666]"
                  }
                `}
              >
                {skill.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;