import React from 'react';
import './Cases.css';

function Cases() {
  return (
    <section id="cases" className="cases">
      <div className="cases-content">
        <h2>Selected Cases</h2>
        <div className="case-grid">
          <div className="case-item">
            <img src="/path-to-image1.jpg" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Brief description of the project.</p>
          </div>
          <div className="case-item">
            <img src="/path-to-image2.jpg" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Brief description of the project.</p>
          </div>
          {/* Add more case items as needed */}
        </div>
      </div>
    </section>
  );
}

export default Cases;
