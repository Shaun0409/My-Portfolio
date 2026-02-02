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
            I started coding in 2022 when I saw how tech affects our daily lives.
            I've learned to build easy-to-use websites with HTML, CSS, JavaScript,
            and React. I enjoy solving problems and learning new things in coding.  
            I am excited to keep growing my skills and create more projects. 
            Coding helps me turn ideas into reality. 
          </p>

          <h2>Take a look at my Cv👇</h2>
          

          <button className="download_btn">        
          <a href={cvFile} download className="download_cv">Download Cv</a>
          </button>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
