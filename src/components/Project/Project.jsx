import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <div className="project-wrapper">
        <div className="project-card">
          <h2>Customer Management System</h2>
          <p>This project is built using Vue.js for the frontend and Laravel for the backend.
            It manages customer data, tracks interactions, and provides user management functionalities.</p>
        </div>

        <div className="project-card">
          <h2>Know Your Customer (KYC)</h2>
          <p>This project was designed in Figma. It focuses on collecting and verifying customer information
            for compliance and identification purposes. It includes easy-to-use UI/UX design for a smooth user
            experience.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
