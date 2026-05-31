import { motion } from "framer-motion";

function Certification({ darkMode }) {
  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      description:
        "Learned cybersecurity fundamentals, threat landscapes, network security concepts, and security best practices.",
      skills: ["Cybersecurity", "Network Security", "Threat Analysis"],
    },

    {
      title: "Blockchain and its Applications",
      issuer: "NPTEL • IIT Kharagpur",
      description:
        "Studied blockchain architecture, consensus mechanisms, cryptocurrencies, smart contracts, and real-world applications.",
      skills: ["Blockchain", "Cryptography", "Smart Contracts"],
    },

    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte • Forage",
      description:
        "Completed cybersecurity simulation tasks involving risk assessment, threat analysis, and security practices.",
      skills: ["Cyber Security", "Risk Assessment", "Security Operations"],
    },

    {
      title: "Introduction to Cybersecurity Job Simulation",
      issuer: "Commonwealth Bank • Forage",
      description:
        "Worked on incident response, penetration testing, security awareness, and data analysis activities.",
      skills: [
        "Incident Response",
        "Penetration Testing",
        "Security Awareness",
      ],
    },

    {
      title: "GenAI Powered Data Analytics",
      issuer: "Tata Group • Forage",
      description:
        "Performed exploratory data analysis, AI-powered risk profiling, and business data storytelling.",
      skills: ["Data Analytics", "Generative AI", "Business Insights"],
    },

    {
      title: "Python Programming",
      issuer: "Professional Certification",
      description:
        "Built a strong foundation in Python programming, OOP concepts, automation, and problem solving.",
      skills: ["Python", "OOP", "Automation"],
    },

    {
      title: "Fundamentals of AI & ML",
      issuer: "Professional Certification",
      description:
        "Learned machine learning fundamentals, supervised learning, model evaluation, and AI concepts.",
      skills: ["AI", "Machine Learning", "Data Science"],
    },

    {
      title: "Open Source Software",
      issuer: "VIT Bhopal University",
      description:
        "Worked with Git, GitHub, Linux, FOSS licensing, and collaborative software development workflows.",
      skills: ["Git", "GitHub", "Open Source"],
    },
  ];

  return (
    <section
      id="certifications"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2
          className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-[#1D1D1D]"
          }`}
        >
          Certifications
        </h2>

        <p
          className={`max-w-3xl mx-auto text-lg leading-relaxed ${
            darkMode ? "text-gray-400" : "text-[#666]"
          }`}
        >
          Industry certifications, job simulations, and continuous
          learning across Artificial Intelligence, Cyber Security,
          Data Analytics, Blockchain, Python, and Software Development.
        </p>
      </motion.div>

      {/* Stats */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
        {[
          ["8+", "Certifications"],
          ["3", "Job Simulations"],
          ["3", "Cyber Security"],
          ["2", "AI & ML"],
        ].map(([number, label]) => (
          <div
            key={label}
            className={`p-6 rounded-3xl text-center border ${
              darkMode
                ? "bg-[#111111] border-[#222]"
                : "bg-white border-[#E7DED5]"
            }`}
          >
            <h3
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-[#1D1D1D]"
              }`}
            >
              {number}
            </h3>

            <p
              className={`mt-2 ${
                darkMode ? "text-gray-400" : "text-[#666]"
              }`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className={`p-8 rounded-[32px] border transition-all duration-300 ${
              darkMode
                ? "bg-[#111111] border-[#222]"
                : "bg-white border-[#E7DED5]"
            }`}
          >
            <div className="mb-4">
              <p className="text-sm text-[#B8A89F] font-semibold uppercase tracking-wider">
                {cert.issuer}
              </p>

              <h3
                className={`text-2xl font-bold mt-2 ${
                  darkMode ? "text-white" : "text-[#1D1D1D]"
                }`}
              >
                {cert.title}
              </h3>
            </div>

            <p
              className={`leading-relaxed mb-6 ${
                darkMode ? "text-gray-400" : "text-[#666]"
              }`}
            >
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode
                      ? "bg-[#1C1C1C] text-gray-300"
                      : "bg-[#F4F1EC] text-[#555]"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certification;