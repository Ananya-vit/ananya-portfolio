import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1D] mb-6">
        Let's Connect
      </h2>

      <p className="text-xl text-[#555555] mb-14 max-w-3xl">
        Whether it's an internship opportunity,
        collaboration, project discussion, or simply
        connecting with like-minded people, I'd love
        to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Email */}

        <a
          href="mailto:ananyaavit@gmail.com"
          className="
            bg-white/80
            backdrop-blur-sm
            border border-[#E8E1D8]
            rounded-[28px]
            p-8
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <FaEnvelope
            size={32}
            className="text-[#B8A89F]"
          />

          <h3 className="text-2xl font-semibold text-[#1D1D1D] mt-5">
            Email
          </h3>

          <p className="text-lg text-[#555555] mt-2">
            ananyaavit@gmail.com
          </p>
        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/ananya-b19322326"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white/80
            backdrop-blur-sm
            border border-[#E8E1D8]
            rounded-[28px]
            p-8
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <FaLinkedin
            size={32}
            className="text-[#A7B5C5]"
          />

          <h3 className="text-2xl font-semibold text-[#1D1D1D] mt-5">
            LinkedIn
          </h3>

          <p className="text-lg text-[#555555] mt-2">
            Connect professionally
          </p>
        </a>

        {/* GitHub */}

        <a
          href="https://github.com/Ananya-vit"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white/80
            backdrop-blur-sm
            border border-[#E8E1D8]
            rounded-[28px]
            p-8
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <FaGithub
            size={32}
            className="text-[#555555]"
          />

          <h3 className="text-2xl font-semibold text-[#1D1D1D] mt-5">
            GitHub
          </h3>

          <p className="text-lg text-[#555555] mt-2">
            github.com/Ananya-vit
          </p>
        </a>

        {/* Instagram */}

        <a
          href="https://www.instagram.com/yeah_ananyyaa"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white/80
            backdrop-blur-sm
            border border-[#E8E1D8]
            rounded-[28px]
            p-8
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300
          "
        >
          <FaInstagram
            size={32}
            className="text-[#C5B4D4]"
          />

          <h3 className="text-2xl font-semibold text-[#1D1D1D] mt-5">
            Instagram
          </h3>

          <p className="text-lg text-[#555555] mt-2">
            @yeah_ananyyaa
          </p>
        </a>

      </div>
    </section>
  );
}

export default Contact;