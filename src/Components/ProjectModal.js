import React, { useState, useEffect } from 'react';
import '../Styles/ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev === project.images.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? project.images.length - 1 : prev - 1);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{project.title}</h2>
        <div className="modal-slider">
          <img 
            src={project.images[currentIndex]} 
            alt={`${project.title} ${currentIndex + 1}`}
            className="modal-image"
          />
          {project.images.length > 1 && (
            <>
              <button className="slider-prev" onClick={prevSlide}>‹</button>
              <button className="slider-next" onClick={nextSlide}>›</button>
              <div className="image-counter">
                {currentIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-tech">Tech Stack: {project.tech}</div>
        <div className="modal-links">
          {project.github && (
            <a href={project.github} className="modal-github" target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.link && (
            <a href={project.link} className="modal-demo" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

