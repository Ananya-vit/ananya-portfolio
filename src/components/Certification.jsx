function Certification() {
  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "May 2026",
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
      date: "May 2026",
      link: "/certificate-images/opensource.jpg",
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
  ];

  return (
    <section
      id="certifications"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1D] mb-6">
        Certifications
      </h2>

      <p className="text-xl text-[#555555] mb-12 max-w-3xl">
        Industry certifications and professional learning experiences
        across Artificial Intelligence, Cyber Security, Blockchain,
        Data Analytics, and Software Development.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-[28px]
              border border-[#E8E1D8]
              p-8
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-[#1D1D1D] leading-snug">
              {cert.title}
            </h3>

            <p className="text-lg text-[#555555] mt-4">
              {cert.issuer}
            </p>

            <p className="text-[#888888] mt-2">
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
                rounded-xl
                bg-[#1D1D1D]
                text-white
                font-medium
                hover:opacity-90
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