import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Reserve({ darkMode }) {
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
        ease: [0.16, 1, 0.3, 1], 
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
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Prisma ORM",
    "PostgreSQL",
    "Redis",
    "JWT",
    "ImageKit",
    "Resend",
    "Tailwind CSS",
    "REST API",
  ];

  const snapshots = [
    { label: "Project Type", value: "Full Stack Web Platform" },
    { label: "Built By", value: "ANANYA" },
    { label: "Current Stage", value: "Production Ready" },
    { label: "Focus", value: "Food Waste Reduction" },
  ];

  const coreBuilds = [
    {
      title: "Donation Management System",
      desc: "Designed a complete workflow allowing restaurants and food providers to create donations, upload images, manage food availability, and monitor donation history.",
    },
    {
      title: "Authentication & Security",
      desc: "Implemented JWT authentication, secure password hashing using bcrypt, role-based authorization, protected routes, and cookie-based session management.",
    },
    {
      title: "Backend Architecture",
      desc: "Developed scalable REST APIs using Express.js and Prisma ORM connected to PostgreSQL while integrating Redis caching for improved performance.",
    },
    {
      title: "Cloud Services",
      desc: "Integrated ImageKit for image uploads and Resend for automated email notifications, creating a production-ready cloud architecture.",
    },
  ];

  const journeyStages = [
    {
      stage: "Planning & Research",
      lessons: "Studied food waste problems, NGO workflows, and donation logistics before defining scalable system architecture.",
    },
    {
      stage: "Backend Development",
      lessons: "Built REST APIs, authentication, Prisma models, PostgreSQL schema, and cloud integrations.",
    },
    {
      stage: "Frontend Integration",
      lessons: "Connected APIs with React frontend while designing responsive dashboards and donation workflows.",
    },
  ];

  const techChallenges = [
    {
      title: "Authentication",
      desc: "Designing secure role-based access for Donors, NGOs, and administrators.",
    },
    {
      title: "Database Design",
      desc: "Creating efficient relational models for users, donations, organizations, and claims.",
    },
    {
      title: "Scalability",
      desc: "Optimizing API performance using Redis while maintaining clean service architecture.",
    },
    {
      title: "Cloud Integration",
      desc: "Handling image uploads, email notifications, and deployment securely.",
    },
  ];

  const architecturalNodes = [
    { phase: "User Interface", context: "Client Layer Interaction" },
    { phase: "React Frontend", context: "State Management & Responsive Dashboard" },
    { phase: "REST API", context: "Route Handlers & Ingestion Security" },
    { phase: "Express.js Server", context: "Application Engine Logic" },
    { phase: "Prisma ORM", context: "Type-safe Data Query Mapping" },
    { phase: "PostgreSQL Database", context: "Persistent Relational Datastore" },
    { phase: "Redis Cache", context: "High-speed Latency Reduction Layer" },
    { phase: "ImageKit", context: "Cloud Dynamic Asset Hosting" },
    { phase: "Resend Email Service", context: "Automated Transaction Notifications" },
  ];

  const engineeringDecisions = [
    {
      title: "Why Express.js?",
      reason: "To build a lightweight, scalable REST API with complete backend control.",
    },
    {
      title: "Why Prisma ORM?",
      reason: "Provides type-safe database access, excellent developer experience, and maintainable schema migrations.",
    },
    {
      title: "Why PostgreSQL?",
      reason: "Reliable relational database suitable for handling users, donations, organizations, and claim relationships.",
    },
    {
      title: "Why Redis?",
      reason: "Improves API responsiveness through caching while preparing the application for higher traffic.",
    },
  ];

  const modernLearnings = [
    "Full Stack Architecture",
    "REST API Design",
    "Authentication",
    "Role Based Access Control",
    "Database Modeling",
    "Prisma ORM",
    "Cloud Integrations",
    "Redis Caching",
    "Deployment",
    "Scalable Project Structure",
  ];

  const roadmapItems = [
    { metric: "Phase 1", title: "Real-time Donation Tracking", detail: "Implementing live WebSocket connections." },
    { metric: "Phase 1", title: "Location-based Matching", detail: "Enabling geographic distance queries for nearest pickup hubs." },
    { metric: "Phase 2", title: "Volunteer Assignment", detail: "Automating internal logistics delivery loops for nearby workers." },
    { metric: "Phase 2", title: "Push Notifications", detail: "Dispatching swift, immediate alert channels to active local NGOs." },
    { metric: "Phase 3", title: "Analytics Dashboard", detail: "Exposing graphical metrics summarizing total pounds of food salvaged." },
    { metric: "Phase 3", title: "AI-based Food Recommendation", detail: "Matching food types intelligently based on organization demand histories." },
    { metric: "Phase 4", title: "Predictive Food Waste Analytics", detail: "Forecasting surplus thresholds using historical seasonal metrics." },
    { metric: "Phase 4", title: "NGO Performance Dashboard", detail: "Persisting collection consistency rates across distributed target networks." },
  ];

  return (
    <div className={`min-h-screen font-sans antialiased relative overflow-x-hidden transition-colors duration-500 ${
      darkMode 
        ? "bg-[#090D1A] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200" 
        : "bg-[#FCFBF9] text-[#1D1D1D] selection:bg-cyan-500/20 selection:text-cyan-900"
    }`}>
      
      {/* Premium Ambient Background Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-20%] w-[600px] h-[600px] rounded-full blur-[160px] animate-pulse transition-opacity duration-500 ${
          darkMode ? "bg-cyan-500/10" : "bg-cyan-500/[0.04]"
        }`} style={{ animationDuration: '8s' }} />
        <div className={`absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[140px] animate-pulse transition-opacity duration-500 ${
          darkMode ? "bg-emerald-500/5" : "bg-emerald-500/[0.02]"
        }`} style={{ animationDuration: '12s' }} />
        <div className={`absolute top-[40%] right-[20%] w-[350px] h-[350px] rounded-full blur-[120px] transition-opacity duration-500 ${
          darkMode ? "bg-cyan-500/5" : "bg-cyan-500/[0.02]"
        }`} />
        {/* Subtle Grid Overlay */}
        <div className={`absolute inset-0 bg-[size:40px_40px] ${
          darkMode 
            ? "bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]" 
            : "bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)]"
        }`} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Back Navigation Bar */}
        <div className="mb-16 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className={`group px-4 py-2 text-sm rounded-xl border backdrop-blur-md transition-all duration-300 flex items-center gap-2 ${
              darkMode 
                ? "border-white/5 bg-white/[0.02] text-slate-300 hover:bg-white/[0.06] hover:border-white/10" 
                : "border-[#E7DED5] bg-white text-[#555] hover:bg-black/5 shadow-sm"
            }`}
          >
            <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
            Back to Case Studies
          </button>
          <div className={`h-px flex-1 ml-6 hidden sm:block ${darkMode ? "bg-gradient-to-r from-white/10 to-transparent" : "bg-gradient-to-r from-[#E7DED5] to-transparent"}`} />
        </div>

        {/* Hero Section */}
        <motion.section
          className="mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium tracking-wide mb-6 ${
            darkMode ? "border-cyan-500/30 bg-cyan-500/5 text-cyan-400" : "border-cyan-500/40 bg-cyan-500/[0.04] text-cyan-600 shadow-sm"
          }`}>
            <span className={`w-2 h-2 rounded-full animate-ping ${darkMode ? "bg-cyan-400" : "bg-cyan-500"}`} />
            Featured Project • Full Stack
          </div>

          <h1 className={`text-5xl md:text-8xl font-black tracking-tight ${
            darkMode 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400" 
              : "text-[#1D1D1D]"
          }`}>
            ReServe
          </h1>
          
          <h2 className={`text-xl md:text-3xl font-semibold tracking-wide mt-4 font-mono ${
            darkMode ? "text-cyan-400/90" : "text-cyan-600"
          }`}>
            Food Donation & Redistribution Platform
          </h2>

          <p className={`mt-8 text-lg md:text-xl leading-relaxed max-w-3xl ${
            darkMode ? "text-slate-400" : "text-[#444]"
          }`}>
            ReServe is a full-stack food donation and redistribution platform that connects restaurants, hostels, supermarkets, NGOs, and volunteers to reduce food waste by redistributing surplus food to people in need. The platform provides secure authentication, donation management, food claim workflows, organization onboarding, profile management, email notifications, cloud image uploads, and scalable backend APIs.
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2.5 mt-10 max-w-2xl">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all duration-300 ${
                  darkMode 
                    ? "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-cyan-500/40" 
                    : "bg-white border-[#E7DED5] text-[#555] hover:border-cyan-500/40 shadow-sm"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="https://reeserve.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:opacity-95 transform hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide flex items-center gap-2"
            >
              Live Demo <span className="font-sans">→</span>
            </a>

            <a
              href="https://github.com/Ananya-vit/ReServe"
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-3.5 rounded-xl border backdrop-blur-sm font-semibold hover:bg-slate-900/80 transition-all duration-200 text-sm flex items-center gap-2 ${
                darkMode 
                  ? "border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-700" 
                  : "border-[#E7DED5] bg-white text-[#555] hover:border-[#CFC4B9] shadow-sm"
              }`}
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
          className={`mb-24 rounded-3xl border p-8 md:p-10 backdrop-blur-md relative overflow-hidden group transition-all duration-300 ${
            darkMode 
              ? "border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-emerald-500/[0.03]" 
              : "border-cyan-500/30 bg-white shadow-sm"
          }`}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl group-hover:scale-110 transition-all duration-500 ${
            darkMode ? "bg-cyan-500/10 group-hover:bg-cyan-500/20" : "bg-cyan-500/[0.04]"
          }`} />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg border ${
                darkMode ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" : "bg-cyan-500/10 border-cyan-500/30 text-cyan-600"
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className={`font-bold uppercase sm:tracking-widest font-mono text-xs ${darkMode ? "text-white" : "text-[#333]"}`}>
                Key Flagship Achievement
              </h3>
            </div>
            <p className={`text-lg md:text-xl font-medium leading-relaxed ${darkMode ? "text-slate-200" : "text-[#1D1D1D]"}`}>
              Built and deployed a complete full-stack food redistribution infrastructure, solving deep data relationships across complex organizational nodes while handling live traffic spikes.
            </p>
            <div className={`w-full h-px my-6 ${darkMode ? "bg-gradient-to-r from-cyan-500/20 to-transparent" : "bg-gradient-to-r from-cyan-500/30 to-transparent"}`} />
            <p className={darkMode ? "text-slate-400" : "text-[#555]"}>
              Evolving the ecosystem to support location-aware caching structures, automatic geographical routing models, predictive storage allocations, and continuous verification tracking workflows.
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
                className={`rounded-2xl border p-5 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 ${
                  darkMode ? "border-slate-800/80 bg-slate-900/30" : "border-[#E7DED5] bg-white shadow-sm"
                }`}
              >
                <p className={`text-xs font-mono tracking-wider uppercase ${darkMode ? "text-slate-500" : "text-[#777]"}`}>{snap.label}</p>
                <h3 className={`text-base md:text-lg font-bold mt-3 tracking-tight ${darkMode ? "text-slate-200" : "text-[#1D1D1D]"}`}>
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
          <div className={`rounded-3xl border p-8 md:p-10 backdrop-blur-md relative overflow-hidden transition-all duration-300 ${
            darkMode ? "border-slate-800/80 bg-slate-900/20" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            <div className={`absolute top-0 left-0 w-full h-[2px] ${darkMode ? "bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" : "bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"}`} />
            <h2 className={`text-3xl font-bold tracking-tight mb-6 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
              Why This Project Matters
            </h2>
            <div className={`space-y-4 text-base md:text-lg leading-relaxed max-w-4xl ${darkMode ? "text-slate-400" : "text-[#444]"}`}>
              <p>
                While studying logistics channels, I discovered massive procedural bottlenecks separating excessive surplus food generators from the localized NGOs operating nearby.
              </p>
              <p>
                I wanted to architect an elastic platform capable of bridging these distinct environments through automated claim workflows, immediate validation feedback, and robust API endpoints.
              </p>
              <p className={`font-medium ${darkMode ? "text-slate-300" : "text-[#1D1D1D]"}`}>
                ReServe streamlines complex organizational handoffs to significantly mitigate structural waste at scale.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What I Built Section */}
        <motion.section className="mb-24">
          <h2 className={`text-3xl font-bold tracking-tight mb-8 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
            What I Built
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
                className={`rounded-2xl border p-6 backdrop-blur-sm transition-colors duration-300 flex flex-col justify-between ${
                  darkMode 
                    ? "bg-slate-900/30 border-slate-800 hover:border-cyan-500/30" 
                    : "bg-white border-[#E7DED5] hover:border-cyan-500/40 shadow-sm"
                }`}
              >
                <div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs mb-4 ${
                    darkMode ? "bg-cyan-500/5 border border-cyan-500/10 text-cyan-400" : "bg-cyan-500/10 border border-cyan-500/20 text-cyan-600"
                  }`}>
                    0{index + 1}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
                    {build.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-[#555]"}`}>
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
          <h2 className={`text-3xl font-bold tracking-tight mb-8 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
            Development Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {journeyStages.map((item, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl border p-6 backdrop-blur-sm relative transition-all duration-300 ${
                  darkMode 
                    ? "bg-gradient-to-b from-slate-900/50 to-slate-900/10 border-slate-800/80" 
                    : "bg-white border-[#E7DED5] shadow-sm"
                }`}
              >
                <div className={`absolute top-4 right-4 text-xs font-mono font-bold ${darkMode ? "text-slate-600" : "text-[#aaa]"}`}>STAGE 0{idx + 1}</div>
                <h3 className={`text-lg font-bold mb-4 border-b pb-2 ${
                  darkMode ? "text-cyan-400 border-slate-800" : "text-cyan-600 border-[#E7DED5]"
                }`}>
                  {item.stage}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-[#555]"}`}>
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
              <h2 className={`text-3xl font-bold tracking-tight ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
                Biggest Technical Challenges
              </h2>
              <p className={`text-sm mt-2 ${darkMode ? "text-slate-500" : "text-[#666]"}`}>Engineering road-blocks countered during system realization</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={cardHoverBehavior}
                className={`rounded-xl border p-5 backdrop-blur-sm transition-all duration-300 ${
                  darkMode ? "border-slate-800 bg-slate-900/20 hover:border-emerald-500/30" : "border-[#E7DED5] bg-white hover:border-emerald-500/40 shadow-sm"
                }`}
              >
                <div className={`w-1.5 h-6 rounded-full mb-3 ${darkMode ? "bg-emerald-500/40" : "bg-emerald-500/60"}`} />
                <h3 className={`font-bold text-base mb-2 ${darkMode ? "text-slate-200" : "text-[#1D1D1D]"}`}>
                  {challenge.title}
                </h3>
                <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-[#666]"}`}>
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
          <div className={`rounded-3xl border p-8 md:p-10 backdrop-blur-sm transition-all duration-300 ${
            darkMode ? "border-slate-800/80 bg-slate-900/10" : "border-[#E7DED5] bg-white shadow-sm"
          }`}>
            <h2 className={`text-3xl font-bold tracking-tight mb-2 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
              System Architecture
            </h2>
            <p className={`text-sm mb-10 ${darkMode ? "text-slate-500" : "text-[#666]"}`}>Data Pipeline flow map from validation ingestion to generation vectors</p>

            {/* Visual node layout workflow */}
            <div className="flex flex-col gap-3 max-w-xl mx-auto">
              {architecturalNodes.map((node, index) => (
                <React.Fragment key={index}>
                  <div className={`flex items-center justify-between p-4 rounded-xl border shadow-inner relative group transition-colors duration-300 ${
                    darkMode 
                      ? "border-slate-800/80 bg-slate-950/60 hover:border-cyan-500/20" 
                      : "border-[#E7DED5] bg-slate-50 hover:border-cyan-500/30"
                  }`}>
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs w-5 ${darkMode ? "text-slate-600" : "text-[#aaa]"}`}>0{index + 1}</span>
                      <span className={`text-sm font-semibold transition-colors ${
                        darkMode ? "text-slate-200 group-hover:text-cyan-400" : "text-[#333] group-hover:text-cyan-600"
                      }`}>
                        {node.phase}
                      </span>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded border ${
                      darkMode ? "text-slate-500 bg-slate-900 border-slate-800" : "text-[#666] bg-white border-[#E7DED5]"
                    }`}>
                      {node.context}
                    </span>
                  </div>
                  {index < architecturalNodes.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <svg className={`w-4 h-4 animate-pulse ${darkMode ? "text-cyan-500/30" : "text-cyan-500/50"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <h2 className={`text-3xl font-bold tracking-tight mb-8 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
            Technical Decisions & Rationale
          </h2>
          <div className="space-y-4">
            {engineeringDecisions.map((decision, index) => (
              <div 
                key={index}
                className={`rounded-2xl border p-6 md:p-8 backdrop-blur-sm transition-all duration-300 ${
                  darkMode ? "border-slate-800/80 bg-slate-900/20 hover:bg-slate-900/30" : "border-[#E7DED5] bg-white hover:border-[#CFC4B9] shadow-sm"
                }`}
              >
                <h3 className={`text-lg font-bold mb-2 flex items-center gap-2 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                  <span className={`w-1 h-1 rounded-full ${darkMode ? "bg-emerald-400" : "bg-emerald-600"}`} />
                  {decision.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-[#555]"}`}>
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
          <h2 className={`text-3xl font-bold tracking-tight mb-8 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
            What I Learned
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {modernLearnings.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, borderColor: darkMode ? "rgba(34,211,238,0.3)" : "rgba(14,116,144,0.4)" }}
                className={`rounded-xl border p-4 font-mono text-xs flex items-center justify-between group transition-all ${
                  darkMode ? "border-slate-800 bg-slate-900/40 text-slate-300" : "border-[#E7DED5] bg-white text-[#555] shadow-sm"
                }`}
              >
                <span>{item}</span>
                <span className={`transition-colors ${darkMode ? "text-cyan-500/40 group-hover:text-cyan-400" : "text-cyan-600/40 group-hover:text-cyan-600"}`}>✓</span>
              </motion.div>
            ))}
            <div className={`rounded-xl border border-dashed p-4 font-mono text-xs flex items-center justify-center ${
              darkMode ? "border-slate-800 text-slate-500" : "border-[#CFC4B9] text-[#888]"
            }`}>
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
          <div className={`rounded-3xl border p-8 md:p-10 backdrop-blur-md relative overflow-hidden transition-all duration-300 ${
            darkMode ? "border-emerald-500/20 bg-gradient-to-b from-slate-950 to-slate-900/40" : "border-emerald-500/30 bg-white shadow-sm"
          }`}>
            <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl ${darkMode ? "bg-emerald-500/10" : "bg-emerald-500/[0.04]"}`} />
            
            <h2 className={`text-3xl font-bold tracking-tight mb-2 ${darkMode ? "text-white" : "text-[#1D1D1D]"}`}>
              Future Production Roadmap
            </h2>
            <p className={`text-sm mb-8 ${darkMode ? "text-slate-500" : "text-[#666]"}`}>Architectural scaling steps for production delivery</p>

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
                  className={`p-4 rounded-xl border flex items-start gap-4 transition-all duration-300 ${
                    darkMode ? "border-slate-800 bg-slate-900/20" : "border-[#E7DED5] bg-slate-50 shadow-sm"
                  }`}
                >
                  <span className={`text-[10px] font-mono tracking-wider font-bold px-2 py-1 rounded mt-0.5 whitespace-nowrap ${
                    darkMode ? "bg-slate-800 text-slate-400" : "bg-[#E7DED5] text-[#555]"
                  }`}>
                    {item.metric}
                  </span>
                  <div>
                    <h4 className={`text-sm font-bold ${darkMode ? "text-slate-200" : "text-[#1D1D1D]"}`}>{item.title}</h4>
                    <p className={`text-xs mt-1 ${darkMode ? "text-slate-500" : "text-[#666]"}`}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Branding Area */}
        <footer className={`mt-32 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-4 ${
          darkMode ? "border-slate-900 text-slate-600" : "border-[#E7DED5] text-[#888]"
        }`}>
          <p>ReServe • Engineering Case Study Component</p>
          <p>© {new Date().getFullYear()} Ananya. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
}

export default Reserve;