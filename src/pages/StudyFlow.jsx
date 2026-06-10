import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function StudyFlowAI() {
  const navigate = useNavigate();

  // Unified global animation configuration matching advanced Framer requirements
  const fadeUpVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium ease-out quad/cubic curve
      },
    },
  };

  const containerStaggerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardHoverBehavior = {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Groq API",
    "AI",
    "PDF Processing",
    "Vercel",
  ];

  const snapshots = [
    { label: "Project Type", value: "AI Learning Platform" },
    { label: "Built By", value: "ANANYA" },
    { label: "Current Stage", value: "MVP Live" },
    { label: "Focus", value: "AI + Education Technology" },
  ];

  const coreBuilds = [
    {
      title: "PDF Processing Pipeline",
      desc: "Built an isolated structural extraction workflow for preparing, parsing, and cleaning text content from unformatted or multi-column academic PDF documents.",
    },
    {
      title: "AI Generation System",
      desc: "Engineered strict system prompts and structured dynamic parsing flows to slice outputs into deterministic summaries, tokenized flashcards, quizzes, and formatted study notes.",
    },
    {
      title: "Frontend Architecture",
      desc: "Architected a reactive UI layer with scalable global state preservation, granular page layout trees, and contextual loading interfaces tailored for structural AI generations.",
    },
    {
      title: "Product Design",
      desc: "Mapped out user journeys from document drag-and-drop to dynamic generative outputs, reducing the cognitive load required to convert static resources into interactive hubs.",
    },
  ];

  const journeyStages = [
    {
      stage: "Research & Planning",
      lessons: "Analyzed standard PDF extraction bottlenecks, chunking limitations within text spaces, token context constraints, and standard study behaviors of university students.",
    },
    {
      stage: "MVP Development",
      lessons: "Validated the engineering loop by unifying single-file parsing setups, dynamic local state rendering paths, and clean layout handoffs over immediate execution blocks.",
    },
    {
      stage: "AI Integration & Iteration",
      lessons: "Optimized prompt engineering templates with strict custom JSONSchemas, variable response thresholds, and fallback parsing schemes to maintain structure across LLM drops.",
    },
  ];

  const techChallenges = [
    {
      title: "PDF Processing",
      desc: "Inconsistent extraction artifacts due to varying structural columns, integrated images, and character encoding schemes in academic papers.",
    },
    
    {
      title: "Scalability",
      desc: "Addressing processing limits, token window boundaries, and payload transmission dropouts when handling massive, textbook-length academic files.",
    },
    {
      title: "User Experience",
      desc: "Designing layout patterns that display heavily text-dense, multiform AI data streams (flashcards, notes, quizzes) without inducing information overload.",
    },
  ];

  const architecturalNodes = [
    { phase: "PDF Upload", context: "Client Input / File Validation" },
    { phase: "Content Extraction", context: "Text Chunking & Sanitization" },
    { phase: "AI Processing", context: "Groq LLM Inference Pipeline" },
    { phase: "Summary Generation", context: "High-density Conceptual Abstracts" },
    { phase: "Flashcards", context: "Q&A Syntactical Token Mapping" },
    { phase: "Quiz Creation", context: "Validation & Multi-choice Matrices" },
    { phase: "Study Notes", context: "Markdown Hierarchical Render" },
  ];

  const engineeringDecisions = [
    {
      title: "Why Next.js?",
      reason: "Chosen for its unified route structure, seamless multi-page layout engine, efficient API route integration, and optimal pre-rendering capabilities tailored for rich structural dashboards.",
    },
    {
      title: "Why Groq?",
      reason: "Leveraged for its exceptionally low latency inference speeds. Achieving sub-second LPU token outputs is critical when generating multi-part components simultaneously.",
    },
    {
      title: "Why an MVP-first approach?",
      reason: "Allowed live validation of the prompt engine and data-parsing layers against real-world user PDFs prior to scaling state storage, indexing, and multi-tenant logic.",
    },
  ];

  const modernLearnings = [
    "Document Processing",
    "AI Product Design",
    "User Experience Design",
    "Frontend Architecture",
    "Deployment Workflows",
    "Product Thinking",
    "Rapid MVP Development",
  ];

  const roadmapItems = [
    { metric: "Phase 1", title: "Embedding-Based Search", detail: "Implementing dynamic vector chunk extraction." },
    { metric: "Phase 1", title: "Vector Database Integration", detail: "Enabling long-term memory structures for user document vaults." },
    { metric: "Phase 2", title: "Knowledge Graph Generation", detail: "Visualizing cross-document conceptual connections automatically." },
    { metric: "Phase 2", title: "AI Study Planner", detail: "Synthesizing dynamic calendar events using performance metric trackers." },
    { metric: "Phase 3", title: "Learning Analytics Dashboard", detail: "Exposing visual insight tracking systems based on quiz accuracy loops." },
    { metric: "Phase 3", title: "Progress Tracking", detail: "Persisting historical micro-session completions over discrete user hubs." },
    { metric: "Phase 4", title: "Large Document Support", detail: "Configuring systematic recursive chunking maps over long books." },
    { metric: "Phase 4", title: "Personalized Learning Paths", detail: "Generating distinct content profiles adjusted to unique weak points." },
  ];

  return (
    <div className="min-h-screen bg-[#090D1A] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased relative overflow-x-hidden">
      
      {/* Premium Ambient Background Lighting (Excluding Purple) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[40%] right-[20%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[120px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Back Navigation Bar */}
        <div className="mb-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="group px-4 py-2 text-sm rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
            Back to Case Studies
          </button>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-6 hidden sm:block" />
        </div>

        {/* Hero Section */}
        <motion.section
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            MVP Live • Active Development
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            StudyFlow AI
          </h1>
          
          <h2 className="text-xl md:text-3xl font-semibold tracking-wide text-cyan-400/90 mt-4 font-mono">
            AI-Powered Learning Platform
          </h2>

          <p className="mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
            Built an AI-powered learning platform that transforms academic PDFs into summaries, 
            flashcards, quizzes, and structured study notes. Developed the MVP independently while 
            solving challenges related to PDF processing, prompt engineering, AI response quality, 
            and user experience design.
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2.5 mt-10 max-w-2xl">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-mono font-medium text-slate-300 hover:border-cyan-500/40 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="https://studyyflowai.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide flex items-center gap-2"
            >
              Live Demo <span className="font-sans">→</span>
            </a>

            <a
              href="https://github.com/Ananya-vit/studyflow-ai"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm text-slate-300 font-semibold hover:bg-slate-900/80 hover:border-slate-700 transition-all duration-200 text-sm flex items-center gap-2"
            >
              GitHub Repository
            </a>
          </div>
        </motion.section>

        {/* Key Achievement Section */}
        <motion.section
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="mb-24 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-emerald-500/[0.03] p-8 md:p-10 backdrop-blur-md relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white uppercase sm:tracking-widest font-mono text-sm">
                Key Flagship Achievement
              </h3>
            </div>
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed">
              Built and deployed a complete AI-powered learning platform independently, designing the 
              document-processing workflow, AI generation pipeline, and learning experience entirely from scratch.
            </p>
            <div className="w-full h-px bg-gradient-to-r from-cyan-500/20 to-transparent my-6" />
            <p className="text-slate-400 leading-relaxed">
              Currently evolving the foundational architecture into a highly scalable educational system built 
              on semantic search layers, context-aware embeddings, specialized vector database layouts, and personalized learning state models.
            </p>
          </div>
        </motion.section>

        {/* Project Snapshot Section */}
        <motion.section 
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {snapshots.map((snap, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 backdrop-blur-sm flex flex-col justify-between"
              >
                <p className="text-slate-500 text-xs font-mono tracking-wider uppercase">{snap.label}</p>
                <h3 className="text-base md:text-lg font-bold text-slate-200 mt-3 tracking-tight">
                  {snap.value}
                </h3>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why This Project Matters */}
        <motion.section 
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/20 p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
              Why This Project Matters
            </h2>
            <div className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed max-w-4xl">
              <p>
                While studying, I realized that students spend more time organizing information than actually learning it. 
                Long PDFs, scattered notes, and large volumes of academic content create friction in the learning process.
              </p>
              <p>
                I wanted to build a platform that could automatically transform dense study material into useful learning 
                resources and make studying more efficient. 
              </p>
              <p className="text-slate-300 font-medium">
                StudyFlow began as an isolated experimental MVP and is now actively evolving into an advanced AI-powered learning system.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What I Built From Scratch */}
        <motion.section className="mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            What I Built From Scratch
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerStaggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {coreBuilds.map((build, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={cardHoverBehavior}
                className="rounded-2xl bg-slate-900/30 border border-slate-800 p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-xs mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {build.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {build.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Development Journey */}
        <motion.section
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            Development Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {journeyStages.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-900/10 border border-slate-800/80 p-6 backdrop-blur-sm relative"
              >
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-600 font-bold">STAGE 0{idx + 1}</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-2">
                  {item.stage}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.lessons}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Biggest Challenges */}
        <motion.section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Biggest Technical Challenges
              </h2>
              <p className="text-slate-500 text-sm mt-2">Engineering road-blocks countered during system realization</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={cardHoverBehavior}
                className="rounded-xl border border-slate-800 bg-slate-900/20 p-5 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-1.5 h-6 bg-emerald-500/40 rounded-full mb-3" />
                <h3 className="font-bold text-slate-200 text-base mb-2">
                  {challenge.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {challenge.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MVP Architecture Flowchart Component */}
        <motion.section
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/10 p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
              MVP System Architecture
            </h2>
            <p className="text-slate-500 text-sm mb-10">Data Pipeline flow map from validation ingestion to generation vectors</p>

            {/* Visual node layout workflow */}
            <div className="flex flex-col gap-3 max-w-xl mx-auto">
              {architecturalNodes.map((node, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-950/60 shadow-inner relative group hover:border-cyan-500/20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-slate-600 w-5">0{index + 1}</span>
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {node.phase}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                      {node.context}
                    </span>
                  </div>
                  {index < architecturalNodes.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <svg className="w-4 h-4 text-cyan-500/30 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Technical Decisions */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            Technical Decisions & Rationale
          </h2>
          <div className="space-y-4">
            {engineeringDecisions.map((decision, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/20 p-6 md:p-8 backdrop-blur-sm hover:bg-slate-900/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  {decision.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {decision.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I Learned Grid */}
        <motion.section
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            What I Learned
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {modernLearnings.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.3)" }}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 font-mono text-xs text-slate-300 flex items-center justify-between group transition-all"
              >
                <span>{item}</span>
                <span className="text-cyan-500/40 group-hover:text-cyan-400 transition-colors">✓</span>
              </motion.div>
            ))}
            <div className="rounded-xl border border-dashed border-slate-800 p-4 font-mono text-xs text-slate-500 flex items-center justify-center">
              Continuous Iteration...
            </div>
          </div>
        </motion.section>

        {/* Future Roadmap Section */}
        <motion.section
          className="mb-16"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-slate-950 to-slate-900/40 p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
              Future Production Roadmap
            </h2>
            <p className="text-slate-500 text-sm mb-8">Architectural scaling steps for production delivery</p>

            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={containerStaggerVariant}
              initial="hidden"
              whileInView="visible"
            >
              {roadmapItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUpVariant}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-900/20 flex items-start gap-4"
                >
                  <span className="text-[10px] font-mono tracking-wider font-bold bg-slate-800 px-2 py-1 rounded text-slate-400 mt-0.5 whitespace-nowrap">
                    {item.metric}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Branding Area */}
        <footer className="mt-32 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-600 gap-4">
          <p>StudyFlow AI • Engineering Case Study Component</p>
          <p>© {new Date().getFullYear()} Ananya. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default StudyFlowAI;