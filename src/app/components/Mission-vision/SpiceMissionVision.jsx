import React from "react";
import "./SpiceMissionVision.css";

const SpiceMissionVision = () => {
  return (
    <div className="mv-container">
      {/* Mission Section */}
      <div className="mv-section mv-mission-section">
        <div className="mv-image-container">
          <img
            src="/images/mission.jpg"
            alt="Variety of spices in bowls"
            className="mv-spice-image"
          />
        </div>
        <div className="mv-content-container">
          <h2 className="mv-heading mission">Our Mission</h2>
          <div className="mv-setter">
            <p className="mv-description mission">
              Our mission is to deliver products that embody purity,
              originality, and authenticity. We are committed to maintaining the
              highest quality standards, ensuring that every product remains
              free from contamination and meets excellence across all analytical
              parameters.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mv-section mv-vision-section">
        <div className="mv-content-container">
          <h2 className="mv-heading">Our Vision</h2>
          <p className="mv-description">
            Our vision is to achieve customer satisfaction as our prime goal by
            consistently upholding quality, integrity, and trust. We strive to
            set benchmarks in purity and reliability, making our brand
            synonymous with excellence in every aspect.
          </p>
        </div>
        <div className="mv-image-container">
          <img
            src="/images/vision.jpg"
            alt="Variety of spices in bowls"
            className="mv-spice-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SpiceMissionVision;
