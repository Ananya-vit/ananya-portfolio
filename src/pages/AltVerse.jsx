import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AltVerse() {
  const navigate = useNavigate();
    const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
    },
  },
};

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AI Integration",
    "Vercel",
    "Git",
    "GitHub",
  ];

  const learnings = [
    "AI API Integration",
    "Next.js Architecture",
    "Dynamic Routing",
    "TypeScript",
    "Component-Based Development",
    "Deployment Workflows",
    "Frontend Performance Optimization",
    "Product Design Thinking",
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-10 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 transition"
        >
          ← Back to Portfolio
        </button>

<motion.div
  initial={{
    opacity: 0,
    scale: 0.95,
    filter: "blur(15px)",
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  whileHover={{
    scale: 1.02,
  }}
  className="mt-12 rounded-3xl border border-purple-500/20 bg-purple-500/5 p-8"
>
  <h3 className="text-2xl font-bold mb-4">
    Key Achievement
  </h3>

  <p className="text-gray-300">
    Built and deployed a complete AI-powered web application independently
    while learning AI integration, routing architecture, deployment workflows,
    and modern frontend engineering throughout the development process.
  </p>

</motion.div>
        {/* Hero */}
        <motion.section
  className="mb-24"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
>
          <span className="px-4 py-2 rounded-full border border-white/10 text-sm">
            Featured Project
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mt-8">
            AltVerse
          </h1>

          <p className="text-2xl text-gray-400 mt-6 max-w-3xl">
            A full-stack web application that generates immersive
            alternate-history worlds through AI-powered content generation.
          </p>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl">
            Built independently to explore AI integration,
            modern web development, and product engineering.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a
              href="https://alt-verse.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ananya-vit/AltVerse"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
            >
              GitHub
            </a>
          </div>

        </motion.section>

<section className="mb-16">
  <div className="grid md:grid-cols-4 gap-4">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-gray-500 text-sm">Project Type</p>
      <h3 className="text-xl font-semibold mt-2">
        AI Web Application
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-gray-500 text-sm">Built By</p>
      <h3 className="text-xl font-semibold mt-2">
        Solo Developer
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-gray-500 text-sm">Deployment</p>
      <h3 className="text-xl font-semibold mt-2">
        Vercel
      </h3>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-gray-500 text-sm">Focus</p>
      <h3 className="text-xl font-semibold mt-2">
        AI Integration
      </h3>
    </div>

  </div>
</section>

<section className="mb-16">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h2 className="text-3xl font-bold mb-6">
      Why This Project Matters
    </h2>

    <p className="text-gray-400 leading-relaxed">
      AltVerse was more than a portfolio project. It was my first experience
      taking an idea from concept to deployment while learning new technologies
      along the way.
    </p>

    <p className="text-gray-400 leading-relaxed mt-4">
      I built the entire application independently, from designing the user
      experience and frontend architecture to integrating AI capabilities and
      deploying the final product.
    </p>
  </div>
</section>
<section className="mb-16">
  <h2 className="text-3xl font-bold mb-8">
    What I Built From Scratch
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="font-semibold mb-3">
        Frontend Architecture
      </h3>
      <p className="text-gray-400">
        Designed reusable React components, routing structure,
        responsive layouts, and UI interactions.
      </p>
    </div>

    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="font-semibold mb-3">
        AI Integration
      </h3>
      <p className="text-gray-400">
        Learned how to connect AI services, process responses,
        and generate meaningful content dynamically.
      </p>
    </div>

    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="font-semibold mb-3">
        Deployment
      </h3>
      <p className="text-gray-400">
        Configured deployment pipelines and published the
        application on Vercel.
      </p>
    </div>

    <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
      <h3 className="font-semibold mb-3">
        Product Design
      </h3>
      <p className="text-gray-400">
        Designed the complete user journey from entering a prompt
        to exploring generated realities.
      </p>
    </div>

  </div>
</section>
        {/* Why I Built It */}
       <motion.section
  className="mb-16"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Why I Built AltVerse
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I wanted to build something beyond a traditional AI chatbot.
              The idea was to create a platform where users could explore
              alternate realities, historical divergences, and fictional
              timelines through AI-generated world building.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              AltVerse became an opportunity to challenge myself,
              learn AI integration from scratch, and build a complete
              production-ready application independently.
            </p>

          </div>
        </motion.section>

        {/* Building Journey */}
        <motion.section
  className="mb-16"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
          <h2 className="text-3xl font-bold mb-8">
            Development Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="font-semibold mb-3">Research</h3>
              <p className="text-gray-400">
                Explored alternate-history concepts and designed
                the overall user experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="font-semibold mb-3">Build</h3>
              <p className="text-gray-400">
                Developed the frontend, routing system,
                and project architecture from scratch.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="font-semibold mb-3">AI Integration</h3>
              <p className="text-gray-400">
                Learned and implemented AI APIs to generate
                immersive alternate-reality content.
              </p>
            </div>

          </div>

        </motion.section>
<section className="mb-16">
  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

    <h2 className="text-3xl font-bold mb-6">
      Biggest Takeaways
    </h2>

    <ul className="space-y-4 text-gray-400">

      <li>
        • Building real projects teaches faster than following tutorials.
      </li>

      <li>
        • AI integration is not just calling an API—it requires handling
        responses, failures, and user experience.
      </li>

      <li>
        • Clean architecture becomes increasingly important as a project grows.
      </li>

      <li>
        • Deployment and debugging are as important as writing code.
      </li>

      <li>
        • Product thinking matters just as much as technical implementation.
      </li>

    </ul>

  </div>
</section>

        {/* Learnings */}
        <motion.section
  className="mb-16"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
          <h2 className="text-3xl font-bold mb-8">
            What I Learned
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {learnings.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                {item}
              </div>
            ))}
          </div>

        </motion.section>
         {/* Technical decisions */}
<section className="mb-16">
  <h2 className="text-3xl font-bold mb-8">
    Technical Decisions
  </h2>

  <div className="space-y-6">

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="font-semibold mb-3">
        Why Next.js?
      </h3>

      <p className="text-gray-400">
        I chose Next.js for its routing system, scalability,
        and ability to organize growing applications cleanly.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="font-semibold mb-3">
        Why AI Integration?
      </h3>

      <p className="text-gray-400">
        The core experience depends on generating unique realities,
        making AI an essential part of the product rather than an
        additional feature.
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="font-semibold mb-3">
        Why Dynamic Pages?
      </h3>

      <p className="text-gray-400">
        Each generated reality needed its own identity and structure,
        so dynamic routing became an important architectural choice.
      </p>
    </div>

  </div>
</section>
        {/* Future Roadmap */}
        <motion.section
  className="mb-16"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold mb-6">
              Future Roadmap
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>• User Authentication</li>
              <li>• Save Generated Realities</li>
              <li>• Community Sharing</li>
              <li>• AI-Generated Images</li>
              <li>• Interactive Timelines</li>
              <li>• Reality Comparison Mode</li>
            </ul>

          </div>

        </motion.section>

      </div>
    </div>
  );
}

export default AltVerse;