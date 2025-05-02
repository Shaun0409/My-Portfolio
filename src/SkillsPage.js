// SkillsPage.js
import React from 'react';
import './SkillsPage.css';

const SkillsPage = () => {
  return (
    <div id="skills" className="skills-page">
      <h2 className="skills-title">SKILLS</h2>
      <p className="skills-subtitle">
        A showcase of my technical expertise, tools, and essential soft skills for building amazing things.
      </p>

      <div className="skills-container">
        <div className="skills-card">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML - Intermediate</li>
            <li>CSS - Intermediate</li>
            <li>JavaScript - Intermediate</li>
            <li>React - Basic</li>
            <li>C# - Intermediate</li>
            <li>SQL - Intermediate</li>
            <li>Figma - Good</li>
          </ul>
        </div>

        <div className="skills-arrow">⇄</div>

        <div className="skills-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication - Good</li>
            <li>Teamwork - Proficient</li>
            <li>Adaptability - High</li>
            <li>Time Management - Strong</li>
            <li>Critical Thinking - Advanced</li>
            <li>Empathy - High</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
