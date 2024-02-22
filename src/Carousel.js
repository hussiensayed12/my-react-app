import React from 'react';
import img1 from './Images/woman-holding-various-shopping-bags-copy-space.jpg';
import img2 from './Images/pexels-pixabay-259200.jpg';
import img3 from './Images/colorful-shopping-bags-carried-by-girl.jpg';
import './Styles.css/Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={img1} alt="/" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="quote">Quote 1</h5>
            <p className="description">Get up to 50% off Today Only!</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img2} alt="/" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="quote">Quote 2</h5>
            <p className="description">Taking your Viewing Experience to Next Level.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img3} alt="/" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="quote">Quote 3</h5>
            <p className="description">New Season Sale 40% Off.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
