import React, { useState } from 'react';
import '../Styles/ProjectsPage.css';

const allProjects = [
  {
    title: 'My Portfolio',
    category: 'Website Design',
    images: ['/HomePage.png', '/AboutPage.png', '/SkillsPage.png'],
    link: 'https://shaun-tshabalala-portfolio.netlify.app/',
  },
  
  
];

const categories = ['All', 'Website Design', 'App Mobile Design'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState({});

  const filteredProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  const handleNextSlide = (projectTitle) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [projectTitle]: ((prev[projectTitle] || 0) + 1) % allProjects.find(p => p.title === projectTitle).images.length
    }));
  };

  const handlePrevSlide = (projectTitle) => {
    setCurrentSlide((prev) => {
      const project = allProjects.find(p => p.title === projectTitle);
      const max = project.images.length;
      return {
        ...prev,
        [projectTitle]: (prev[projectTitle] || 0) === 0 ? max - 1 : (prev[projectTitle] - 1) % max
      };
    });
  };

  return (
    <div id="projects" className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => {
          const currentImgIndex = currentSlide[project.title] || 0;
          return (
            <div className="project-card" key={idx}>
              <div className="slider">
                <button className="prev-btn" onClick={() => handlePrevSlide(project.title)}>&lt;</button>
                <img src={project.images[currentImgIndex]} alt={project.title} className="project-img" />
                <button className="next-btn" onClick={() => handleNextSlide(project.title)}>&gt;</button>
              </div>
              <div className="project-info">
                <p className="project-title">{project.title}</p>
                <p className="project-category">{project.category}</p>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Go to site</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
