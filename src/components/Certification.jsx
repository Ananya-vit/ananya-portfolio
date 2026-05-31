import { motion } from "framer-motion";

function Certification({ darkMode }) {
  const certificates = [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google • Coursera",
      file: "/certificates/google-cybersecurity.pdf",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      file: "/certificates/aws.pdf",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Coursera",
      file: "/certificates/ml.pdf",
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      file: "/certificates/python.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-40 px-8 overflow-hidden"
    >
      {/* Ambient Glow */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#A7B5C5]/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#C5B4D4]/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

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
          Certifications
        </motion.h2>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
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
                delay: index * 0.12,
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
              <p
                className={`
                  text-sm
                  uppercase
                  tracking-widest
                  mb-3
                  ${
                    darkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }
                `}
              >
                Certification
              </p>

              <h3
                className={`
                  text-2xl
                  font-semibold
                  leading-snug
                  ${
                    darkMode
                      ? "text-white"
                      : "text-[#111]"
                  }
                `}
              >
                {cert.title}
              </h3>

              <p
                className={`
                  mt-4
                  ${
                    darkMode
                      ? "text-gray-400"
                      : "text-[#666]"
                  }
                `}
              >
                {cert.issuer}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-8
                  px-6
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#B8A89F]
                  to-[#C5B4D4]
                  text-white
                  font-medium
                  hover:scale-105
                  transition-all
                "
              >
                View Certificate
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certification;