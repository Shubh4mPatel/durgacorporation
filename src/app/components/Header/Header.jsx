'use client';
import React, { useState } from 'react';
import './Header.css';
import logo from '../images/dc_logo.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-left">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About Us</a>
        </nav>
        
        <div className="logo-container">
          <img 
            src={logo.src || logo.default || logo}
            alt="DC Logo" 
            className="logo-svg"
          />
        </div>
        
        <nav className="nav-right">
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Contact Us</a>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;