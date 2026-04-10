import React from 'react';
import '../Styles/AboutMe.css';
import profile2Image from '../Assets/profile2.jpg';
import cvFile from '../Assets/Shaun_CV.pdf';



const AboutMe = () => {
  return (
    <div className="about_container">
      <h1 className="about_title">About Me</h1>
      <div className="about_content">
        <div className="about_image">
        <img
            src={profile2Image}
            alt="Profile"
            className="profile_image"
          />
        </div>
        <div className="about_text">
          <p>
            Final-year Diploma in Information Technology student transitioning to full-time Junior Software Developer. Gaining practical experience during 6-month IT internship at CVTS, building KPI dashboards (Python/Streamlit), React web apps, WhatsApp API integrations, and automation scripts that streamlined business operations.
          </p>
          <p>
            Passionate about creating scalable solutions with React, Python, C#, SQL. Strong in problem-solving, Agile collaboration, and deployment (Hetzner/Git). Eager to contribute to dynamic dev teams.
          </p>

          <h2>Download My CV</h2>
          <a href={cvFile} download className="download_cv">
            Download CV <span>📄</span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
