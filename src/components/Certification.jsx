function Certification() {
  const certifications = [
    {
      title: "Python Programming",
      issuer: "Cisco",
      year: "2025",
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Cisco",
      year: "2025",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Udemy",
      year: "2025",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-8 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-2xl p-6 hover:border-white transition"
          >
            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {cert.issuer}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {cert.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;