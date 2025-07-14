import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>NORTH PARKLEY MARATHONS</h3>
          <p>The ultimate trail running challenge in North Park</p>
        </div>
        
        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/course">Course</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <p>Email: info@northparkley.com</p>
        </div>
      </div>
      
      <div className="footer-disclaimer">
        <p>
          Inspired by, but not affiliated with the original Barkley Marathons.
        </p>
        <p className="copyright">
          &copy; {currentYear} North Parkley Marathons. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 