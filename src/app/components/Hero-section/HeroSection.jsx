'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import './HeroSection.css';

const DurgaCorporation = () => {
  const pathname = usePathname();
  const isHome = pathname === '/home' || pathname === '/'; // handle both /home and root
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container">
      <div className="content">
        {isHome && !showMore ? (
          <>
            <h1 className="main-title">Welcome To Durga Corporation</h1>
            <p className="description">
              Durga Corporation is a manufacturer and<br />
              exporter of spices and herbs from Patan (NG),<br />
              India. Tapping into Patan, just 30km from<br />
              Unjha, which is renowned as Asia's biggest<br />
              spice market
            </p>
            <button
              className="know-more-btn"
              onClick={() => setShowMore(true)}
            >
              Know More
            </button>
          </>
        ) : (
          <>
            <h2 className="main-title">More About Durga Corporation</h2>
            <p className="description">
              Durga Corporation is a manufacturer and exporter of spices and herbs
              from Patan (NG), India. Tapping into Patan, just 30km from Unjha,
              which is renowned as Asia’s biggest spice market.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DurgaCorporation;
