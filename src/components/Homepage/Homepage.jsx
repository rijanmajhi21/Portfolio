import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="cover-section">
      <div className="profile-wrapper"><div className="Profile"></div></div>
      <div className="cover-info">
        <h1>Rijan Majhi</h1>
        <p>Artist<br />
          Designer<br />
          Frontend Developer</p>
        <button className="contact-btn">Contact Me</button>
      </div>
    </div>
  );
}

export default Homepage;

