function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* Left Side */}
        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 font-medium">
            Open to Internship & Full-Time Opportunities
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ananya Singh
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl mt-6 max-w-xl">
            Computer Science Student passionate about Full Stack Development,
            Cyber Security, Artificial Intelligence, Machine Learning,
            and Data Structures & Algorithms.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-600">
              Full Stack
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-50 text-purple-600">
            Cyber Security
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600">
            DSA
            </span>

            <span className="px-4 py-2 rounded-full bg-pink-50 text-pink-600">
            AI & ML
            </span>

          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://github.com/Ananya-vit"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ananya-b19322326"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:ananyaavit@gmail.com"
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-white transition"
            >
              Email
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200">

            <img
              src="/profile.jpeg"
              alt="Ananya Singh"
              className="w-[320px] md:w-[400px] rounded-2xl object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;