import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me for collaboration, job opportunities, or any questions you may have.
        </p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/iana-li-505374234/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ianaliti" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
