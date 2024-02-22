import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles.css/ClientFeedbackCarousel.css'; 
import img1 from './Images/user_img1.jpg' ;

const feedbackData = [
  {
    name: 'John Doe',
    image: './Images/add-to-cart.png',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend vestibulum orci, eget fermentum metus convallis in. Phasellus sit amet pretium mauris.'
  },
  {
    name: 'Jane Smith',
    image: 'jane-smith.jpg',
    feedback: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin bibendum est quam, quis interdum odio fringilla ut.'
  },
  {
    name: 'Alice Johnson',
    image: './Images/user_img1.jpg',
    feedback: 'Curabitur tempus purus quis arcu placerat vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  }
];

const ClientFeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="client-feedback-carousel">
      <Slider {...settings}>
        {feedbackData.map((item, index) => (
          <div key={index} className="feedback-item">
            <div className="feedback-content">
              <p>{item.feedback}</p>
              <div className="client-info">
                <img src={img1} alt={item.name} className="client-image" />
                <p className="client-name">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ClientFeedbackCarousel;
