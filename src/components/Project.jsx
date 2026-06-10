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
 onClick={() => navigate("/studyflow")}
  className="
  mt-16
  rounded-[32px]
  border
  border-white/10
  backdrop-blur-xl
  p-10
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-white/20
  hover:shadow-2xl
  "
>
  <div className="flex flex-col md:flex-row justify-between gap-8">

    <div>
      <span className="px-3 py-1 rounded-full text-sm border border-green-500/30 text-green-400">
        Featured Project • MVP Live
      </span>

      <h3 className="text-4xl font-bold mt-4">
        StudyFlow AI
      </h3>

      <div className="mt-2">
        <span className="text-sm tracking-wide text-green-400">
          Currently Under Active Development
        </span>
      </div>

      <p className="text-gray-400 mt-4 max-w-xl">
        Designed and developed an AI-powered learning platform that transforms
        PDFs into summaries, flashcards, quizzes and study notes. Building the
        MVP required solving challenges related to PDF content extraction,
        prompt engineering, AI response consistency and user workflow design.
        The project is currently being expanded with embedding-based semantic
        search, vector databases, knowledge graphs and personalized study
        planning features.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-4">

        <div className="rounded-2xl bg-white/5 p-5">
          <h4 className="font-semibold mb-2">Challenge</h4>
          <p className="text-sm text-gray-400">
            Handling PDF extraction, inconsistent document formats and maintaining reliable AI-generated outputs.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <h4 className="font-semibold mb-2">Solution</h4>
          <p className="text-sm text-gray-400">
            Built an automated workflow that converts study material into interactive learning resources.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-5">
          <h4 className="font-semibold mb-2">Next Phase</h4>
          <p className="text-sm text-gray-400">
            Implementing embeddings, vector search, knowledge graphs, study planners and scalable document processing.
          </p>
        </div>

      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        <span className="px-3 py-1 rounded-full bg-white/5">Next.js</span>
        <span className="px-3 py-1 rounded-full bg-white/5">TypeScript</span>
        <span className="px-3 py-1 rounded-full bg-white/5">React</span>
        <span className="px-3 py-1 rounded-full bg-white/5">Tailwind CSS</span>
        <span className="px-3 py-1 rounded-full bg-white/5">Groq API</span>
      </div>
    </div>

    <div className="flex items-end gap-4">
      <a
        href="https://studyyflowai.vercel.app"
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 rounded-xl bg-white text-black font-medium"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/Ananya-vit/studyflow-ai"
        onClick={(e) => e.stopPropagation()}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 rounded-xl border border-white/10"
      >
        GitHub
      </a>
    </div>

  </div>
</div>
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
        Phase 1 Complete
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