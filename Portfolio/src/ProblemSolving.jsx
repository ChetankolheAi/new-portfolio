import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

function ProblemSolving() {
  const [stats, setStats] = useState({
    totalSolved: 224,
    easySolved: 118,
    mediumSolved: 93,
    hardSolved: 13,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/ChetanKolheAM")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalSolved) {
          setStats({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
          });
        }
        setLoading(false);
      })
      .catch(() => {
        // fallback – keep manual values
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-10 bg-black/60 backdrop-blur-2xl text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">Problem Solving</h2>
        <p className="text-gray-400 text-sm mb-12">
          Data Structures & Algorithms practice on LeetCode
        </p>

        {/* Card */}
        <div
          className="
            relative overflow-hidden
            rounded-xl p-8
            bg-black/60
            backdrop-blur-md
            border border-white/20
            hover:border-white/60
            transition-all duration-500
          "
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-black/40 to-black/70"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <SiLeetcode className="text-2xl text-white/80" />
                <h3 className="text-xl font-semibold">LeetCode</h3>
              </div>

              <p className="text-5xl font-bold">
                {loading ? "—" : stats.totalSolved}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Problems Solved
              </p>
            </div>

            {/* Middle */}
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex justify-between">
                  <span>Easy</span>
                  <span>{stats.easySolved}</span>
                </div>
                <div className="h-1 bg-white/10 rounded">
                  <div className="h-1 bg-white rounded w-[60%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Medium</span>
                  <span>{stats.mediumSolved}</span>
                </div>
                <div className="h-1 bg-white/10 rounded">
                  <div className="h-1 bg-white rounded w-[45%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Hard</span>
                  <span>{stats.hardSolved}</span>
                </div>
                <div className="h-1 bg-white/10 rounded">
                  <div className="h-1 bg-white rounded w-[20%]"></div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="md:text-right">
              <a
                href="https://leetcode.com/ChetanKolheAM"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block px-6 py-2 rounded-full
                  border border-white/30
                  hover:bg-white hover:text-black
                  transition
                "
              >
                View LeetCode Profile
              </a>
            </div>

          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          *Stats auto-fetched from LeetCode
        </p>

      </div>
    </section>
  );
}

export default ProblemSolving;
