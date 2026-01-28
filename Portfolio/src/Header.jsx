import React from 'react'
import { IoArrowDownCircleSharp } from "react-icons/io5";


function Header() {
  return (
    <div>
        <section id='Home'>
        <div className="  pt-10 bg-black/60 backdrop-blur-2xl text-white px-6 md:px-16  ">
            <div className="max-w-6xl mx-auto pt-20 px-6 ">          
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left Content */}
                    <div className="space-y-4">
                            <h4 className="text-xl text-gray-400">
                            Hi, I’m <span className="text-white font-semibold">Chetan Kolhe</span>.
                            </h4>

                            <p className="text-3xl md:text-4xl font-bold">
                            Turning ideas into clean, scalable solutions.
                            </p>

                            <h5 className="text-gray-400 max-w-xl leading-relaxed">
                            I’m a self-motivated software developer with experience in
                            <span className="text-white font-medium"> MERN stack, PHP, and C++</span>.
                            I enjoy building scalable web apps and solving problems through code.
                            </h5>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-6">
                        <a
                        href="/Chetan_Kolhe_Resume.pdf"
                        download
                        className="px-6 py-2 flex items-center gap-2 rounded-full
                        bg-gradient-to-br from-white/20 via-white/10 to-white/5
                        backdrop-blur-md
                        border border-white/30
                        text-white
                        hover:bg-white hover:text-black
                        transition"
                        >
                        Download CV
                        <IoArrowDownCircleSharp size={32} />
                        </a>


                            
                        </div>

                                {/* Social Links */}
                        <div className="flex gap-6 text-xl mt-6">
                            <a
                                href="https://www.instagram.com/____chetan____10"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/chetankolhe1910"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>

                            <a
                                href="https://github.com/chetankolheAi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a
                                href="https://leetcode.com/YOUR_LEETCODE_USERNAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 transition"
                            >
                                <i className="fa-solid fa-code"></i>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </section>
    </div>
  )
}

export default Header