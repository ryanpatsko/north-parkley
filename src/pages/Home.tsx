import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>NORTH PARKLEY MARATHONS</h1>
        <p className="tagline">The race that tests your limits in the heart of North Park</p>
      </div>
      
      <section className="race-info">
        <h2>ABOUT THE RACE</h2>
        <p>
          Inspired by the legendary Barkley Marathons, the North Parkley Marathons 
          challenges runners to navigate an unmarked course through the wilderness of North Park.
          Collect pages from hidden books, battle the elements, and test your physical and mental limits.
        </p>
        <p className="warning">
          <strong>This is not your typical trail race.</strong> Come prepared for a true challenge.
        </p>
      </section>
      
      <section className="event-details">
        <h2>EVENT DETAILS</h2>
        <div className="details-grid">
          <div className="detail-item">
            <h3>LOCATION</h3>
            <p>North Park<br />
            <span style={{ fontSize: '1rem', color: '#ffcb8c' }}>Start/Finish and post-race cookout held at the RD's residence.</span></p>
          </div>
          <div className="detail-item">
            <h3>DATE</h3>
            <p>Sunday, August 24, 2025<br />8:30 am</p>
          </div>
          <div className="detail-item">
            <h3>DISTANCE</h3>
            <p>Full – two loops, about a 50k<br />Fun Run – one loop, about a 25k</p>
          </div>
          <div className="detail-item">
            <h3>TIME LIMIT</h3>
            <p>4 hours per loop</p>
          </div>
        </div>
      </section>
      
      <section className="rules-section">
        <h2>BASIC RULES</h2>
        <ul>
          <li>Runners must find books hidden throughout the course</li>
          <li>Tear out the page corresponding to your bib number as proof</li>
          <li>Complete the designated route within the time limit</li>
          <li>More details to be revealed to registered participants</li>
        </ul>
      </section>
    </div>
  );
};

export default Home; 