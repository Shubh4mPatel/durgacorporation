'use client'
import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { useRouter } from "next/navigation";

const DurgaCorporation = ({ isButtonVisible = false }) => {
  const router = useRouter();
  const [bgImage, setBgImage] = useState('/images/About_hero_section.jpg');

  const images = [
    '/images/About_hero_section.jpg',
    '/images/product_hero_section.jpg',
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
        className="container"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
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