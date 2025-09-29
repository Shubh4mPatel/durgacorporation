"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const emailjsConfig = {
        serviceId: 'service_zgfg3yn',
        templateId: 'template_glmfgaj',
        publicKey: 'feS5Orqc4V-zhCBUF'
      };

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        submission_date: new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }),
        submission_time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }),
        to_name: 'Admin',
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      // alert('Thank you! Your message is received.');
      setFormData({ name: '', email: '', message: '', phone: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      alert('Error! Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-container" id='Contact-us'>
      <div className="contact-us-content">
        <div className="contact-us-grid">
          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <h1 className="contact-title">Contact Us</h1>

            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11V8H13V6H16V3H18V6H21V8H18V11H16ZM19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21ZM6.025 9L7.675 7.35L7.25 5H5.025C5.10833 5.68333 5.225 6.35833 5.375 7.025C5.525 7.69167 5.74167 8.35 6.025 9ZM14.975 17.95C15.625 18.2333 16.2875 18.4583 16.9625 18.625C17.6375 18.7917 18.3167 18.9 19 18.95V16.75L16.65 16.275L14.975 17.95Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>+91 9537575774</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span>info@durgacorporation.com</span>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C10.2333 22 8.79167 21.7208 7.675 21.1625C6.55833 20.6042 6 19.8833 6 19C6 18.6 6.12083 18.2292 6.3625 17.8875C6.60417 17.5458 6.94167 17.25 7.375 17L8.95 18.475C8.8 18.5417 8.6375 18.6167 8.4625 18.7C8.2875 18.7833 8.15 18.8833 8.05 19C8.26667 19.2667 8.76667 19.5 9.55 19.7C10.3333 19.9 11.15 20 12 20C12.85 20 13.6708 19.9 14.4625 19.7C15.2542 19.5 15.7583 19.2667 15.975 19C15.8583 18.8667 15.7083 18.7583 15.525 18.675C15.3417 18.5917 15.1667 18.5167 15 18.45L16.55 16.95C17.0167 17.2167 17.375 17.5208 17.625 17.8625C17.875 18.2042 18 18.5833 18 19C18 19.8833 17.4417 20.6042 16.325 21.1625C15.2083 21.7208 13.7667 22 12 22ZM12.025 16.5C13.675 15.2833 14.9167 14.0625 15.75 12.8375C16.5833 11.6125 17 10.3833 17 9.15C17 7.45 16.4583 6.16667 15.375 5.3C14.2917 4.43333 13.1667 4 12 4C10.8333 4 9.70833 4.43333 8.625 5.3C7.54167 6.16667 7 7.45 7 9.15C7 10.2667 7.40833 11.4292 8.225 12.6375C9.04167 13.8458 10.3083 15.1333 12.025 16.5ZM12 19C9.65 17.2667 7.89583 15.5833 6.7375 13.95C5.57917 12.3167 5 10.7167 5 9.15C5 7.96667 5.2125 6.92917 5.6375 6.0375C6.0625 5.14583 6.60833 4.4 7.275 3.8C7.94167 3.2 8.69167 2.75 9.525 2.45C10.3583 2.15 11.1833 2 12 2C12.8167 2 13.6417 2.15 14.475 2.45C15.3083 2.75 16.0583 3.2 16.725 3.8C17.3917 4.4 17.9375 5.14583 18.3625 6.0375C18.7875 6.92917 19 7.96667 19 9.15C19 10.7167 18.4208 12.3167 17.2625 13.95C16.1042 15.5833 14.35 17.2667 12 19ZM12 11C12.55 11 13.0208 10.8042 13.4125 10.4125C13.8042 10.0208 14 9.55 14 9C14 8.45 13.8042 7.97917 13.4125 7.5875C13.0208 7.19583 12.55 7 12 7C11.45 7 10.9792 7.19583 10.5875 7.5875C10.1958 7.97917 10 8.45 10 9C10 9.55 10.1958 10.0208 10.5875 10.4125C10.9792 10.8042 11.45 11 12 11Z"
                    fill="white"
                  />
                </svg>
              </div>
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
                  {/* <label className="form-label">
                    Name :
                  </label> */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name :"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label className="form-label">
                    Email Id :
                  </label> */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id :"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  {/* <label className="form-label">
                    Email Id :
                  </label> */}
                  <input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No :"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message :</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={1}
                    className="form-textarea"
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Enquir Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;