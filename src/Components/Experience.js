import React from 'react';
import '../Styles/Experience.css';

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-card">
        <h3>IT Intern – Software & Systems Development</h3>
        <p className="company">CVTS (In-Service Training) | Jan 2026 – Present</p>
        <ul className="experience-bullets">
          <li>Developed KPI-driven dashboards using Python and Streamlit, integrating multi-source data for real-time reporting.</li>
          <li>Built responsive web applications with React, HTML, CSS, enhancing operational workflows.</li>
          <li>Implemented WhatsApp API integrations (Meta) for automated messaging.</li>
          <li>Created Python automation scripts for documents, reducing manual processing by 80%.</li>
          <li>Deployed apps with DNS on Hetzner/Domains.co.za; collaborated in Agile with Git/GitHub.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

