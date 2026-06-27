import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AltVerse({ darkMode }) {
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
    <div className={`min-h-screen transition-colors duration-500 relative ${
      darkMode ? "bg-[#111111] text-white" : "bg-[#FCFBF9] text-[#1D1D1D]"
    }`}>

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl transition-opacity ${
          darkMode ? "bg-purple-500/10" : "bg-purple-500/5"
        }`} />
        <div className={`absolute bottom-20 right-20 w-72 h-72 rounded-full blur-3xl transition-opacity ${
          darkMode ? "bg-blue-500/10" : "bg-blue-500/5"
        }`} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className={`mb-10 px-4 py-2 rounded-xl border transition-all ${
            darkMode 
              ? "border-white/10 text-gray-300 hover:bg-white/5" 
              : "border-[#E7DED5] text-[#555] hover:bg-black/5"
          }`}
        >
          ← Back to Portfolio
        </button>

        {/* Key Achievement */}
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
          className={`mt-12 rounded-3xl border p-8 transition-all duration-300 ${
            darkMode 
              ? "border-purple-500/20 bg-purple-500/5" 
              : "border-purple-500/30 bg-purple-500/[0.03] shadow-sm"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">
            Key Achievement
          </h3>
          <p className={darkMode ? "text-gray-300" : "text-[#444]"}>
            Built and deployed a complete AI-powered web application independently
            while learning AI integration, routing architecture, deployment workflows,
            and modern frontend engineering throughout the development process.
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="mb-24 mt-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <span className={`px-4 py-2 rounded-full border text-sm font-medium ${
            darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            Featured Project
          </span>

          <h1 className="text-6xl md:text-8xl font-bold mt-8 tracking-tight">
            AltVerse
          </h1>

          <p className={`text-2xl mt-6 max-w-3xl leading-relaxed ${
            darkMode ? "text-gray-400" : "text-[#555]"
          }`}>
            A full-stack web application that generates immersive
            alternate-history worlds through AI-powered content generation.
          </p>

          <p className={`mt-6 text-lg max-w-2xl ${
            darkMode ? "text-gray-500" : "text-[#777]"
          }`}>
            Built independently to explore AI integration,
            modern web development, and product engineering.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  darkMode 
                    ? "bg-white/5 border-white/10 text-gray-300" 
                    : "bg-white border-[#E7DED5] text-[#555] shadow-sm"
                }`}
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
              className={`px-6 py-3 rounded-xl font-semibold transition-transform hover:scale-[1.02] ${
                darkMode ? "bg-white text-black" : "bg-[#1D1D1D] text-white"
              }`}
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ananya-vit/AltVerse"
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-3 rounded-xl border transition-all ${
                darkMode 
                  ? "border-white/10 text-gray-300 hover:bg-white/5" 
                  : "border-[#E7DED5] text-[#555] hover:bg-black/5"
              }`}
            >
              GitHub
            </a>
          </div>
        </motion.section>

        {/* Details Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Project Type", val: "AI Web Application" },
              { label: "Built By", val: "Solo Developer" },
              { label: "Deployment", val: "Vercel" },
              { label: "Focus", val: "AI Integration" }
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-6 transition-all duration-300 ${
                darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
              }`}>
                <p className={`text-sm font-medium ${darkMode ? "text-gray-500" : "text-[#777]"}`}>{item.label}</p>
                <h3 className="text-xl font-semibold mt-2">{item.val}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Project Matters */}
        <section className="mb-16">
          <div className={`rounded-3xl border p-8 transition-all duration-300 ${
            darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            <h2 className="text-3xl font-bold mb-6">
              Why This Project Matters
            </h2>
            <p className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-[#555]"}`}>
              AltVerse was more than a portfolio project. It was my first experience
              taking an idea from concept to deployment while learning new technologies
              along the way.
            </p>
            <p className={`leading-relaxed mt-4 ${darkMode ? "text-gray-400" : "text-[#555]"}`}>
              I built the entire application independently, from designing the user
              experience and frontend architecture to integrating AI capabilities and
              deploying the final product.
            </p>
          </div>
        </section>

        {/* What I Built From Scratch */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            What I Built From Scratch
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Frontend Architecture", desc: "Designed reusable React components, routing structure, responsive layouts, and UI interactions." },
              { title: "AI Integration", desc: "Learned how to connect AI services, process responses, and generate meaningful content dynamically." },
              { title: "Deployment", desc: "Configured deployment pipelines and published the application on Vercel." },
              { title: "Product Design", desc: "Designed the complete user journey from entering a prompt to exploring generated realities." }
            ].map((box, i) => (
              <div key={i} className={`rounded-2xl border p-6 transition-all duration-300 ${
                darkMode ? "bg-white/5 border-white/10" : "bg-white border-[#E7DED5] shadow-sm"
              }`}>
                <h3 className="font-semibold text-lg mb-3">{box.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-[#666]"}>{box.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why I Built AltVerse */}
        <motion.section
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={`rounded-3xl border p-8 transition-all duration-300 ${
            darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            <h2 className="text-3xl font-bold mb-6">
              Why I Built AltVerse
            </h2>
            <p className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-[#555]"}`}>
              I wanted to build something beyond a traditional AI chatbot.
              The idea was to create a platform where users could explore
              alternate realities, historical divergences, and fictional
              timelines through AI-generated world building.
            </p>
            <p className={`leading-relaxed mt-4 ${darkMode ? "text-gray-400" : "text-[#555]"}`}>
              AltVerse became an opportunity to challenge myself,
              learn AI integration from scratch, and build a complete
              production-ready application independently.
            </p>
          </div>
        </motion.section>

        {/* Development Journey */}
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
            {[
              { title: "Research", desc: "Explored alternate-history concepts and designed the overall user experience." },
              { title: "Build", desc: "Developed the frontend, routing system, and project architecture from scratch." },
              { title: "AI Integration", desc: "Learned and implemented AI APIs to generate immersive alternate-reality content." }
            ].map((step, i) => (
              <div key={i} className={`rounded-2xl border p-6 transition-all duration-300 ${
                darkMode ? "bg-white/5 border-white/10" : "bg-white border-[#E7DED5] shadow-sm"
              }`}>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-[#666]"}>{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Biggest Takeaways */}
        <section className="mb-16">
          <div className={`rounded-3xl border p-8 transition-all duration-300 ${
            darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            <h2 className="text-3xl font-bold mb-6">
              Biggest Takeaways
            </h2>
            <ul className={`space-y-4 font-medium ${darkMode ? "text-gray-400" : "text-[#555]"}`}>
              <li>• Building real projects teaches faster than following tutorials.</li>
              <li>• AI integration is not just calling an API—it requires handling responses, failures, and user experience.</li>
              <li>• Clean architecture becomes increasingly important as a project grows.</li>
              <li>• Deployment and debugging are as important as writing code.</li>
              <li>• Product thinking matters just as much as technical implementation.</li>
            </ul>
          </div>
        </section>

        {/* What I Learned */}
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
                className={`rounded-2xl border p-5 transition-all duration-300 ${
                  darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Decisions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Technical Decisions
          </h2>
          <div className="space-y-6">
            {[
              { title: "Why Next.js?", desc: "I chose Next.js for its routing system, scalability, and ability to organize growing applications cleanly." },
              { title: "Why AI Integration?", desc: "The core experience depends on generating unique realities, making AI an essential part of the product rather than an additional feature." },
              { title: "Why Dynamic Pages?", desc: "Each generated reality needed its own identity and structure, so dynamic routing became an important architectural choice." }
            ].map((decision, i) => (
              <div key={i} className={`rounded-2xl border p-6 transition-all duration-300 ${
                darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
              }`}>
                <h3 className="font-semibold text-lg mb-3">{decision.title}</h3>
                <p className={darkMode ? "text-gray-400" : "text-[#666]"}>{decision.desc}</p>
              </div>
            ))}
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
          <div className={`rounded-3xl border p-8 transition-all duration-300 ${
            darkMode ? "border-white/10 bg-white/5" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            <h2 className="text-3xl font-bold mb-6">
              Future Roadmap
            </h2>
            <ul className={`space-y-3 font-medium ${darkMode ? "text-gray-400" : "text-[#555]"}`}>
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