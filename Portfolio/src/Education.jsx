import React from "react";

function Eduction() {
  return (
    <section id="education" className="py-4 bg-black/60 backdrop-blur-2xl text-white">
      <div className="max-w-6xl mx-auto px-6 gap-4">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-2">My Education</h2>
          <p className="text-gray-400 text-sm mb-10">
            My academic background and learning journey
            </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* BE */}
             <div
            className="mt-4 rounded-xl p-8
            bg-gradient-to-br from-rose-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-rose-500/60
            shadow-[0_8px_32px_rgba(168,85,247,0.25)]"
            >
            <h3 className="text-xl font-semibold mb-4">
              Bachelor of Engineering (Computer Engineering)
            </h3>
            <p className="text-gray-300"><span className="font-semibold">College:</span> Zeal College of Engineering & Research, Pune</p>
            <p className="text-gray-300"><span className="font-semibold">Year:</span> 2022 – 2026</p>
            <p className="text-gray-300"><span className="font-semibold">CGPA:</span> 8.79 (T.E – 6th Sem)</p>
          </div>

          {/* HSC */}
          <div
            className="mt-4 rounded-xl p-8
            bg-gradient-to-br from-teal-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-teal-500/60
            shadow-[0_8px_32px_rgba(168,85,247,0.25)]"
            >
            <h3 className="text-xl font-semibold mb-4">
              HSC (12th Science)
            </h3>
            <p className="text-gray-300"><span className="font-semibold">College:</span> P.O. Nahata College, Bhusawal</p>
            <p className="text-gray-300"><span className="font-semibold">Year:</span> 2020 – 2022</p>
            <p className="text-gray-300"><span className="font-semibold">Percentage:</span> 80.17%</p>
          </div>

          {/* SSC */}
          <div
            className="mt-4 rounded-xl p-8
            bg-gradient-to-br from-amber-600/30 via-black/40 to-black/60
            backdrop-blur-md
            border border-amber-500/60
            shadow-[0_8px_32px_rgba(168,85,247,0.25)]"
            >
            <h3 className="text-xl font-semibold mb-4">
              SSC (10th)
            </h3>
            <p className="text-gray-300"><span className="font-semibold">School:</span> Dr. Ulhas Patil CBSE School, Savda</p>
            <p className="text-gray-300"><span className="font-semibold">Year:</span> 2020</p>
            <p className="text-gray-300"><span className="font-semibold">Percentage:</span> 81.20%</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Eduction;
