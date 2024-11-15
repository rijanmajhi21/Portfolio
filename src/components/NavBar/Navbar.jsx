import React from 'react';
import './Navbar.css';

function Navbar() {
    const handleCopy = () => {
        navigator.clipboard.writeText('rijanmajhi21@gmail.com').then(() => {
        });
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="navbar-email">
                    <span className="email">rijanmajhi21@gmail.com</span>
                    <button className="copy-btn" onClick={handleCopy}>Copy</button>
                </span>
                <div className="wrapper">
                    <a href="/path/to/your/cv" className="navbar-btn">CV</a>
                </div>
            </div>

            <div className="navbar-right">
                <a href="https://dribbble.com" className="navbar-link">Dribbble</a>
                <a
                    href="https://www.instagram.com/sketching_21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-link"
                >
                    Instagram
                </a>
            </div>
        </nav>
    );
}

export default Navbar;



