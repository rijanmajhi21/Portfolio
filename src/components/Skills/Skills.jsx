import React from 'react';
import './Skills.css';

function Skills() {
    return (
    <div className="skills-section">
        <h1>Skills</h1>

        {/* Skills Row */}
        <div className="skills-list">
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
        <div className="skill">Figma</div>
        <div className="skill">Sketching</div>
        <div className="skill">Vue.js</div>
        <div className="skill">MySql</div>
        </div>
    </div>
);
}

export default Skills;

