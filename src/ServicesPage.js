// ServicesPage.js
import React from 'react';
import './ServicesPage.css';


const ServicesPage = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'I craft modern, responsive websites that are both visually appealing and user-friendly. From layouts to interactive elements, I ensure your online presence reflects your brand and engages your audience.',
      
    },
    {
      title: ' Desktop App Interfaces',
      description: 'With my knowledge of C#, I can design the interface and structure for Windows desktop applications.',
      
    },
    {
      title: 'Database Design & Integration',
      description: 'I design and manage SQL databases to store and retrieve data efficiently for websites and applications, ensuring scalability and performance.',
      
    },
  ];

  return (
    <div id="services" className="services-page">
      <h2 className="services-title">Services</h2>
      <p className="services-subtitle">What I offer:</p>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
