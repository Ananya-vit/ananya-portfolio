function Certification() {
  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "May 2026",
      featured: true,
      skills: ["Cybersecurity", "Threat Analysis", "Network Security"],
      link: "#",
    },
    {
      title: "Blockchain and its Applications",
      issuer: "NPTEL - IIT Kharagpur",
      date: "2026",
      featured: true,
      skills: ["Blockchain", "Cryptography", "Distributed Systems"],
      link: "#",
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte (Forage)",
      date: "May 2026",
      skills: ["Cyber Security", "Risk Assessment"],
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
      issuer: "VIT Bhopal University",
      date: "May 2026",
      skills: ["Git", "GitHub", "Open Source"],
      link: "#",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-8 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Certifications
        </h2>

        <p className="text-gray-400 mt-4">
          Industry certifications, job simulations, and academic achievements.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-zinc-900 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            6+
          </h3>
          <p className="text-gray-400">
            Certifications
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            3
          </h3>
          <p className="text-gray-400">
            Job Simulations
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            2
          </h3>
          <p className="text-gray-400">
            Cybersecurity
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">
            1
          </h3>
          <p className="text-gray-400">
            NPTEL
          </p>
        </div>
      </div>

      {/* Certificates */}
      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-6
              hover:border-cyan-400
              hover:-translate-y-2
              transition-all
              duration-300
              shadow-lg
            "
          >
            {cert.featured && (
              <span className="text-yellow-400 font-semibold">
                ⭐ Featured Certificate
              </span>
            )}

            <h3 className="text-2xl font-bold mt-3">
              🏆 {cert.title}
            </h3>

            <p className="inline-block mt-4 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
              {cert.issuer}
            </p>

            <p className="text-gray-500 mt-4">
              📅 {cert.date}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    px-3
                    py-1
                    text-sm
                    rounded-full
                    bg-zinc-800
                    text-gray-300
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
                py-2
                rounded-xl
                bg-white
                text-black
                font-semibold
                hover:bg-cyan-400
                transition
              "
            >
              📄 View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;