'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import './Header.css';
import logo from '../images/dc_logo.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current route

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav-left">
          <a href="/home" className={`nav-link ${pathname === '/home' ? 'active' : ''}`}>Home</a>
          <a href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</a>
        </nav>
        
        <div className="logo-container">
          <img 
            src={logo.src || logo.default || logo}
            alt="DC Logo" 
            className="logo-svg"
          />
        </div>
        
        <nav className="nav-right">
          <a href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>Products</a>
          <a href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Nav */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
