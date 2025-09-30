"use client";
import React from "react";
import "./ProductDetails.css";
import products from "../../data/Products";
import HeroSection from "../Hero-section/HeroSection";

const ProductsDetails = ({ productId }) => {
  // Find product by id
  const product =
    products.find((p) => p.id === Number(productId)) || products[0];

  return (
    <>
      <HeroSection />
      <div className="product-details-page">
        <div className="product-details">
          <div className="product-details-title-wrapper">
            <h1 className="product-details-title">Product Details</h1>
          </div>
          <div className="product-details-container">
            <div className="product-details-main-card">
              <div className="product-details-main-image">
                <img src={product.image} alt="Cumin Seeds" />
              </div>
              <div className="product-details-main-info">
                <h2 className="product-details-main-title">{product.name}</h2>
                <div className="product-details-specifications-container">
                  <div className="product-details-specification-row">
                    <span className="product-details-specification-label">
                      Botanical Name :
                    </span>
                    <span className="product-details-specification-value">
                      {product.botanicalName}
                    </span>
                  </div>
                  {/* <div className="product-details-specification-row">
                    <span className="product-details-specification-label">
                      Family :
                    </span>
                    <span className="product-details-specification-value">
                      {product.family}
                    </span>
                  </div>
                  <div className="product-details-specification-row">
                    <span className="product-details-specification-label">
                      Commercial Part :
                    </span>
                    <span className="product-details-specification-value">
                      {product.commercialPart}
                    </span>
                  </div> */}
                </div>

                <h3 className="product-details-usage-title">Use</h3>
                <p className="product-details-usage-description">
                  {product.uses}
                </p>

                <button
                  className="product-details-enquire-button"
                  onClick={() => {
                    document.getElementById("Contact-us")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="product-details-description-section">
              <h3 className="product-details-description-title">Description</h3>
              <p className="product-details-description-text">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
