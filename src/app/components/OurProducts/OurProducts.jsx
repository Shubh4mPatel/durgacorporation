'use client';
import React, { useState, useEffect, useCallback } from 'react';
import './OurProducts.css';

const products = [
  { id: 1, name: 'Fennel Seeds', image: '/images/Frame 13.png' },
  { id: 2, name: 'Coriandrum Sativum', image: '/images/Frame 13-1.png' },
  { id: 3, name: 'Flax Seeds', image: '/images/Frame 13-2.png' },
  { id: 4, name: 'Cumin Seeds', image: '/images/Frame 13-3.png' },
  { id: 5, name: 'Sesame Seeds', image: '/images/Frame 13.png' },
  { id: 6, name: 'Mustard Seeds', image: '/images/Frame 13-1.png' },
  { id: 7, name: 'Caraway Seeds', image: '/images/Frame 13-2.png' },
  { id: 8, name: 'Nigella Seeds', image: '/images/Frame 13-3.png' },
  { id: 9, name: 'Black Pepper', image: '/images/Frame 13.png' },
  { id: 10, name: 'White Pepper', image: '/images/Frame 13-1.png' },
  { id: 11, name: 'Poppy Seeds', image: '/images/Frame 13-2.png' },
  { id: 12, name: 'Ajwain Seeds', image: '/images/Frame 13-3.png' },
  { id: 13, name: 'Chia Seeds', image: '/images/Frame 13.png' },
  { id: 14, name: 'Sunflower Seeds', image: '/images/Frame 13-1.png' },
  { id: 15, name: 'Pumpkin Seeds', image: '/images/Frame 13-2.png' },
  { id: 16, name: 'Hemp Seeds', image: '/images/Frame 13-3.png' },
];

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced responsive breakpoints matching CSS exactly
  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    
    if (width <= 320) {
      setItemsPerSlide(1); // Extra small mobile
    } else if (width <= 480) {
      setItemsPerSlide(1); // Small mobile
    } else if (width <= 767) {
      setItemsPerSlide(2); // Large mobile
    } else if (width <= 1023) {
      setItemsPerSlide(2); // Tablets
    } else if (width <= 1440) {
      setItemsPerSlide(3); // Laptops (your requested 3 cards)
    } else if (width <= 1919) {
      setItemsPerSlide(4); // Large desktops
    } else {
      setItemsPerSlide(4); // Ultra-wide screens
    }
  }, []);

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    
    // Debounced resize for performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateItemsPerSlide, 150);
    };
    
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [updateItemsPerSlide]);

  // Reset currentIndex when itemsPerSlide changes to prevent overflow
  useEffect(() => {
    const totalSlides = Math.ceil(products.length / itemsPerSlide);
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0);
    }
  }, [itemsPerSlide, currentIndex]);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsLoading(false), 300);
  }, [totalSlides, isLoading]);

  const prevSlide = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsLoading(false), 300);
  }, [totalSlides, isLoading]);

  const goToSlide = useCallback((index) => {
    if (isLoading || index === currentIndex) return;
    setIsLoading(true);
    setCurrentIndex(index);
    setTimeout(() => setIsLoading(false), 300);
  }, [currentIndex, isLoading]);

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLoading && totalSlides > 1) {
        nextSlide();
      }
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide, isLoading, totalSlides]);

  const startIndex = currentIndex * itemsPerSlide;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerSlide);

  // Generate dynamic dots based on total slides
  const renderDots = () => {
    return Array.from({ length: totalSlides }, (_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => goToSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="our-products" role="region" aria-label="Our Products">
      {/* Background Images */}
      <div className="background-images" aria-hidden="true">
        <img src="/images/Group.png" className="group-img" alt="" loading="lazy" />
        <img src="/images/Clip path group-2.png" className="group-img-2" alt="" loading="lazy" />
        <img src="/images/Clip path group-2.png" className="group-img-3" alt="" loading="lazy" />
        <img src="/images/Clip path group-2.png" className="group-img-4" alt="" loading="lazy" />
      </div>

      <h2>Our Products</h2>

      <div className="carousel-wrapper" role="region" aria-label="Product carousel">
        <div 
          className="carousel-slide"
          style={{ 
            opacity: isLoading ? 0.7 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          {visibleProducts.map((product) => (
            <div 
              className="product-card" 
              key={product.id}
              role="article"
              aria-labelledby={`product-${product.id}`}
            >
              <img 
                src={product.image} 
                alt={product.name}
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/placeholder.png'; // Fallback image
                }}
              />
              <div className="product-info">
                <span id={`product-${product.id}`}>{product.name}</span>
                <img 
                  src="/images/Vector.png" 
                  alt="View product details"
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      // Handle product click/selection
                      console.log(`Selected product: ${product.name}`);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls" role="group" aria-label="Carousel controls">
          {/* Previous Arrow - Only show on larger screens */}
          {/* <img
            src="/images/green-arrow-left.png"
            alt="Previous products"
            className="carousel-arrow left"
            onClick={prevSlide}
            role="button"
            tabIndex="0"
            aria-disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                prevSlide();
              }
            }}
            style={{ 
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          /> */}
          
          {/* Dots Navigation */}
          {/* <div className="carousel-dots" role="tablist" aria-label="Product slides">
            {renderDots()}
          </div> */}
          
          {/* Next Arrow - Only show on larger screens */}
          {/* <img
            src="/images/green-arrow-right.png"
            alt="Next products"
            className="carousel-arrow right"
            onClick={nextSlide}
            role="button"
            tabIndex="0"
            aria-disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextSlide();
              }
            }}
            style={{ 
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          /> */}
        </div>
      </div>

      {/* View More Button */}
      <button 
        className="view-more"
        onClick={() => {
          // Handle view more functionality
          console.log('View more clicked');
        }}
        aria-label="View all products"
      >
        View More
      </button>
    </section>
  );
};

export default OurProducts; 