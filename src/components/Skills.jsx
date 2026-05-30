function Skills({ darkMode }) {
  const skills = [
    "Artificial Intelligence",
    "Cyber Security",
    "Generative AI",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Full Stack Development",
    "React",
    "JavaScript",
    "Python",
    "C++",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <p
        className={`uppercase tracking-[0.2em] text-sm font-semibold mb-4 ${
          darkMode ? "text-[#C5B4D4]" : "text-[#B8A89F]"
        }`}
      >
        Expertise
      </p>

      <h2
        className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-500 ${
          darkMode ? "text-white" : "text-[#1D1D1D]"
        }`}
      >
        Skills & Technologies
      </h2>

      <p
        className={`text-xl max-w-3xl mb-14 transition-all duration-500 ${
          darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
        }`}
      >
        A blend of software engineering, artificial intelligence,
        cybersecurity, and modern web development technologies.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className={`p-8 rounded-[28px] border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              darkMode
                ? "bg-[#181A22]/80 border-[#2A2D38]"
                : "bg-white/80 border-[#E7DED5]"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-[#1D1D1D]"
              }`}
            >
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;