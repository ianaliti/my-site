import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Loader from './components/loader/Loader'
import Footer from './components/footer/Footer';
import './App.css';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a delay for the loader (e.g., 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app">
        {loading && <Loader />}
        <Header />
        <Navigation />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;