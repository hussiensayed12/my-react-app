// Footer.js
import React from 'react';
import './Styles.css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in justo efficitur,
              interdum massa vel, fermentum nunc.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="email" name="email" placeholder="Your Email" />
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
