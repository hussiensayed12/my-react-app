// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css/Navbar.css'; // Import CSS file
import Logo from './Images/logo_dark.png'; // Import logo image
import img5 from './Images/shopping-cart.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle">PAGES</span>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-link" to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link className="dropdown-link" to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link className="dropdown-link" to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle">PRODUCTS</span>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-link" to="/product1" onClick={toggleMenu}>Product 1</Link></li>
            <li><Link className="dropdown-link" to="/product2" onClick={toggleMenu}>Product 2</Link></li>
            <li><Link className="dropdown-link" to="/product3" onClick={toggleMenu}>Product 3</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle">BLOG</span>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-link" to="/blog1" onClick={toggleMenu}>Blog Post 1</Link></li>
            <li><Link className="dropdown-link" to="/blog2" onClick={toggleMenu}>Blog Post 2</Link></li>
            <li><Link className="dropdown-link" to="/blog3" onClick={toggleMenu}>Blog Post 3</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle">SHOP</span>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-link" to="/shop1" onClick={toggleMenu}>Shop Item 1</Link></li>
            <li><Link className="dropdown-link" to="/shop2" onClick={toggleMenu}>Shop Item 2</Link></li>
            <li><Link className="dropdown-link" to="/shop3" onClick={toggleMenu}>Shop Item 3</Link></li>
          </ul>
        </li>
        <li className="nav-item">
    <Link to="/cart" onClick={toggleMenu}>
        <img src={img5} alt="Cart" className="cart-logo" />
    </Link>
</li>

        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact-us" onClick={toggleMenu}>CONTACT US</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
