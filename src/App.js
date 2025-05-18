import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  const themeClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <Router>
      <div className={`min-vh-100 d-flex flex-column ${themeClass}`}>
        <NavigationBar darkMode={darkMode} toggleMode={toggleMode} />
        <div className="container flex-grow-1 mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
