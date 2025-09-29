'use client';
import React, { useState } from 'react';
import './Products.css';
// Main Products Section Component
const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Spices');
  const [visibleRows, setVisibleRows] = useState(2); // Start with 2 rows (8 items) for Spices


  // Product Card Component
  const ProductCard = ({ image, title, category }) => {
    return (
      <div className="product-card">
        <img src={image} alt={title} />
        <div className="product-info">
          <span>{title}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
          </svg>
        </div>
      </div>
    );
  };

  const products = [
    {
      id: 1,
      title: "Black Pepper",
      category: "Spices",
      image: "/images/Black Pepper.png"
    },
    {
      id: 2,
      title: "Caasia",
      category: "Spices",
      image: "/images/Caasia.png"
    },
    {
      id: 3,
      title: "Cummin Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 4,
      title: "Chilli Flakes",
      category: "Spices",
      image: "/images/CHILLI FLAKES.png"
    },
    {
      id: 5,
      title: "Cloves",
      category: "Spices",
      image: "/images/Clove.png"
    },
    {
      id: 6,
      title: "Coriander Powder",
      category: "Spices",
      image: "/images/CORIANDER POWDER.png"
    },
    {
      id: 7,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 8,
      title: "Cumin Powder",
      category: "Spices",
      image: "/images/CUMIN POWDER.png"
    },
    {
      id: 9,
      title: "Curry Powder",
      category: "Spices",
      image: "/images/CURRY POWDER.png"
    },
    {
      id: 10,
      title: "Garlic Powder",
      category: "Spices",
      image: "/images/GARLIC POWDER.png"
    },
    {
      id: 11,
      title: "Fenugreek Seeds",
      category: "Oil Seeds",
      image: "/images/Fenugreek seeds.png"
    },
    {
      id: 12,
      title: "Onion Powder",
      category: "Spices",
      image: "/images/ONION POWDER.png"
    },
    {
      id: 13,
      title: "Red Chili Powder",
      category: "Spices",
      image: "/images/RED CHILI POwDER.png"
    },
    {
      id: 14,
      title: "Turmeric Powder",
      category: "Spices",
      image: "/images/TURMERIC POWDER.png"
    },
    {
      id: 15,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    }
  ];

  // Filter products based on active category
  const filteredProducts = products.filter(product => product.category === activeCategory);

  // Calculate initial rows to show: 2 rows (8 items) if category has more than 8 items, otherwise 1 row
  const getInitialRows = (categoryProducts) => {
    return categoryProducts.length > 8 ? 2 : 1;
  };

  // Calculate products to show based on visible rows (4 products per row)
  const productsPerRow = 4;
  const productsToShow = visibleRows * productsPerRow;
  const displayedProducts = filteredProducts.slice(0, productsToShow);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const categoryProducts = products.filter(product => product.category === category);
    setVisibleRows(getInitialRows(categoryProducts)); // Set initial rows based on category
  };

  const handleViewMore = () => {
    setVisibleRows(prev => prev + 1);
  };

  const hasMoreProducts = displayedProducts.length < filteredProducts.length;

  return (
    <div className="products-section">
      <div className="products-header">
        <h1>Our Products</h1>
        <div className="category-tabs">
          <button
            className={`tab ${activeCategory === 'Spices' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Spices')}
          >
            Spices
          </button>
          <button
            className={`tab ${activeCategory === 'Oil Seeds' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Oil Seeds')}
          >
            Oil Seeds
          </button>
        </div>
      </div>

      <div className='line'>
        <hr />
      </div>

      <div className="products-grid">
        {displayedProducts.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </div>

      {hasMoreProducts && (
        <div className="pagination">
          <button className="pagination-btn" onClick={handleViewMore}>View More</button>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;