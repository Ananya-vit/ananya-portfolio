function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}

        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-[#C5B4D4]/20 blur-3xl rounded-full"></div>

            <img
              src="/profile.jpeg"
              alt="Ananya Singh"
              className="
                relative
                w-[320px]
                md:w-[420px]
                rounded-[32px]
                shadow-2xl
                object-cover
              "
            />

          </div>

        </div>

        {/* Content */}

        <div>

          <h2 className="text-5xl font-bold text-[#1D1D1D] mb-8">
            About Me
          </h2>

          <p className="text-xl leading-9 text-[#555555]">
            I'm Ananya, a Computer Science
            Undergraduate at Vellore Institute of Technology, Bhopal, with interests in
            Artificial Intelligence, Cyber Security, Generative & Agentic AI,
            Machine Learning, Data Structures &
            Algorithms, and Full Stack Development.

            <br />
            <br />

            I enjoy building impactful projects,
            learning emerging technologies, build and learn
            and solving real-world problems through
            technology and innovation.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;