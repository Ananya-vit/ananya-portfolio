function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#1D1D1D] mb-10">
        About Me
      </h2>

      <div className="max-w-4xl">
        <p className="text-2xl md:text-3xl leading-relaxed text-[#555555] font-medium">
          I'm a Computer Science undergraduate at
          <span className="text-[#1D1D1D] font-semibold">
            {" "}VIT Bhopal University
          </span>,
          specializing in Artificial Intelligence,
          Cyber Security, Machine Learning, and
          Data Structures & Algorithms.
        </p>

        <p className="text-xl md:text-2xl leading-relaxed text-[#555555] mt-8">
          I enjoy building modern web applications,
          exploring emerging technologies, and solving
          real-world problems through technology.
          My goal is to create impactful digital
          experiences that are both functional and beautiful.
        </p>
      </div>
    </section>
  );
}

export default About;