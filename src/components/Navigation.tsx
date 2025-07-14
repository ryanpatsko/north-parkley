import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../assets/north-parkley-logo.png';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="North Parkley Logo" className="site-logo" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          </li>
          <li>
            <Link to="/course" onClick={() => setMenuOpen(false)}>COURSE</Link>
          </li>
          <li>
            <Link to="/register" onClick={() => setMenuOpen(false)}>REGISTER</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 