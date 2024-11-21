import React from 'react';
import './Sketches.css';

function Sketches() {
    return (
    <div className="sketches-section">
        <h1 className="section-title">Sketching Gallery</h1>
        <div className="sketches-gallery">
        <div className="sketch-card">
            <img src="/images/Image5.jpg" alt="Artwork 1" className="sketch-image" />
            <div className="art-name">Heart</div>
        </div>
        <div className="sketch-card">
            <img src="/images/Image8.jpg" alt="Artwork 2" className="sketch-image" />
            <div className="art-name">Ageing</div>
        </div>
        <div className="sketch-card">
            <img src="/images/Image9.jpg" alt="Artwork 3" className="sketch-image" />
            <div className="art-name">Lips work</div>
        </div>
        <div className="sketch-card">
            <img src="/images/Image11.jpg" alt="Artwork 4" className="sketch-image" />
            <div className="art-name">Photo Vs. Drawing</div>
        </div>
        <div className="sketch-card">
            <img src="/images/Image12.jpg" alt="Artwork 5" className="sketch-image" />
            <div className="art-name">Eye</div>
        </div>
        <div className="sketch-card">
            <img src="/images/Shiva.jpg" alt="Artwork 6" className="sketch-image" />
            <div className="art-name">Lord Shiva</div>
        </div>
        </div>
    </div>
);
}

export default Sketches;

