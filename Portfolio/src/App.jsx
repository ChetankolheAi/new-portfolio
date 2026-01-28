import React from 'react';

import Projects from './Projects';
import Skills from './Skills';
import Header from './Header';
import Education from './Education';
import Contact from './Contact';
import Certification from './Certifications';
import ProblemSolving from './ProblemSolving';
import Navbar from './Navbar';

function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Cursor Layer (behind content) */}
 


      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <Skills />
        <ProblemSolving />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </div>

    </div>
  );
}

export default Home;
