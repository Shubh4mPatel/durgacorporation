import React from 'react';
import './SpiceMissionVision.css';

const SpiceMissionVision = () => {
  return (
    <div className="mv-container">
      {/* Mission Section */}
      <div className="mv-section mv-mission-section" >
        <div className="mv-image-container">
          <img 
            src="/images/spice_image.png" 
            alt="Variety of spices in bowls" 
            className="mv-spice-image"
          />
        </div>
        <div className="mv-content-container" >
          <h2 className="mv-heading mission">Our Mission</h2>
          <div className="mv-setter">
          <p className="mv-description mission">
            Customer's satisfaction is our prime Motto. To imbibe, 
            practice & maintain the quality of products at the apex of its 
            purity, originality, and contamination free standards at all 
            analytical parameters of its best quality.
          </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mv-section mv-vision-section">
        <div className="mv-content-container">
          <h2 className="mv-heading">Our Vision</h2>
          <p className="mv-description">
            Customer's satisfaction is our prime Motto. To imbibe, 
            practice & maintain the quality of products at the apex of its 
            purity, originality, and contamination free standards at all 
            analytical parameters of its best quality.
          </p>
        </div>
        <div className="mv-image-container">
          <img 
            src="/images/spice_image.png"  
            alt="Variety of spices in bowls" 
            className="mv-spice-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SpiceMissionVision;