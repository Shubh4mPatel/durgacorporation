'use client';
import React, { useState } from 'react';
import './SpicesCardSection.css';
import logo from '../images/dc_logo.svg';

const SpicesCardSection = () => {

  return (
     <div className='spice-cards-container d-flex'>
          <div className='spice-card-row'>
              <div className='spice-card conventional-card col-4'>
                    <div className='spice-card-content'>
                        <h2 className='spice-card-title'>Conventional</h2>
                         <p className="spice-card-description">
                              "Authentic flavors, harvested traditionally. 
                              Our conventional spices bring the true 
                              essence of nature straight to your kitchen."
                         </p>
                    </div>
              </div>
              <div className='spice-card ipm-card col-4'>
                    <div className='spice-card-content'>
                        <h2 className='spice-card-title'>IPM</h2>
                         <p className="spice-card-description">
                              "Grown using eco-friendly farming 
                              practices, our IPM spices ensure minimal 
                              pesticide use while preserving freshness, 
                              safety, and sustainability."
                         </p>
                    </div>
              </div>
              <div className='spice-card organic-card col-4'>
                     <div className='spice-card-content'>
                        <h2 className='spice-card-title'>Organic</h2>
                         <p className="spice-card-description">
                              "Cultivated without chemicals or synthetic 
                              inputs, our organic spices are pure, natural, 
                              and packed with authentic flavor. Certified to 
                              meet global organic standards."
                         </p>
                    </div>
              </div>
          </div>
     </div>
  );
};

export default SpicesCardSection;