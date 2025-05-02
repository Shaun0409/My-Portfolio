import React, { useRef } from 'react';
import './HomePage.css';
import AboutMe from './AboutMe';
import SkillsPage from './SkillsPage';
import ServicesPage from './ServicesPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';



const HomePage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <div className="navbar">
      <div className="logo">
  <span className="glow" style={{ animationDelay: '0s' }}>S</span>
  <span className="glow" style={{ animationDelay: '0.2s' }}>H</span>
  <span className="glow" style={{ animationDelay: '0.4s' }}>A</span>
  <span className="glow" style={{ animationDelay: '0.6s' }}>U</span>
  <span className="glow" style={{ animationDelay: '0.8s' }}>N</span>
  <span className="glow-heart" style={{ animationDelay: '1s' }}>👍</span>
</div>

        <ul className="nav_links">
          <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="active">Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About me</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(projectRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact me</li>
        </ul>
        
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <button className="hire_btn">Hire Me</button>
        </a>

      </div>

      
      <div className="main_content">
        <div className="text_section">

          <p className="greeting">Hi I am</p>
          <h2 className="name">Shaun Tshabalala</h2>
          <h1 className="title">Software Developer</h1>
          
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer">

        <button className="hire_me">Hire Me</button>
        </a>
        <a href="/Shaun_CV.docx" download>
        <button className="downloadcv">Download CV</button>
        </a>

        </div>


   <div className="social_icons">
           <a href="https://www.facebook.com/share/14noTXwGN1/">
              <img src="/facebook.png" alt="Facebook" />
           </a>

          <a href="https://instagram.com/shaun_draga_ii">
            <img src="/instagram.png" alt="Instagram" />
          </a>
    </div>

        </div>
        <div className="image_section">
          <img
            src="/profile.jpg" 
            alt="Profile"
            className="profile_image"
          />
        </div>
      </div>

      <div ref={aboutRef}>
        <AboutMe/>
      </div>

      <div ref={skillsRef}>
        <SkillsPage/>
      </div>

      <div ref={servicesRef}>
        <ServicesPage/>
      </div>

      <div ref={projectRef}>
        <ProjectsPage/>
      </div>

      <div ref={contactRef}>
        <ContactPage/>
      </div>

      
    </div>
  );
};

export default HomePage;
