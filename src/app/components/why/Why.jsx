import React from 'react';
import './Why.css';

const DurgaCorporation = () => {
  return (
    <div className='why-section'>
    <div className="durga-container">
      <h1 className="why-main-title">Why Durga Corporation</h1>
      
      <div className="features-grid">
        {/* Easy Repayment Options */}
        <div className="feature-card orange">
          <div className="icon-container">
            <div className="money-icon">
              <span className="dollar-sign">$</span>
            </div>
          </div>
          <h3 className="feature-title">Easy Repayment Options</h3>
          <p className="feature-description">
            Repay the loan amount in easy EMI with flexible 
            tenure options
          </p>
        </div>

        {/* Lower Interest Rates */}
        <div className="feature-card red">
          <h3 className="feature-title">Lower Interest Rates</h3>
          <p className="feature-description">
            Get loans for multiple purposes at lower interest 
            rates to suit your needs
          </p>
        </div>

        {/* Fast Processing and Disbursal */}
        <div className="feature-card green">
          <h3 className="feature-title">Fast Processing and Disbursal</h3>
          <p className="feature-description">
            Apply online, check your eligibility and get money 
            directly in your bank in 10 minutes
          </p>
        </div>

        {/* Safe, Secure and Transparent */}
        <div className="feature-card green-bottom">
          <h3 className="feature-title">Safe, Secure and Transparent</h3>
          <p className="feature-description">
            Our loan application process is fully secured and 
            safe and there are no hidden charges
          </p>
        </div>

        {/* Collateral Free (Orange) */}
        <div className="feature-card orange-bottom">
          <h3 className="feature-title">Collateral Free</h3>
          <p className="feature-description">
            No collateral is required to apply for our personal 
            loans
          </p>
        </div>

        {/* Collateral Free (Red) */}
        <div className="feature-card red-bottom">
          <h3 className="feature-title">Collateral Free</h3>
          <p className="feature-description">
            No collateral is required to apply for our personal 
            loans
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DurgaCorporation;