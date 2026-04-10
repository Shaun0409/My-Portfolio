import React from 'react';
import '../Styles/SkillsPage.css';


const SkillsPage = () => {
  return (
    <div id="skills" className="skills-page">
      <h2 className="skills-title">SKILLS</h2>
      <p className="skills-subtitle">
        A showcase of my technical expertise, tools, and essential soft skills for building amazing things.
      </p>

      <div className="skills-container">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skill-bar">
            <span>React</span>
            <div className="progress" style={{width: '80%'}}></div>
          </div>
          <div className="skill-bar">
            <span>JavaScript</span>
            <div className="progress" style={{width: '75%'}}></div>
          </div>
          <div className="skill-bar">
            <span>HTML/CSS</span>
            <div className="progress" style={{width: '85%'}}></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Backend & Data</h3>
          <div className="skill-bar">
            <span>Python</span>
            <div className="progress" style={{width: '85%'}}></div>
          </div>
          <div className="skill-bar">
            <span>C#</span>
            <div className="progress" style={{width: '70%'}}></div>
          </div>
          <div className="skill-bar">
            <span>SQL</span>
            <div className="progress" style={{width: '75%'}}></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <div className="skill-bar">
            <span>Git/GitHub</span>
            <div className="progress" style={{width: '80%'}}></div>
          </div>
          <div className="skill-bar">
            <span>Figma</span>
            <div className="progress" style={{width: '70%'}}></div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Soft Skills</h3>
          <div className="skill-bar">
            <span>Problem Solving</span>
            <div className="progress" style={{width: '90%'}}></div>
          </div>
          <div className="skill-bar">
            <span>Agile/Teamwork</span>
            <div className="progress" style={{width: '85%'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
