function Skills() {
  const skills = [
    "C++",
    "Python",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "MongoDB"
  ];

  return (
    <section id="skills" className="py-24 px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-3 border border-gray-700 rounded-xl hover:border-white transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;