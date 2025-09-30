'use client'
import React from "react";
import "./AboutHeroSection.css";
import { useRouter } from "next/navigation";

const DurgaCorporation = ({ isButtonVisible = false }) => {
  const router = useRouter()
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-main-title">More About Durga Corporation</h1>
          <p className="about-description">
           Durga Corporation has more than 14 years nurturing lasting relationships with customers across the  globe
          </p>
          <button
            className="about-know-more-btn"
            style={{ visibility: isButtonVisible === false ? "hidden" : "visible" }}
            onClick={() => router.push('/about-us')}
          >
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default DurgaCorporation;