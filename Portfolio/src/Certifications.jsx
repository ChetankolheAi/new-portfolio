import React from "react";
import { FaCertificate } from "react-icons/fa";
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
/* 🔹 Data – just add more objects here */
const certifications = [
  {
    title: "MERN Stack Development",
    description:
      "Completed hands-on training covering MongoDB, Express, React, and Node.js with real-world project experience.",
    issuer: "EY GDS / AICTE",
     live:"https://drive.google.com/file/d/1liOhz574MrP6m8_k1hHU6ww3yagpY3as/view?usp=sharing"
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Built a strong foundation in Data Structures and Algorithms through consistent practice and structured learning using C++ over a 1-year period.",
    issuer: "Code Help/Love Babbar",
     live:"https://drive.google.com/file/d/1CZDhXYd4eSmob9Ojlu40pOyfzjP6vqT0/view?usp=sharing"
  },
  {
    title:"Core Java DSA OS",
    description:
      'Completed comprehensive training in Core Java covering OOP concepts, exception handling, collections framework, multithreading basics, and JVM fundamentals',
    issuer: "Core 2 Web",
    live:"https://drive.google.com/file/d/1b1xjf0bP6YGry8Zpa5CeewVhbHHru9OH/view?usp=sharing"
  },
  {
    title:"Rubicon -Django Training Program",
    description:
     "Completed the Rubicon Django Training Program, gaining hands-on experience in building web applications using Django.",
    issuer: "Rubicon Foundation",
    live:"https://drive.google.com/file/d/1OsVbBPvNgsOXAleITsbnsvxLN4yTxDrn/view?usp=drive_link"
  },
  {
    title:"NPTL Python For DataScience",
    description:
    "Gained hands-on experience in Python programming,visualization using libraries like NumPy, Pandas, and Matplotlib.",
    issuer: "NPTL",
    live:"https://drive.google.com/file/d/1fpiWPRU1CaCd_xUEswGpNk6QZcNzpFaT/view?usp=sharing"
  },
  // 👉 Add more certifications here
];

const GlassCard = ({ children }) => (
  <div
    className="
      relative overflow-hidden
      rounded-xl p-6
      bg-black/60
      backdrop-blur-md
      border border-white/20
      hover:border-white/60
      transition-all duration-500 ease-in-out
    "
  >
    {/* Glass overlays */}
    <div className="pointer-events-none absolute inset-0
      bg-gradient-to-bl from-white/15 via-black/40 to-black/70
      transition-opacity duration-500 hover:opacity-0">
    </div>

    <div className="pointer-events-none absolute inset-0
      bg-gradient-to-tr from-white/15 via-black/40 to-black/70
      opacity-0 transition-opacity duration-500 hover:opacity-100">
    </div>

    <div className="relative z-10">{children}</div>
  </div>
);

function Certification() {
  return (
    <section id="Certifications" className="py-24 bg-black/60 backdrop-blur-2xl text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">Certifications</h2>
        <p className="text-gray-400 text-sm mb-12">
          Certifications that validate my technical skills
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <GlassCard key={index}>
              <div className="flex items-center gap-3 mb-4">
                <FaCertificate className="text-xl text-white/80" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {cert.description}
              </p>

              <p className="text-gray-400 text-sm">
                Issued by: <span className="text-white">{cert.issuer}</span>
              </p>
              {cert.live && (
              <a
                href={cert.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <ProjectButton>View Certificate</ProjectButton>
              </a>
            )}

            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certification;
