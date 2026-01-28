import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectButton = ({ children }) => (
  <button
    className="
      px-5 py-2 rounded-full
      bg-gradient-to-br from-white/20 via-white/10 to-white/5
      backdrop-blur-md
      border border-white/30
      text-white text-sm
      hover:bg-white hover:text-black
      transition
    "
  >
    {children}
  </button>
);

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "ByteGuru, AI-Powered Coding Assistant",
      tech: "MERN Stack",
      img: "/ByteGuru.png",
      desc:
        "Built an AI-driven learning platform featuring interactive DSA visualizations, on-demand test generation,and intelligent score analysis. Integrated the Gemini API for code analysis, explanations, and personalized question generation with secure authentication, progress tracking, and dynamic performance graphs using Recharts",
      github: "https://github.com/ChetankolheAi/Byteguru.git",
      live: "https://byteguru10.netlify.app",
    },
    {
      title: "FinSyncy",
      tech: "MERN Stack",
      img: "/finSyncy.png",
      desc:
        "FinSyncy is a personal expense management application that helps users track daily expenses, categorize them monthly, and analyze spending patterns. Implemented MongoDB for data persistence and built RESTful APIs using Express with role-based control. Developed a full-stack expense tracking application with real-time filtering and secure JWT-based authentication",
      github: "https://github.com/ChetankolheAi/Personal-Expense-Manager-MERN-Project",
      live: "https://expensemanger-bp1g.onrender.com/",
    },
    {
      title: "Static Cab Service Website",
      tech: "HTML • CSS • JavaScript",
      img: "/SS.png",
      desc:
        "A responsive static website for an online cab booking service, focused on clean UI design and cross-device compatibility.",
      github: "https://github.com/ChetankolheAi/SSTaxi_wesite",
    },
    {
      title: "SmartGalaxy",
      tech: "PHP • MySQL",
      img: "/smartGalaxy2.png",
      desc:
        "SmartGalaxy is an e-commerce web application for mobile shops, enabling users to browse products and securely place orders.",
      github: "https://github.com/ChetankolheAi/SmartGalaxy---Mobile-Shop-E-Commerce-Website",
    },
    {
      title: "SafarSathi",
      tech: "JavaFX",
      img: "/SafarSathi.png",
      desc:
        "SafarSathi is a desktop-based travel assistant application with real-time guide availability and Firestore integration.",
      github: "https://gitlab.com/chetankolheai-group/superx_safarsathi1.git",
      gitlab: true,
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="Projects" className="py-24 bg-black/60 backdrop-blur-2xl text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400 text-sm mb-12">
          A showcase of projects I’ve built and worked on
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
            className="
            rounded-xl p-6
            bg-gradient-to-bl from-white/15 via-black/40 to-black/70
            hover:bg-gradient-to-tr
            backdrop-blur-md
            border border-white/20
            
            hover:-translate-y-1
            hover:shadow-[0_-6px_20px_rgba(255,255,255,0.12)]
            transition-all duration-500 ease-in-out
            "







            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover rounded-xl border border-white/20"
              />

              <h3 className="text-xl font-semibold mt-5">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectButton>
                    <FaGithub className="inline mr-2" />
                    {project.gitlab ? "GitLab" : "GitHub"}
                  </ProjectButton>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectButton>
                      <FaExternalLinkAlt className="inline mr-2" />
                      Live
                    </ProjectButton>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              px-6 py-2 rounded-full
              border border-white/40
              text-white
              hover:bg-white hover:text-black
              transition
            "
          >
            {showAll ? "Show Less" : "See All Projects"}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Projects;
