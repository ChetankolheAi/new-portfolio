import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaDatabase,
  FaFire,
  FaSearch,
  FaSort,
  FaBrain,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiSqlite, SiPostman ,SiNextdotjs  } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

/* Capsule Component */
const SkillPill = ({ icon, text }) => (
  <span className="flex items-center gap-2 px-4 py-2 rounded-full text-sm
    border border-gray-700 bg-[#0f0f0f] text-gray-200
    hover:border-gray-500 transition">
    {icon}
    {text}
  </span>
);

function Skills() {
  return (
    <section id="Skills" className="py-14 bg-black/60 backdrop-blur-2xl text-white ">
      <div className="max-w-6xl mx-auto px-6 pt-10">

        <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
        <p className="text-gray-400 text-sm mb-10">
        My core development stack
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Frontend */}
         <div
            className="mt-4 rounded-xl p-8
            bg-gradient-to-br from-purple-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-purple-500/60
            shadow-[0_8px_32px_rgba(168,85,247,0.25)]"
            >


            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={<FaHtml5 className="text-orange-500" />} text="HTML5" />
              <SkillPill icon={<FaCss3Alt className="text-blue-500" />} text="CSS" />
              <SkillPill icon={<FaJs className="text-yellow-400" />} text="JavaScript" />
              <SkillPill icon={<FaReact className="text-cyan-400" />} text="React" />
              <SkillPill icon={<SiTailwindcss className="text-cyan-300" />} text="Tailwind" />
            </div>
          </div>

                    {/* Backend */}
            <div className="mt-5 rounded-xl p-8
            bg-gradient-to-br from-cyan-600/30 to-black
            backdrop-blur-sm
            border border-cyan-500">


            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={<FaNodeJs className="text-green-500" />} text="Node.js" />
              <SkillPill icon={<FaPython className="text-yellow-400" />} text="Django" />
              {/* <SkillPill icon={<FaJava className="text-red-500" />} text="Spring Boot" /> */}
                  <SkillPill icon={<SiNextdotjs className="text-white" />} text="Next.js" />

            </div>
          </div>

          {/* Languages */}
            <div className="mt-5 rounded-xl p-8
            bg-gradient-to-br from-blue-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-blue-500/60
            shadow-[0_8px_32px_rgba(59,130,246,0.25)]">

            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={<VscCode />} text="C / C++" />
              <SkillPill icon={<FaPython className="text-yellow-400" />} text="Python" />
              <SkillPill icon={<FaJs className="text-yellow-400" />} text="JavaScript" />
              <SkillPill icon={<FaJava className="text-red-500" />} text="Core Java" />
            </div>
          </div>

          {/* Tools */}
            <div className="mt-5 rounded-xl p-8
            bg-gradient-to-br from-yellow-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-yellow-500/60
            shadow-[0_8px_32px_rgba(234,179,8,0.25)]">

            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={<FaGitAlt className="text-orange-500" />} text="Git" />
              <SkillPill icon={<FaGithub />} text="GitHub" />
              <SkillPill icon={<VscCode className="text-blue-400" />} text="VS Code" />
              <SkillPill icon={<SiPostman className="text-orange-400" />} text="Postman" />
              <SkillPill text="PhotoShop" />
            </div>
          </div>

          {/* Databases */}
            <div className="mt-5 rounded-xl p-8
            bg-gradient-to-br from-green-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-green-500/60
            shadow-[0_8px_32px_rgba(34,197,94,0.25)]">
            <h3 className="text-lg font-semibold mb-4">Databases</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={<SiMongodb className="text-green-500" />} text="MongoDB" />
              <SkillPill icon={<SiMysql className="text-blue-400" />} text="MySQL" />
              <SkillPill icon={<FaFire className="text-orange-500" />} text="Firebase" />
              <SkillPill icon={<SiSqlite className="text-gray-400" />} text="SQLite" />
            </div>
          </div>

          {/* DSA */}
       <div
        className="mt-4 rounded-xl p-8
        bg-gradient-to-br from-red-600/30 via-black/40 to-black/60
        backdrop-blur-md
        border border-red-500/60
        shadow-[0_8px_32px_rgba(168,85,247,0.25)]"
        >


            <h3 className="text-lg font-semibold mb-4">DSA (C++)</h3>
            <div className="flex flex-wrap gap-3">
              <SkillPill icon={<FaSort />} text="Sorting" />
              <SkillPill icon={<FaSearch />} text="Searching" />
              <SkillPill icon={<FaBrain className="text-purple-400" />} text="Dynamic Programming" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
