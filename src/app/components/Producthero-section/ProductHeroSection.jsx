'use client'
import React, { useEffect, useState } from "react";
import "./ProductHeroSection.css";
import { useRouter } from "next/navigation";

const DurgaCorporation = ({ isButtonVisible = false }) => {
  const router = useRouter();
  const [bgImage, setBgImage] = useState('/images/product_hero_section.jpg');

  const images = [
    '/images/product_hero_section.jpg',
    '/images/About_hero_section.jpg',
    '/images/hero_section_bg.jpg'
  ];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBgImage(images[currentIndex]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div 
        className="product-container"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
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