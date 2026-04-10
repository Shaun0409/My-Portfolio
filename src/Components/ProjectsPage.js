import React, { useState } from 'react';
import '../Styles/ProjectsPage.css';
import ProjectModal from './ProjectModal';

const placeholderImage = 'https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Project+Demo';

const allProjects = [
  {
    title: 'Executive Business Reporting Dashboard',
    category: 'Data Dashboard',
    description: 'Interactive KPI tracking dashboard integrating multi-source data for business reporting.',
    tech: 'Python, Streamlit, Synchroteam, SQL, APIs',
    images: ['/images/StreamlitHome.png', '/images/Streamlit.png']
  },
  {
    title: 'Document Automation System',
    category: 'Automation',
    description: 'Python automation for dynamic document generation with tag replacement.',
    tech: 'Python',
    images: ['/images/DocPlain.png', '/images/DocPlain.png']
  },
  {
    title: 'E-Learning Material',
    category: 'Website',
    description: 'Interactive eLearning module with dynamic slides and structured navigation for digital training.',
    tech: 'Python, JavaScript, HTML, CSS',
    images: ['/images/scorm home.png', '/images/scorm 1.png', '/images/scorm 2.png']
  },
  {
    title: 'WhatsApp API Integration',
    category: 'API Integration',
    description: 'Automated messaging workflows using Meta APIs.',
    tech: 'Python, Wix server, Meta API, Webhooks',
    images: ['/images/whatsapp 1.png', '/images/whatsapp 2.png']
  },
  {
    title: 'Geo Minerals Website',
    category: 'Website',
    description: 'Professional business website for mining company.',
    tech: 'HTML, CSS',
    images: ['/images/GeoHome.png', '/images/GeoAbout.png'],
    link: 'https://geominerals.co.za'
  },
  {
    title: 'Mineral Exco Website',
    category: 'Website',
    description: 'Professional business website for mining company.',
    tech: 'HTML, CSS',
    images: ['/images/ExcoHome.png', '/images/Exco1.png'],
    link: 'https://mineralexco.co.za'
  },
  {
    title: 'Portfolio Website',
    category: 'Website',
    description: 'Personal React developer portfolio with interactive features.',
    tech: 'React, Html, CSS',
    images: ['/images/HomePage.png', '/images/AboutPage.png', '/images/SkillsPage.png'],
    link: 'https://shaun-tshabalala-portfolio.netlify.app/'
  }
];

const categories = ['All', 'Website', 'Data Dashboard', 'Automation', 'API Integration'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter((project) => project.category === activeCategory);

  const getCurrentImage = (project) => project.images?.[0] || placeholderImage;

  return (
    <div id="projects" className="projects-page">
      <h2 className="projects-title">Featured Projects</h2>
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
        {filteredProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            {project.images && project.images.length > 0 ? (
              <div className="image-container">
                <img 
                  src={getCurrentImage(project)} 
                  alt={project.title} 
                  className="project-img"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
                <button 
                  className="see-more-overlay"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                >
                  See More
                </button>
              </div>
            ) : (
              <div className="no-image" style={{
                height: '200px',
                background: 'linear-gradient(45deg, #1a1a1a, #333)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px 16px 0 0'
              }}>
                <span style={{color: '#ff6b00'}}>No Preview</span>
              </div>
            )}
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech">Tech: {project.tech}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-github" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectsPage;
