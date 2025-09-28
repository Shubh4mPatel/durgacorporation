'use client'
import React, { useState } from 'react';
import './ProductDetails.css';

const ProductsDetails = ({ productId, onBack }) => {
  const [activeCategory, setActiveCategory] = useState('Spices');

  // Sample product data - in real app this would come from props or API
  const product = {
    id: 1,
    name: "Cumin Seeds",
    botanicalName: "Cuminum Cyminum",
    family: "Umbelliferae",
    commercialPart: "Fruit",
    image: "/images/Frame 13-3.png",
    category: "Spices",
    description: "Cumin is the dried seed of the herb Cuminum cyminum, a member of the parsley family. The cumin plant grows to 30-50 cm (12-20 in) tall and is harvested by hand. Cumin seeds have eight ridges with oil canals.",
    uses: "Aids Digestion, Thyroid, a compound in cumin, is known to stimulate the glands that secrete acids, bile and enzymes responsible for complete digestion of food in the stomach. Promotes Skin Health, Treats Insomnia, Prevents Diabetes, Has nutritional and Antibacterial Properties, High Source of Iron."
  };

  return (
    <div className="single-product-section">
      {/* Header with navigation tabs */}
      <div className="single-product-header">
        <h1>Our Products</h1>
        <div className="category-tabs">
          <button
            className={`tab ${activeCategory === 'Spices' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Spices')}
          >
            Spices
          </button>
          <button
            className={`tab ${activeCategory === 'Oil Seeds' ? 'active' : ''}`}
            onClick={() => setActiveCategory('Oil Seeds')}
          >
            Oil Seeds
          </button>
        </div>
      </div>

      {/* Main product content */}
      <div className="product-content">
        {/* Left side - Product image */}
        <div className="product-image-section">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="product-details-section">
          <div className="product-info-card">
            <h2 className="product-title">{product.name}</h2>
            
            <div className="product-specifications">
              <div className="spec-item">
                <span className="spec-label">Botanical Name :</span>
                <span className="spec-value">{product.botanicalName}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Family :</span>
                <span className="spec-value">{product.family}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Commercial Part :</span>
                <span className="spec-value">{product.commercialPart}</span>
              </div>
            </div>

            <div className="use-section">
              <h3>Use</h3>
              <p className="use-description">{product.uses}</p>
            </div>

            <button className="enquire-btn">Enquire Now</button>
          </div>

          <div className="description-section">
            <h3>Description</h3>
            <p className="description-text">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="company-footer">
        <div className="company-info">
          <h3>Digivave</h3>
          <p>We help companies streamline their hiring process with cutting-edge interview solutions, ensuring about the candidate's capabilities and efficient decision-making.</p>
          <div className="social-links">
            <span>●</span>
            <span>in</span>
            <span>✉</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;