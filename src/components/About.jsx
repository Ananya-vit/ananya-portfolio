function About({ darkMode }) {
  return (
    <section
      id="about"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Image */}

        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-[#C5B4D4]/20 blur-3xl rounded-full"></div>

            <div
              className={`relative p-3 rounded-[36px] backdrop-blur-xl border transition-all duration-500 ${
                darkMode
                  ? "bg-[#181A22]/80 border-[#2A2D38]"
                  : "bg-white/70 border-[#E7DED5]"
              }`}
            >
              <img
                src="/profile.jpeg"
                alt="Ananya Singh"
                className="
                  w-[320px]
                  md:w-[420px]
                  rounded-[28px]
                  shadow-2xl
                  object-cover
                "
              />
            </div>

          </div>
        </div>

        {/* Content */}

        <div>

          <p
            className={`uppercase tracking-[0.2em] text-sm font-semibold mb-4 ${
              darkMode ? "text-[#C5B4D4]" : "text-[#B8A89F]"
            }`}
          >
            About
          </p>

          <h2
            className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-500 ${
              darkMode ? "text-white" : "text-[#1D1D1D]"
            }`}
          >
            About Me
          </h2>

          <p
            className={`text-xl leading-9 transition-all duration-500 ${
              darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
            }`}
          >
            I'm Ananya, a Computer Science Undergraduate
            at Vellore Institute of Technology, Bhopal,
            with interests in Artificial Intelligence,
            Cyber Security, Generative & Agentic AI,
            Machine Learning, Data Structures &
            Algorithms, and Full Stack Development.

            <br />
            <br />

            I enjoy building impactful products,
            exploring emerging technologies,
            and solving real-world problems through
            technology, innovation, and continuous learning.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "Artificial Intelligence",
              "Cyber Security",
              "Generative AI",
              "Machine Learning",
              "DSA",
              "Full Stack",
            ].map((tag) => (
              <span
                key={tag}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-500 ${
                  darkMode
                    ? "bg-[#181A22] border-[#2A2D38] text-white"
                    : "bg-white border-[#E7DED5] text-[#444444]"
                }`}
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;