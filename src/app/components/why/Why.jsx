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
              adherence to global food safety standards, ensuring product
              quality, consumer protection, and seamless international market
              compliance.
            </p>
          </div>

          {/* Lower Interest Rates */}
          <div className="feature-card red">
            <h3 className="feature-title">Processing and Quality Assurance</h3>
            <p className="feature-description">
              procedures ensuring product excellence through systematic testing
              and quality verification.Retry
            </p>
          </div>

          {/* Fast Processing and Disbursal */}
          <div className="feature-card green">
            <h3 className="feature-title">Certifications and Documentation</h3>
            <p className="feature-description">
              Official credentials and records verifying compliance, standards,
              and operational legitimacy.
            </p>
          </div>

          {/* Safe, Secure and Transparent */}
          <div className="feature-card green-bottom">
            <h3 className="feature-title">
              Customised Packaging and Labelling solutions
            </h3>
            <p className="feature-description">
              Tailored packaging designs and labels meeting specific branding
              and regulatory requirements.
            </p>
          </div>

          {/* Collateral Free (Orange) */}
          <div className="feature-card orange-bottom">
            <h3 className="feature-title">
              Pre-shipment Inspection and Testing
            </h3>
            <p className="feature-description">
              Comprehensive product verification and quality checks conducted
              before dispatch to ensure standards.
            </p>
          </div>

          {/* Collateral Free (Red) */}
          <div className="feature-card red-bottom">
            <h3 className="feature-title">
              Reliable Shipment and After-Sales Service
            </h3>
            <p className="feature-description">
              Dependable delivery systems with ongoing customer support ensuring
              satisfaction beyond purchase completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurgaCorporation;
