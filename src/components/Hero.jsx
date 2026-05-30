function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">

      <p className="text-gray-400 mb-4">
        Full Stack Developer & Cyber Security Student
      </p>

      <h1 className="text-6xl font-bold">
        Hi, I'm Ananya 👋
      </h1>

      <p className="text-gray-400 mt-6 max-w-2xl">
        Building modern web applications, solving DSA problems,
        and exploring Cyber Security.
      </p>

      <button className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
        View Projects
      </button>

    </section>
  );
}

export default Hero;