import React, { useRef } from 'react';
import '../Styles/HomePage.css';
import AboutMe from '../Components/AboutMe';
import SkillsPage from '../Components/SkillsPage';
import ServicesPage from '../Components/ServicesPage';
import ProjectsPage from '../Components/ProjectsPage';
import ContactPage from '../Components/ContactPage';
import profile2Image from '../Assets/profile2.jpg';
import facebookIcon from '../Assets/facebook.png';
import instagramIcon from '../Assets/instagram.png';
import cvFile from '../Assets/Shaun_CV.pdf';




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
      <div className="navbar">
      <div className="logo">
  <span className="glow" style={{ animationDelay: '0s' }}>S</span>
  <span className="glow" style={{ animationDelay: '0.2s' }}>H</span>
  <span className="glow" style={{ animationDelay: '0.4s' }}>A</span>
  <span className="glow" style={{ animationDelay: '0.6s' }}>U</span>
  <span className="glow" style={{ animationDelay: '0.8s' }}>N</span>
  <span className="glow-emoji" style={{ animationDelay: '1s' }}>👍</span>
</div>

        <ul className="nav_links">
          <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="active">Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About me</li>
          <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(projectRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact me</li>
        </ul>
        
        <a href="https://www.linkedin.com/in/shaun-tshabalala-7ab5812b4" target="_blank" rel="noopener noreferrer">
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
              href="https://www.linkedin.com/in/shaun-tshabalala-7ab5812b4"
              target="_blank"
              rel="noopener noreferrer">

        <button className="hire_me">Hire Me</button>
        </a>
        <a href={cvFile} download>
        <button className="downloadcv">Download CV</button>
        </a>

        </div>


   <div className="social_icons">
           <a href="https://www.facebook.com/share/14noTXwGN1/">
              <img src={facebookIcon} alt="Facebook" />
           </a>

          <a href="https://instagram.com/shaun_draga_ii">
            <img src={instagramIcon} alt="Instagram" />
          </a>
    </div>

        </div>
        <div className="image_section">
          <img
            src={profile2Image} alt="Profile"
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
