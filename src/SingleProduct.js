import React from 'react';
import './Styles.css/SingleProduct.css'; // Import CSS file
const SingleProduct = ({ product, addToCart, onClose }) => {
    return (
        <div className="single-product-container">
            <div className="product-card-exclusive">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-details">
                    <h3>{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
