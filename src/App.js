import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Cases from './components/cases/Cases';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Education from './components/education/Education';

import ProjectOne from './components/projects/ProjectOne'; // Example for the ProjectOne page
// import Course1 from './components/courses/Course1'; // Import the component for the course page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-one" element={<ProjectOne />} />
          {/* <Route path="/course1" element={<Course1 />} /> Add the route for the course */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
