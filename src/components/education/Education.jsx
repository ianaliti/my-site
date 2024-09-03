import React from 'react';
import './Education.css';
import { Link } from 'react-router-dom';

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-content">
        <h2>Education & Certifications</h2>
        <p>
          I am currently enrolled in the <strong>Développeur d'application JavaScript React</strong> path on OpenClassrooms.
          This path equips me with the essential skills to build modern web applications using JavaScript and React.js.
        </p>
        <div className="course-list">
          <div className="course-item">
            <h3><Link to="/project-one">Prenez en main votre formation front-end</Link></h3>
            <p>An introductory course to front-end development...</p>
          </div>
          <div className="course-item">
            <h3><Link to="/project-two">Créez la page d’accueil d’une agence de voyage avec HTML & CSS</Link></h3>
            <p>Learned how to structure and style web pages using HTML and CSS...</p>
          </div>
          <div className="course-item">
            <h3><Link to="/project-three">Dynamisez une page web avec des animations CSS</Link></h3>
            <p>Focused on enhancing user experience through CSS animations...</p>
          </div>
          <div className="course-item">
            <h3><Link to="/project-four">Créez une landing page avec Javascript</Link></h3>
            <p>Developed a dynamic and responsive landing page using JavaScript...</p>
          </div>
          {/* Add more course items and links as needed */}
        </div>
      </div>
    </section>
  );
}

export default Education;
