'use client';
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <div className="contact-us-grid">
          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <h1 className="contact-title">
              Contact Us
            </h1>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <span>+91 00000 00000</span>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <span>digiwaves19@lorem.com</span>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-address">
                <div>Reg. Office I MFG. UNIT</div>
                <div>Plot survey No. 272, Rajpur-</div>
                <div>Katpur road, Rajpur</div>
                <div>Dist- Patan, Gujarat- 384265,</div>
                <div>INDIA.</div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-container">
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email Id :
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Message :
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-textarea"
                    required
                  />
                </div>

                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="submit-button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;