import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Project'
import Contact from './Components/Contact'
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home" data-aos="fade-up">
          <Home />
        </div>
        <div id="education" data-aos="fade-left">
          <Education />
        </div>
        <div id="skills" data-aos="fade-right" style={{ textAlign: "left" }}>
          <Skills />
        </div>
        <div id="project" data-aos="zoom-in" style={{ textAlign: "left" }}>
          <Projects />
        </div>
        <div id="contact" data-aos="zoom-in-up">
          <Contact />
        </div>

        {/* Floating background */}
        <div className="floating-container">
          <div className="floating f1"></div>
          <div className="floating f2"></div>
          <div className="floating f3"></div>
          <div className="floating f4"></div>
          <div className="floating f5"></div>
          <div className="floating f6"></div>
          <div className="floating f7"></div>
          <div className="floating f8"></div>
          <div className="floating f9"></div>
          <div className="floating f10"></div>
        </div>
      </div>
    </>
  );
}

export default App;