'use client'
import React from "react";
import "./ProductHeroSection.css";
import { useRouter } from "next/navigation";

const DurgaCorporation = ({ isButtonVisible = false }) => {
  const router = useRouter()
  return (
    <>
      <div className="product-container">
        <div className="product-content">
          <h1 className="product-main-title">Our Product Range</h1>
          <p className="product-description">
           From the earthy warmth of cumin to the vibrant zest of turmeric, our carefully selected spices are packed with freshness, aroma, and flavor.
          </p>
          <button
            className="product-know-more-btn"
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