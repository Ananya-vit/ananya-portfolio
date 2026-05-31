function Project() {
  return (
    <section
      id="projects"
      className="relative py-40 px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
          Selected Work
        </p>

        <h2 className="text-5xl md:text-7xl font-bold">
          Projects
        </h2>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Currently building projects focused on
          Artificial Intelligence, Cyber Security,
          Full Stack Development and real-world impact.
        </p>

        <div
          className="
          mt-16
          rounded-[32px]
          border
          border-white/10
          backdrop-blur-xl
          p-12
          text-center
          "
        >
          <h3 className="text-3xl font-semibold mb-4">
            Coming Soon
          </h3>

          <p className="text-gray-400">
            Exciting projects are currently under development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Project;