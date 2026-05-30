function Skills() {
  const skills = [
    "Artificial Intelligence",
    "Machine Learning",
    "Cyber Security",
    "DSA",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "MongoDB",
  ];

  return (
    <section
      id="skills"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1D] mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              px-8 py-4
              bg-white/80
              backdrop-blur-sm
              border border-[#E8E1D8]
              rounded-2xl
              text-lg
              font-medium
              text-[#555555]
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;