function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">

      <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-6">
        🚀 Open to Opportunities
      </span>

      <h1 className="text-6xl md:text-7xl font-bold">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Ananya
        </span>
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-2xl">
        Computer Science Student passionate about
        Full Stack Development, Cyber Security,
        Data Structures & Algorithms, and AI.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <a
          href="https://github.com/Ananya-vit"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          LinkedIn
        </a>

        <a
          href="/resume/resume.pdf"
          target="_blank"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
        >
          Resume
        </a>

      </div>
    </section>
  );
}

export default Hero;