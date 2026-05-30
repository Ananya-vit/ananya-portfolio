function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center pt-40 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#C5B4D4]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D9C6B0]/20 blur-[140px] rounded-full"></div>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Badge */}

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center px-8 py-4 rounded-full border border-[#E7DED5] bg-white/70 backdrop-blur-md shadow-sm">
            <span className="text-[#555555] text-base md:text-xl font-medium">
              Software Engineer · Cyber Security Enthusiast · GenAI Developer
            </span>
          </div>
        </div>

        {/* Main Heading */}

        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold leading-[0.95] tracking-tight text-[#1D1D1D]">

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

        <h2 className="mt-10 text-2xl md:text-4xl font-semibold text-[#2F2F2F]">
          Computer Science Undergraduate at VIT Bhopal
        </h2>

        {/* Description */}

        <p className="mt-8 text-lg md:text-2xl text-[#555555] leading-relaxed max-w-4xl mx-auto">
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
              className="
                px-6 py-3
                rounded-full
                bg-white
                border border-[#E7DED5]
                text-[#444444]
                text-lg
                font-medium
                shadow-sm
              "
            >
              {skill}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex justify-center gap-5 mt-14 flex-wrap">

          <a
            href="#projects"
            className="
              px-10 py-5
              rounded-full
              bg-[#1D1D1D]
              text-white
              text-lg
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-10 py-5
              rounded-full
              border border-[#E7DED5]
              bg-white
              text-[#1D1D1D]
              text-lg
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;