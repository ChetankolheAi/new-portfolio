import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#Home" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Certifications", href: "#Certifications" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/40 backdrop-blur-md
        border-b border-white/20
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-[24px] font-semibold tracking-wide text-white"
        >
          Chetan<span className="text-white/70 text-[20px] pl-1">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  text-gray-300
                  hover:text-white
                  transition
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            bg-black/60 backdrop-blur-md
            border-t border-white/20
          "
        >
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                  bg-white-500
                    block text-gray-300
                    hover:text-white
                    transition
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
