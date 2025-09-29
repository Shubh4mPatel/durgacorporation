import React from "react";
import "./Why.css";

const DurgaCorporation = () => {
  return (
    <div className="why-section">
      <div className="durga-container">
        <h1 className="why-main-title">Why Durga Corporation</h1>

        <div className="features-grid">
          {/* Easy Repayment Options */}
          <div className="feature-card orange">
            {/* <div className="icon-container">
              <div className="money-icon">
                <span className="dollar-sign">$</span>
              </div>
            </div> */}
            <h3 className="feature-title">
            Full compliance with International Food Safety Regulations
            </h3>
            <p className="feature-description">
              adherence to global food safety standards, ensuring product quality, consumer protection, and seamless international market compliance.
            </p>
          </div>

          {/* Lower Interest Rates */}
          <div className="feature-card red">
            <h3 className="feature-title">
            Processing and Quality Assurance
            </h3>
            <p className="feature-description">
              procedures ensuring product excellence through systematic testing and quality verification.Retry
            </p>
          </div>

          {/* Fast Processing and Disbursal */}
          <div className="feature-card green">
            <h3 className="feature-title">
            Certifications and Documentation
            </h3>
            <p className="feature-description">
              Official credentials and records verifying compliance, standards, and operational legitimacy.
            </p>
          </div>

          {/* Safe, Secure and Transparent */}
          <div className="feature-card green-bottom">
            <h3 className="feature-title">Safe, Secure and Transparent</h3>
            <p className="feature-description">
              Customised Packaging and Labelling solutions
            </p>
          </div>

          {/* Collateral Free (Orange) */}
          <div className="feature-card orange-bottom">
            <h3 className="feature-title">Collateral Free</h3>
            <p className="feature-description">
              Pre-shipment Inspection and Testing
            </p>
          </div>

          {/* Collateral Free (Red) */}
          <div className="feature-card red-bottom">
            <h3 className="feature-title">Collateral Free</h3>
            <p className="feature-description">
              Reliable Shipment and After-Sales Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurgaCorporation;
