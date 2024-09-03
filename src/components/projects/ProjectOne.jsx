import React from 'react';
import './ProjectOne.css';

function ProjectOne() {
  return (
    <div className="project-one-container">
      {/* Banner Section */}
      <section className="banner-section">
      <img src="../assets/images/booki/booki-site.png" alt="Banner of the Travel Agency Website" className="banner-image" />
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Créez la page d’accueil d’une agence de voyage avec HTML & CSS</h1>
        <p>A responsive landing page built from Figma designs for a travel agency.</p>
      </section>

      {/* Project Overview Section */}
      <section className="project-overview">
        <h2>Project Overview</h2>
        <p>
          This project involved creating a responsive landing page for a travel agency using HTML and CSS.
          The focus was on integrating a fully responsive user interface across mobile, tablet, and desktop devices, based on Figma designs.
          The aim was to create a user-friendly experience that works seamlessly on all devices, showcasing the agency's offerings in a clear and visually appealing manner.
        </p>
      </section>

      {/* Skills Developed Section */}
      <section className="skills-developed">
        <h2>Skills Developed</h2>
        <ul>
          <li>Responsive Web Design using HTML and CSS</li>
          <li>Converting Figma designs into functional web pages</li>
          <li>CSS best practices for cross-device compatibility</li>
        </ul>
      </section>

      {/* Design Process Section */}
      <section className="design-process">
        <h2>Design Process</h2>
        <p>Here are some key images from the Figma designs that guided the development of this project:</p>
        <div className="image-gallery">
          <img src="../assets/images/booki/booki-mobile.png" alt="Figma Design - Mobile" />
          <img src="../assets/images/booki/booki-tablette.png" alt="Figma Design - Tablet" />
          <img src="../assets/images/booki/booki-desktop.png" alt="Figma Design - Desktop" />
        </div>
      </section>

      {/* Implementation Section */}
      <section className="implementation">
        <h2>Implementation</h2>
        <p>Below is the final implemented site, showcasing the responsive design across different devices:</p>
        <div className="image-gallery">
          <img src="/path-to-your-uploaded-implemented-site-image.jpg" alt="Implemented Site" />
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          This project was a valuable experience in developing responsive designs that are both functional and visually appealing.
          It reinforced the importance of a mobile-first approach and cross-device compatibility, skills that are crucial for any front-end developer.
        </p>
        <a href="https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/DW_P2+HTML+CSS+Booki/DW+Booki+-+Note+de+synthese.pdf" className="btn primary-btn" target="_blank" rel="noopener noreferrer">
          View Full Project Documentation (PDF)
        </a>
      </section>
    </div>
  );
}

export default ProjectOne;
