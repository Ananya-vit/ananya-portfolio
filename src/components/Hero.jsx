function Hero() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#C5B4D4]/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D9C6B0]/30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-[#EAE3DA] text-[#555555]">
              Open to Internships & Full-Time Opportunities
            </span>

            <h1 className="mt-8 text-[72px] leading-[0.95] font-bold tracking-tight text-[#1D1D1D]">

              Hi, I'm{" "}

              <span className="bg-gradient-to-r from-[#B8A89F] via-[#A7B5C5] to-[#C5B4D4] bg-clip-text text-transparent">
                Ananya
              </span>

            </h1>

            <h2 className="mt-6 text-2xl font-medium text-[#555555]">
              Computer Science Undergraduate at VIT Bhopal
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#555555] max-w-xl">
              Passionate about Artificial Intelligence,
              Cyber Security, Machine Learning,
              Data Structures & Algorithms,
              and Full Stack Development.

              Building impactful digital experiences
              and solving real-world problems through technology.
            </p>

            {/* Skills */}

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "Artificial Intelligence",
                "Cyber Security",
                "Machine Learning",
                "DSA",
                "Full Stack",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white border border-[#EAE3DA] text-[#555555]"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-12 flex-wrap">

              <a
                href="https://github.com/Ananya-vit"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-2xl bg-[#1D1D1D] text-white hover:opacity-90 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ananya-b19322326"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-2xl bg-white border border-[#EAE3DA]"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Gradient Blob */}

            <div className="absolute w-[420px] h-[420px] bg-gradient-to-br from-[#C5B4D4] via-[#D9C6B0] to-[#A7B5C5] rounded-full blur-[100px] opacity-40"></div>

            {/* Image Card */}

            <div className="
              relative
              bg-white/60
              backdrop-blur-xl
              p-5
              rounded-[32px]
              border
              border-white/50
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              animate-float
            ">

              <img
                src="/profile.jpeg"
                alt="Ananya"
                className="
                  w-[360px]
                  md:w-[430px]
                  rounded-[28px]
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;