function Hero({ darkMode }) {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#C5B4D4]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D9C6B0]/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Badge */}

        <div className="flex justify-center mb-10">
          <div
            className={`inline-flex items-center px-8 py-4 rounded-full backdrop-blur-md shadow-sm border transition-all duration-500 ${
              darkMode
                ? "bg-[#181A22]/80 border-[#2A2D38]"
                : "bg-white/70 border-[#E7DED5]"
            }`}
          >
            <span
              className={`text-base md:text-xl font-medium ${
                darkMode ? "text-[#D1D5DB]" : "text-[#555555]"
              }`}
            >
              Software Engineer · Cyber Security Enthusiast · GenAI Developer
            </span>
          </div>
        </div>

        {/* Heading */}

        <h1
          className={`text-6xl md:text-8xl lg:text-[120px] font-bold leading-[0.95] tracking-tight transition-all duration-500 ${
            darkMode ? "text-white" : "text-[#1D1D1D]"
          }`}
        >
          Turning ideas
          <br />

          into{" "}

          <span className="bg-gradient-to-r from-[#B8A89F] via-[#A7B5C5] to-[#C5B4D4] bg-clip-text text-transparent">
            vision
          </span>

          <br />

          and vision
          <br />

          into reality.
        </h1>

        {/* Subtitle */}

        <h2
          className={`mt-10 text-2xl md:text-4xl font-semibold transition-all duration-500 ${
            darkMode ? "text-[#F3F4F6]" : "text-[#2F2F2F]"
          }`}
        >
          Computer Science Undergraduate at VIT Bhopal
        </h2>

        {/* Description */}

        <p
          className={`mt-8 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto transition-all duration-500 ${
            darkMode ? "text-[#B8BDC9]" : "text-[#555555]"
          }`}
        >
          Passionate about Artificial Intelligence,
          Cyber Security, Machine Learning,
          Data Structures & Algorithms,
          and Full Stack Development.

          <br />
          <br />

          Building impactful digital experiences and
          solving real-world problems through technology.
        </p>

        {/* Skill Pills */}

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            "Artificial Intelligence",
            "Cyber Security",
            "Machine Learning",
            "DSA",
            "Full Stack Development",
          ].map((skill) => (
            <span
              key={skill}
              className={`px-6 py-3 rounded-full text-lg font-medium shadow-sm border transition-all duration-500 ${
                darkMode
                  ? "bg-[#181A22] border-[#2A2D38] text-white"
                  : "bg-white border-[#E7DED5] text-[#444444]"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex justify-center gap-5 mt-14 flex-wrap">

          <a
            href="#projects"
            className="px-10 py-5 rounded-full bg-gradient-to-r from-[#B8A89F] to-[#C5B4D4] text-white text-lg font-semibold hover:scale-105 transition-all"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className={`px-10 py-5 rounded-full text-lg font-semibold border hover:scale-105 transition-all ${
              darkMode
                ? "bg-[#181A22] border-[#2A2D38] text-white"
                : "bg-white border-[#E7DED5] text-[#1D1D1D]"
            }`}
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;