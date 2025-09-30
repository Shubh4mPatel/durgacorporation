'use client'
import React from "react";
import "./HeroSection.css";
import { useRouter } from "next/navigation";

const DurgaCorporation = ({ isButtonVisible = false }) => {
  const router = useRouter()
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="main-title">Welcome To Durga Corporation</h1>
          <p className="description">
            Durga Corporation is a manufacturer and

            exporter of spices and herbs from Patan (NG),

            India. Tapping into Patan, just 30km from

            Unjha, which is renowned as Asia's biggest

            spice market
          </p>
          <button
            className="know-more-btn"
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
