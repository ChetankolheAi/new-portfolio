import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaTwitter 
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdMessage } from "react-icons/md";

function Contact() {
  return (
<section id="Contact" className="py-7 bg-black/60 backdrop-blur-2xl text-white pb-15">
      <div className="max-w-6xl mx-auto px-6">

     
          
          <h2 className=" flex flex-col text-3xl font-bold mb-3">Contact Me</h2>
          <p className="text-gray-400 text-sm mb-10">
            Let’s connect and build something together
            </p>

        

        {/* Contact Icons */}
        <div className="flex flex-wrap gap-4">

          {/* Instagram */}
         <a
            href="https://www.instagram.com/____chetan____10"
            target="_blank"
            rel="noopener noreferrer"
            className="
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                backdrop-blur-md
                border border-white/30
                text-white
                hover:bg-white hover:text-black
                hover:scale-110
                transition
            "
            >
            <FaInstagram size={32} />
            </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chetankolhe1910"
            target="_blank"
            rel="noopener noreferrer"
            className="
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                backdrop-blur-md
                border border-white/30
                text-white
                hover:bg-white hover:text-black
                hover:scale-110
                transition
            "
            >
            <FaLinkedinIn size={34} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/chetankolheAi"
            target="_blank"
            rel="noopener noreferrer"
            className="
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                backdrop-blur-md
                border border-white/30
                text-white
                hover:bg-white hover:text-black
                hover:scale-110
                transition
            "
            >
          
            <FaGithub size={34} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/ChetanKolheAM"
            target="_blank"
            rel="noopener noreferrer"
            className="
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                backdrop-blur-md
                border border-white/30
                text-white
                hover:bg-white hover:text-black
                hover:scale-110
                transition
            "
            >
            <SiLeetcode size={34} />
          </a>

          {/* Gmail */}
          <a
            href="mailto:chetankolhe1910@gmail.com"
            className="
                w-16 h-16
                flex items-center justify-center
                rounded-full
                bg-gradient-to-br from-white/20 via-white/10 to-white/5
                backdrop-blur-md
                border border-white/30
                text-white
                hover:bg-white hover:text-black
                hover:scale-110
                transition
            "
            >
            <FaEnvelope size={34} />
          </a>
           {/* Twitter / X */}
          <a
            href="https://x.com/Chetankolh73251"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-gradient-to-br from-white/20 via-white/10 to-white/5
              backdrop-blur-md
              border border-white/30
              text-white
              hover:bg-white hover:text-black
              hover:scale-110
              transition
            "
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
