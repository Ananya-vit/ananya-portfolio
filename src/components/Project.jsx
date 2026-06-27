import { motion } from "framer-motion";

const projects = [
  {
    title: "ReServe",
    description:
      "A food donation & redistribution platform connecting restaurants, supermarkets, NGOs, and volunteers to reduce food waste and support communities.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "/reserve",
    liveUrl: "https://reeserve.vercel.app/", 
    githubUrl: "https://github.com/Ananya-vit/ReServe", 
  },
  {
    title: "AltVerse",
    description:
      "A storytelling platform that blends immersive visuals, intuitive navigation, and polished UI to showcase my work and ideas.",
    tags: ["React", "Tailwind", "Animation"],
    href: "/altverse",
    liveUrl: "https://alt-verse.vercel.app",
    githubUrl: "https://github.com/Ananya-vit/AltVerse",
  },
  {
    title: "StudyFlow",
    description:
      "An AI-assisted learning platform designed to help students manage their workflow, build study habits, and learn smarter.",
    tags: ["React", "AI", "UX"],
    href: "/studyflow",
    liveUrl: "https://studyyflowai.vercel.app",
    githubUrl: "https://github.com/Ananya-vit/studyflow-ai",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio crafted to highlight projects, certifications, and technical skills with a polished dark/light theme.",
    tags: ["React", "Vite", "Tailwind"],
    href: "#overview",
    liveUrl: "#",
    githubUrl: "https://github.com/Ananya-vit", // Add your profile or repo link here
  },
];

function Project({ darkMode }) {
  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="text-sm uppercase tracking-[0.35em] font-semibold text-[#B8A89F]">
          Projects
        </p>
        <h2
          className={`mt-4 text-5xl md:text-6xl font-bold ${
            darkMode ? "text-white" : "text-[#1D1D1D]"
          }`}
        >
          Featured Work
        </h2>
        <p
          className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
            darkMode ? "text-gray-400" : "text-[#666]"
          }`}
        >
          Selected projects that demonstrate my focus on clean design,
          polished interactions, and practical problem solving.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.href}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`group block rounded-[32px] border p-8 transition-all duration-300 ${
              darkMode
                ? "bg-[#111111] border-[#222222] hover:border-[#B8A89F]"
                : "bg-white border-[#E7DED5] hover:border-[#B8A89F]"
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.35em] font-semibold text-[#B8A89F]">
                Featured
              </span>
              <span
                className={`text-xs font-semibold tracking-[0.25em] uppercase ${
                  darkMode ? "text-gray-400" : "text-[#777]"
                }`}
              >
                View
              </span>
            </div>

            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-[#111]"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`leading-relaxed mb-6 ${
                darkMode ? "text-gray-400" : "text-[#555]"
              }`}
            >
              {project.description}
            </p>

            {/* Live and GitHub Action Links Row */}
            <div className="mb-6 flex items-center gap-4">
              <a
                href={project.liveUrl}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-[#111] text-white hover:bg-gray-800"
                }`}
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                className={`text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-colors ${
                  darkMode
                    ? "border-[#222] text-gray-400 hover:text-white hover:bg-white/5"
                    : "border-[#E7DED5] text-[#555] hover:text-[#111] hover:bg-black/5"
                }`}
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-2 text-sm font-medium ${
                    darkMode
                      ? "bg-[#1E1E1E] text-gray-300"
                      : "bg-[#F4F1EC] text-[#555]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Project;