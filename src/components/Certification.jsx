function Certification({ darkMode }) {
  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2026",
      link: "/certificate-images/cisco.jpg",
    },
    {
      title: "Blockchain and its Applications",
      issuer: "NPTEL - IIT Kharagpur",
      date: "2026",
      link: "/certificate-images/blockchain.jpg",
    },
    {
      title: "Open Source Software",
      issuer: "VIT Bhopal University",
      date: "2026",
      link: "/certificate-images/opensource.jpg",
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte (Forage)",
      date: "2026",
      link: "/certificate-images/deloitte.jpg",
    },
    {
      title: "Introduction to Cybersecurity Job Simulation",
      issuer: "Commonwealth Bank (Forage)",
      date: "2026",
      link: "/certificate-images/commonwealth.jpg",
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata Group (Forage)",
      date: "2026",
      link: "/certificate-images/tata.jpg",
    },
    {
      title: "Fundamentals of AI & ML",
      issuer: "VITyarthi",
      date: "2024",
      link: "/certificate-images/aiml.jpg",
    },
    {
      title: "Python Essentials",
      issuer: "VITyarthi",
      date: "2025",
      link: "/certificate-images/python.jpg",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <p
        className={`uppercase tracking-[0.2em] text-sm font-semibold mb-4 ${
          darkMode ? "text-[#C5B4D4]" : "text-[#B8A89F]"
        }`}
      >
        Achievements
      </p>

      <h2
        className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-500 ${
          darkMode ? "text-white" : "text-[#1D1D1D]"
        }`}
      >
        Certifications
      </h2>

      <p
        className={`text-xl max-w-3xl mb-14 transition-all duration-500 ${
          darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
        }`}
      >
        Professional certifications and learning experiences
        across Artificial Intelligence, Cyber Security,
        Blockchain, Data Analytics, and Software Development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`rounded-[30px] p-8 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              darkMode
                ? "bg-[#181A22]/80 border-[#2A2D38]"
                : "bg-white/80 border-[#E7DED5]"
            }`}
          >
            <h3
              className={`text-2xl font-semibold leading-snug ${
                darkMode ? "text-white" : "text-[#1D1D1D]"
              }`}
            >
              {cert.title}
            </h3>

            <p
              className={`mt-4 text-lg ${
                darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
              }`}
            >
              {cert.issuer}
            </p>

            <p
              className={`mt-2 ${
                darkMode ? "text-gray-400" : "text-[#888888]"
              }`}
            >
              {cert.date}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-6
                px-6 py-3
                rounded-full
                bg-gradient-to-r
                from-[#B8A89F]
                to-[#C5B4D4]
                text-white
                font-semibold
                hover:scale-105
                transition-all
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