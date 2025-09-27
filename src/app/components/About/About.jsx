import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="About-section">
      <div className="About-content">
        <div className="About-text">
          <h1>About Us</h1>
          <p className="About-para">
            Founded in 2011, Durga Corporation has spent over 14 years nurturing
            lasting relationships with customers across the globe. With deep
            expertise in processing, administration, marketing, and exporting,
            we proudly deliver premium-quality spices that bring flavor and
            authenticity to every kitchen. With a passion for purity and
            authenticity, we source the finest spices from trusted farms and
            regions known for their rich heritage of cultivation. From the
            earthy warmth of cumin to the vibrant zest of turmeric, our
            carefully selected spices are packed with freshness, aroma, and
            flavor. Our strong reputation is built on trust, consistency, and an
            unwavering commitment to excellence. By combining modern technology
            with traditional values, we ensure that every product we deliver
            meets the highest standards of quality and freshness.
          </p>
        </div>
        <img
          src="/images/about_us_image.jpg"
          alt="About Us Image"
          className="About-image"
        />
      </div>
    </div>
  );
};

export default About;
