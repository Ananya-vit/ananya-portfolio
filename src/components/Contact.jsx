import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact({ darkMode }) {
  const contacts = [
    {
      title: "Email",
      value: "ananyaavit@gmail.com",
      link: "mailto:ananyaavit@gmail.com",
      icon: <FaEnvelope size={28} />,
    },
    {
      title: "LinkedIn",
      value: "Connect Professionally",
      link: "https://www.linkedin.com/in/ananya-b19322326",
      icon: <FaLinkedin size={28} />,
    },
    {
      title: "GitHub",
      value: "github.com/Ananya-vit",
      link: "https://github.com/Ananya-vit",
      icon: <FaGithub size={28} />,
    },
    {
      title: "Instagram",
      value: "@yeah_ananyyaa",
      link: "https://www.instagram.com/yeah_ananyyaa",
      icon: <FaInstagram size={28} />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <p
        className={`uppercase tracking-[0.2em] text-sm font-semibold mb-4 ${
          darkMode ? "text-[#C5B4D4]" : "text-[#B8A89F]"
        }`}
      >
        Contact
      </p>

      <h2
        className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-500 ${
          darkMode ? "text-white" : "text-[#1D1D1D]"
        }`}
      >
        Let's Connect
      </h2>

      <p
        className={`text-xl max-w-3xl mb-14 transition-all duration-500 ${
          darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
        }`}
      >
        Open to internships, collaborations,
        exciting projects, and opportunities
        to build meaningful technology.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-8 rounded-[30px] border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
              darkMode
                ? "bg-[#181A22]/80 border-[#2A2D38]"
                : "bg-white/80 border-[#E7DED5]"
            }`}
          >
            <div
              className={`mb-5 ${
                darkMode ? "text-white" : "text-[#1D1D1D]"
              }`}
            >
              {item.icon}
            </div>

            <h3
              className={`text-2xl font-semibold ${
                darkMode ? "text-white" : "text-[#1D1D1D]"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`mt-3 text-lg ${
                darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
              }`}
            >
              {item.value}
            </p>
          </a>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-24 text-center">
        <p
          className={`text-sm ${
            darkMode ? "text-gray-500" : "text-[#888888]"
          }`}
        >
          Designed & Developed by Ananya Singh
        </p>
      </div>
    </section>
  );
}

export default Contact;