'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Products.css';

// Main Products Section Component
const ProductsSection = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('Spices');
  const [visibleRows, setVisibleRows] = useState(2); // Start with 2 rows (8 items) for Spices

  // Product Card Component
  const ProductCard = ({ image, title, category, id }) => {
    const handleClick = () => {
      router.push(`/products/${id}`);
    };

    return (
      <div className="product-card">
        <img src={image} alt={title} />
        <div className="product-info" onClick={handleClick}>
          <span>{title}</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            <path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="white" />
          </svg>
        </div>
      </div>
    );
  };
  const products = [
    // Spices
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
      id: 12,
      title: "Onion Powder",
      category: "Spices",
      image: "/images/ONION POWDER.png"
    },
    {
      id: 13,
      title: "Red Chili Powder",
      category: "Spices",
      image: "/images/RED CHILI POWDER.png"
    },
    {
      id: 14,
      title: "Turmeric Powder",
      category: "Spices",
      image: "/images/TURMERIC POWDER.png"
    },
    // Oil Seeds
    {
      id: 3,
      title: "Black Cumin Seeds",
      category: "Oil Seeds",
      image: "/images/BLACK CUMIN SEEDS.png"
    },
    {
      id: 7,
      title: "Ragi Seeds",
      category: "Oil Seeds",
      image: "/images/RAAGI SEEDS.png"
    },
    {
      id: 11,
      title: "Niger Seeds",
      category: "Oil Seeds",
      image: "/images/NIGER SEEDS.png"
    },
    {
      id: 15,
      title: "Flax Seeds",
      category: "Oil Seeds",
      image: "/images/FLAX SEEDS.png"
    },
    {
      id: 16,
      title: "Black Mustard Seeds",
      category: "Oil Seeds",
      image: "/images/BLACK MUSTARD SEEDS.png"
    },
    {
      id: 17,
      title: "Sesame Seeds Hulled",
      category: "Oil Seeds",
      image: "/images/SESAME SEEDS HULLED.png"
    },
    {
      id: 18,
      title: "Sesame Seeds Natural",
      category: "Oil Seeds",
      image: "/images/SESAME SEEDS NATURAL.png"
    },
    {
      id: 19,
      title: "Yellow Mustard Seeds",
      category: "Oil Seeds",
      image: "/images/Yellow Mustard Seeds.png"
    },
    {
      id: 26,
      title: "Cumin Seeds",
      category: "Oil Seeds",
      image: "/images/Cumin Seed.png"
    },
    {
      id: 27,
      title: "Coriandrum Sativum",
      category: "Oil Seeds",
      image: "/images/Coriandrum Sativum.png"
    },
    {
      id: 28,
      title: "Fennel Seeds",
      category: "Oil Seeds",
      image: "/images/Fennel Seeds.png"
    },
    {
      id: 29,
      title: "Ground Nut Seeds",
      category: "Oil Seeds",
      image: "/images/ground nut seeds.png"
    },
    
    // Others
    {
      id: 20,
      title: "Psyllium Husk",
      category: "Others",
      image: "/images/Psyllium Husk.png"
    },
    {
      id: 21,
      title: "Millet",
      category: "Others",
      image: "/images/Millet.png"
    },
    {
      id: 22,
      title: "Maize Starch",
      category: "Others",
      image: "/images/Maize Starch.png"
    },
    {
      id: 23,
      title: "Dry Coconut",
      category: "Others",
      image: "/images/Dry Coconut.png"
    },
    {
      id: 24,
      title: "Chickpeas",
      category: "Others",
      image: "/images/Chickpeas.png"
    },
    {
      id: 25,
      title: "Brown Chickpeas",
      category: "Others",
      image: "/images/Brown Chickpeas.png"
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
          <button
            className={`tab ${activeCategory === 'Others' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Others')}
          >
            Others
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
            id={product.id}
            title={product.title}
            image={product.image}
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