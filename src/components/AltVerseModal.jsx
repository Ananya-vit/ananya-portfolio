function AltVerseModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1a1a1a] p-10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="mb-8 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕ Close
        </button>

        <h1 className="text-5xl font-bold mb-4">
          AltVerse
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          AI-Powered Alternate Reality Generator
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          Overview
        </h2>

        <p className="text-gray-300 mb-8">
          AltVerse transforms user prompts into immersive
          alternate-history worlds, timelines, and reality
          simulations using generative AI.
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "AI API",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          Workflow
        </h2>

        <div className="space-y-2 mb-8">
          <p>User Prompt</p>
          <p>↓</p>
          <p>AI Processing</p>
          <p>↓</p>
          <p>Timeline Generation</p>
          <p>↓</p>
          <p>World Building</p>
          <p>↓</p>
          <p>Reality Page</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          Challenges
        </h2>

        <ul className="list-disc pl-6 text-gray-300 mb-8">
          <li>Maintaining AI consistency</li>
          <li>Dynamic route generation</li>
          <li>Large AI responses</li>
          <li>Prompt engineering</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          What I Learned
        </h2>

        <ul className="list-disc pl-6 text-gray-300">
          <li>AI Integration</li>
          <li>Next.js Architecture</li>
          <li>Deployment with Vercel</li>
        </ul>
      </div>
    </div>
  );
}

export default AltVerseModal;