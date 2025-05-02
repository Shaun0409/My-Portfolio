
import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div id="contact" className="contact_page">
      <h2>Contact Me</h2>
      <p className="subtitle">Reach Out And Connect With Me</p>

      <form
        className="contact_form"
        action="https://formspree.io/f/mrbqbere"
        method="POST"
      >
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" type="text" placeholder="Phone Number" />
        <select name="service">
          <option value="">Service Of Interest</option>
          <option value="web">Web Design</option>
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
         <img src="/github.png" alt="GitHub" className="social_icon" />
        </a>

        <a href="https://www.linkedin.com/in/shaun-tshabalala-7ab5812b4/" target="_blank" rel="noopener noreferrer">
         <img src="linkedin.png" alt="LinkedIn" className="social_icon" />
        </a>

         <a href="https://www.facebook.com/share/14noTXwGN1/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="social_icon" />
         </a>

         <a href="https://instagram.com/shaun_draga_ii" target="_blank" rel="noopener noreferrer">
           <img src="/instagram.png" alt="Instagram" className="social_icon" />
         </a>

       </div>


        <div className="footer_contact">
          <p><i className="email"></i> Shaundraga4@gmail.com</p>
          <p><i className="phone"></i> +27 81 238 8795</p>
        </div>
        <p className="footer_bottom">Designed by @Shaun Software Developer</p>
      </footer>
    </div>
  );
};

export default ContactPage;
