import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AltVerseModal from "./AltVerseModal";
function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
  onClick={() => navigate("/altverse")}
  className="
  mt-16
  rounded-[32px]
  border
  border-white/10
  backdrop-blur-xl
  p-10
  cursor-pointer
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-white/20
  hover:shadow-2xl
  "
>
  <div className="flex flex-col md:flex-row justify-between gap-8">

    <div>
      <span className="px-3 py-1 rounded-full text-sm border border-white/10">
        Featured Project
      </span>

      <h3 className="text-4xl font-bold mt-4">
        AltVerse
      </h3>

      <p className="text-gray-400 mt-4 max-w-xl">
        An AI-powered platform that transforms user prompts
        into immersive alternate-history worlds, timelines,
        and reality simulations.
      </p>
      <div className="mt-8 grid md:grid-cols-3 gap-4">

  <div className="rounded-2xl bg-white/5 p-5">
    <h4 className="font-semibold mb-2">Problem</h4>
    <p className="text-sm text-gray-400">
      Existing AI tools generate text, not complete alternate worlds.
    </p>
  </div>

  <div className="rounded-2xl bg-white/5 p-5">
    <h4 className="font-semibold mb-2">Solution</h4>
    <p className="text-sm text-gray-400">
      Generate immersive timelines, cultures, politics and future events.
    </p>
  </div>

  <div className="rounded-2xl bg-white/5 p-5">
    <h4 className="font-semibold mb-2">Impact</h4>
    <p className="text-sm text-gray-400">
      Demonstrates AI integration, routing, deployment and UI engineering.
    </p>
  </div>

</div>

      <div className="flex flex-wrap gap-2 mt-6">
        <span className="px-3 py-1 rounded-full bg-white/5">Next.js</span>
        <span className="px-3 py-1 rounded-full bg-white/5">TypeScript</span>
        <span className="px-3 py-1 rounded-full bg-white/5">Tailwind</span>
        <span className="px-3 py-1 rounded-full bg-white/5">AI API</span>
        <span className="px-3 py-1 rounded-full bg-white/5">Vercel</span>
      </div>
    </div>

    <div className="flex items-end gap-4">
      <a
        href="https://alt-verse.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 rounded-xl bg-white text-black font-medium"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/Ananya-vit/AltVerse"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="px-5 py-3 rounded-xl border border-white/10"
      >
        GitHub
      </a>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}

export default Project;