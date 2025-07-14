import React from 'react';
import '../styles/Course.css';

const Course: React.FC = () => {
  return (
    <div className="course-container">
      <h1>THE COURSE</h1>
      
      <div className="course-description">
        <p>
          The North Parkley Marathons course is a closely guarded secret. 
          What we can tell you is that it will push you to your limits both physically and mentally.
        </p>
        <p>
          Runners will navigate through challenging terrain in North Park, with no course markings to guide you.
          You'll need to rely on your map reading skills and natural navigation abilities.
        </p>
      </div>
      
      <div className="course-map">
        <h2>COURSE MAP</h2>
        <div className="map-placeholder">
          <p>Course map will be revealed to registered participants closer to race day</p>
          {/* Map or GPX file will be added here later */}
        </div>
      </div>
      
      <div className="course-features">
        <h2>COURSE FEATURES</h2>
        <ul>
          <li><strong>Elevation Gain:</strong> Significant</li>
          <li><strong>Terrain:</strong> Technical trails, off-trail sections, brush</li>
          <li><strong>Water Crossings:</strong> Likely</li>
          <li><strong>Book Checkpoints:</strong> Multiple books placed throughout the course</li>
        </ul>
      </div>
      
      <div className="book-checkpoints">
        <h2>BOOK CHECKPOINTS</h2>
        <p>
          In the spirit of the Barkley Marathons, books will be placed at various locations throughout the course.
          Runners must locate each book and tear out the page corresponding to their bib number as proof of reaching the checkpoint.
        </p>
        <p>
          The locations of the books will not be disclosed until race day.
        </p>
      </div>
    </div>
  );
};

export default Course; 