// Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
    return (
    <footer className="footer">
        <div className="footer-content">
        <div className="contact-info">
            <p><strong>Email:</strong> rijanmajhi21@gmail.com</p>
            <p><strong>Phone:</strong> +977-9848006643</p>
            <p><strong>Address:</strong> Lainchour-26, Kathmandu, Nepal</p>
        </div>
        <div className="social-links">
            <p>Connect with me:</p>
            <a href="https://www.instagram.com/sketching_21" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.facebook.com/jadu.sanna21/" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-facebook"></i>
            </a>
        </div>
        <p>© 2024 Rijan Majhi | All rights reserved.</p>
        </div>
    </footer>
);
}

export default Footer;