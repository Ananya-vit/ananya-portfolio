function Certification() {
  const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May 2026",
    featured: true,
    skills: [
      "Cybersecurity",
      "Threat Analysis",
      "Network Security",
    ],
    link: "#",
  },

  {
    title: "Blockchain and its Applications",
    issuer: "NPTEL - IIT Kharagpur",
    date: "2026",
    featured: true,
    skills: [
      "Blockchain",
      "Cryptography",
      "Distributed Systems",
    ],
    link: "#",
  },

  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "May 2026",
    skills: [
      "Cyber Security",
      "Risk Assessment",
    ],
    link: "#",
  },

  {
    title: "Introduction to Cybersecurity Job Simulation",
    issuer: "Commonwealth Bank (Forage)",
    date: "May 2026",
    skills: [
      "Incident Response",
      "Penetration Testing",
      "Security Awareness",
    ],
    link: "#",
  },

  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group (Forage)",
    date: "May 2026",
    skills: [
      "Data Analytics",
      "AI",
      "Data Storytelling",
    ],
    link: "#",
  },

  {
    title: "Open Source Software",
    issuer: "VITyarthi",
    date: "May 2026",
    skills: [
      "Git",
      "GitHub",
      "Open Source",
    ],
    link: "#",
  },

  {
    title: "Fundamentals of AI and ML",
    issuer: "VITyarthi",
    date: "September 2024",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
    ],
    link: "#",
  },

  {
    title: "Python Essentials",
    issuer: "VITyarthi",
    date: "September 2025",
    skills: [
      "Python",
      "Programming",
      "Problem Solving",
    ],
    link: "#",
  },
];
  return (
    <section
      id="certifications"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-slate-900">
          Certifications
        </h2>

        <p className="text-slate-500 mt-4">
          Industry certifications, job simulations, and academic achievements.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">

        <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-indigo-600">6+</h3>
          <p className="text-slate-500">Certificates</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-purple-600">3</h3>
          <p className="text-slate-500">Job Simulations</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-cyan-600">2</h3>
          <p className="text-slate-500">Cybersecurity</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
          <h3 className="text-3xl font-bold text-orange-500">1</h3>
          <p className="text-slate-500">NPTEL</p>
        </div>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="
              bg-white
              border
              border-slate-200
              rounded-3xl
              p-6
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            {cert.featured && (
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                Featured
              </span>
            )}

            <h3 className="text-2xl font-bold text-slate-900 mt-4">
              {cert.title}
            </h3>

            <p className="inline-block mt-4 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
              {cert.issuer}
            </p>

            <p className="text-slate-500 mt-4">
              📅 {cert.date}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-3
                    py-1
                    text-sm
                    rounded-full
                    bg-slate-100
                    text-slate-700
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                mt-6
                px-5
                py-3
                rounded-xl
                bg-indigo-600
                text-white
                font-medium
                hover:bg-indigo-700
                transition
              "
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;