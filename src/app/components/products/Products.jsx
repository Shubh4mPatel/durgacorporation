'use client';
import React, { useState } from 'react';
import './Products.css';

// Product Card Component
const ProductCard = ({ image, title, category }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <span className="category">{category}</span>
        <div className="arrow">→</div>
      </div>
    </div>
  );
};

// Main Products Section Component
const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Spices');
  const [visibleRows, setVisibleRows] = useState(2); // Start with 2 rows (8 items) for Spices

  const products = [
    {
      id: 1,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
    },
    {
      id: 2,
      title: "Coriandrum Sativum",
      category: "Spices",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 3,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 4,
      title: "Cumin Seeds",
      category: "Spices",
      image: "/images/Frame 13-3.png"
    },
    {
      id: 5,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
    },
    {
      id: 6,
      title: "Coriandrum Sativum",
      category: "Spices",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 7,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 8,
      title: "Cumin Seeds",
      category: "Spices",
      image: "/images/Frame 13-3.png"
    },
    {
      id: 9,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
    },
    {
      id: 10,
      title: "Coriandrum Sativum",
      category: "Spices",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 11,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 12,
      title: "Cumin Seeds",
      category: "Spices",
      image: "/images/Frame 13-3.png"
    },
    {
      id: 13,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
    },
    {
      id: 14,
      title: "Coriandrum Sativum",
      category: "Spices",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 15,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 16,
      title: "Cumin Seeds",
      category: "Spices",
      image: "/images/Frame 13-3.png"
    },
    {
      id: 17,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
    },
    {
      id: 18,
      title: "Coriandrum Sativum",
      category: "Spices",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 19,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 20,
      title: "Cumin Seeds",
      category: "Spices",
      image: "/images/Frame 13-3.png"
    },
    {
      id: 21,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
    },
    {
      id: 22,
      title: "Coriandrum Sativum",
      category: "Spices",
      image: "/images/Frame 13-1.png"
    },
    {
      id: 23,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/Frame 13-2.png"
    },
    {
      id: 24,
      title: "Cumin Seeds",
      category: "Spices",
      image: "/images/Frame 13-3.png"
    },
    {
      id: 25,
      title: "Fennel Seeds",
      category: "Spices",
      image: "/images/Frame 13.png"
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

      <div className="products-grid">
        {displayedProducts.map(product => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
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