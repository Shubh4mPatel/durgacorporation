'use client'
import React, { useEffect, useState } from "react";
import "./AboutHeroSection.css";
import { useRouter } from "next/navigation";
import Head from "next/head";

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
    <Head>
        <link
          rel="preload"
          as="image"
          href="/images/About_hero_section.jpg"
          fetchpriority="high"
        />
      </Head>
      <div 
        className="about-container"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="about-content">
          <h1 className="about-main-title">More About Durga Corporation</h1>
          <p className="about-description">
            Durga Corporation has more than 14 years nurturing lasting relationships with customers across the globe
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