import React from "react";
import "./HeroSection.css";

const DurgaCorporation = ({isButtonVisible = false}) => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="main-title">Welcome To Durga Corporation</h1>
          <p className="description">
            Durga Corporation is a manufacturer and
            <br />
            exporter of spices and herbs from Patan (NG),
            <br />
            India. Tapping into Patan, just 30km from
            <br />
            Unjha, which is renowned as Asia's biggest
            <br />
            spice market
          </p>
          <button
            className="know-more-btn"
            style={{ display: isButtonVisible === false ? "none" : "" }}
          >
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default DurgaCorporation;
