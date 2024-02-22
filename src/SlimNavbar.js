import React from 'react';
import logo1 from './Images/smartphone.png';
import logo2 from './Images/united-kingdom.png';
import logo3 from './Images/arrow.png';
import logo4 from './Images/dollar.png';
import logo5 from './Images/heart.png'
import './Styles.css/SlimNavbar.css';

const SlimNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#">
          {/* <img src={logo1} alt="Logo 1" width="30" height="30" /> */}
        </a>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Collapse */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Slim Navbar Items */}
          <ul className="navbar-nav ml-auto">
            {/* English */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={logo2} alt="English" width="20" height="20" /> English
              </a>
            </li>

            {/* USD */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={logo4} alt="USD" width="20" height="20" /> USD
              </a>
            </li>

            {/* Phone Number */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={logo1} alt="Phone Number" width="20" height="20" /> 123-456-7890
              </a>
            </li>

            {/* Compare */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={logo3} alt="Compare" width="20" height="20" /> Compare
              </a>
            </li>

            {/* Wishlist */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={logo5} alt="Wishlist" width="20" height="20" /> Wishlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SlimNavbar;
