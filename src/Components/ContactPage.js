
import React from 'react';
import '../Styles/ContactPage.css';
import githubicon from '../Assets/github.png';
import linkedinicon from '../Assets/linkedin.jpeg';
import facebookicon from '../Assets/facebook.png';
import instagramicon from '../Assets/instagram.png';

const ContactPage = () => {
  return (
    <div id="contact" className="contact_page">
      <h2>Get In Touch</h2>
      <p className="subtitle">Let's discuss your next project or opportunity. I'm excited to collaborate!</p>

      <form
        className="contact_form"
        action="https://formspree.io/f/mrbqbere"
        method="POST"
      >
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" type="text" placeholder="Phone Number" />
        <select name="service">
          <option value="">Role of Interest</option>
          <option value="frontend">Frontend Developer</option>
          <option value="fullstack">Full-Stack Developer</option>
          <option value="intern">Internship/Entry-Level</option>
        </select>
        <input name="timeline" type="text" placeholder="Timeline" />
        <textarea name="details" placeholder="Project Details..." rows={5}></textarea>

        <button type="submit">Send</button>
      </form>

      <footer className="footer">
      
        <ul className="footer_links">
          
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

      

        <div className="footer_socials">
        <a href="https://github.com/Shaun0409" target="_blank" rel="noopener noreferrer">
         <img src={githubicon} alt="GitHub" className="social_icon" />
        </a>


        <a href="https://www.linkedin.com/in/shaun-tshabalala-7ab5812b4/" target="_blank" rel="noopener noreferrer">
         <img src={linkedinicon} alt="LinkedIn" className="social_icon" />
        </a>

         <a href="https://www.facebook.com/share/14noTXwGN1/" target="_blank" rel="noopener noreferrer">
          <img src={facebookicon} alt="Facebook" className="social_icon" />
         </a>

         <a href="https://instagram.com/shaun_draga_ii" target="_blank" rel="noopener noreferrer">
           <img src={instagramicon} alt="Instagram" className="social_icon" />
         </a>

       </div>


        <div className="footer_contact">
          <p className="footer-email">
            <i className="email"></i>
            <a href="mailto:Shaundraga4@gmail.com">Shaundraga4@gmail.com</a>
          </p>
          <p className="footer-phone">
            <i className="phone"></i>
            <a href="tel:+27812388795">+27 81 238 8795</a>
          </p>
        </div>
        <p className="footer_bottom">&copy; 2025 Shaun Tshabalala. Built with React. Open to opportunities.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
