import React from "react";
import { FaCertificate } from "react-icons/fa";

/* 🔹 Data – just add more objects here */
const certifications = [
  {
    title: "MERN Stack Development",
    description:
      "Completed hands-on training covering MongoDB, Express, React, and Node.js with real-world project experience.",
    issuer: "EY GDS / AICTE",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Strong foundation in problem-solving, algorithms, and data structures using C++.",
    issuer: "Code Help/Love Babbar",
  },
  {
    title:"NPTL Python For DataScience",
    description:
      "Gained hands-on experience in Python programming,visualization using libraries like NumPy, Pandas, and Matplotlib.",
    issuer: "NPTL",
  },
  {
    title:"Core Java DSA OS",
    description:
      'Completed comprehensive training in Core Java covering OOP concepts, exception handling, collections framework, multithreading basics, and JVM fundamentals',
    issuer: "Core 2 Web",
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
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certification;
