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

  // responsive setup
  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 480) {
      setItemsPerSlide(1);
    } else if (width <= 1023) {
      setItemsPerSlide(2);
    } else if (width <= 1440) {
      setItemsPerSlide(3);
    } else {
      setItemsPerSlide(4);
    }
  }, []);

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, [updateItemsPerSlide]);

  // infinite auto loop
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // visible items (wrap around for infinite loop)
  const visibleProducts = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleProducts.push(products[(currentIndex + i) % products.length]);
  }

  return (
    <section className="our-products">
      <h2>Our Products</h2>

      {/* background images */}
      <div className="background-images">
        <img src="./images/Group.png" alt="" className="group-img" />
        <img src="/images/Clip path group-3.png" alt="" className="group-img-2" />
        <img src="/images/Clip path group-3.png" alt="" className="group-img-3" />
        <img src="/images/Clip path group-3.png" alt="" className="group-img-4" />
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-slide">
          {visibleProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <span>{product.name}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={prevSlide}
            className='carousel-arrow left'
          >
            <path d="M9 18L3 12L9 6L10.4 7.4L6.8 11H19V12V13H6.8L10.4 16.6L9 18Z" fill="#6E862F" />
          </svg>
          <div className="carousel-dots">
            {/* keep dots static (4 dots max) */}
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex % 4 ? 'active' : ''}`}
              />
            ))}
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={nextSlide}
            className="carousel-arrow right"
          >
            <path d="M15 18L21 12L15 6L13.6 7.4L17.2 11H5V13H17.2L13.6 16.6L15 18Z" fill="#6E862F" />
          </svg>
        </div>
      </div>

      {/* View More button */}
      <button className="view-more">View More</button>
    </section>
  );
};

export default OurProducts;
