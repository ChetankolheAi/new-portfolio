import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

function VisitorCount() {
  const [count] = useState(() => {
    try {
      if (typeof window === "undefined") return 0;

      const stored = localStorage.getItem("site_visits");
      const visits = stored ? Number(stored) + 1 : 1;

      localStorage.setItem("site_visits", String(visits));
      return visits;
    } catch {
      return 0;
    }
  });

  return (
    <div
      className="
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        bg-black/60
        backdrop-blur-md
        border border-white/20
        text-sm text-gray-300
      "
    >
      <FaEye className="text-white/70" />
      <span>{count} visits</span>
    </div>
  );
}

export default VisitorCount;
