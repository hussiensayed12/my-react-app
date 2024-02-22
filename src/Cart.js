import React, { useState, useEffect } from 'react';
import './Styles.css/Cart.css';

const Cart = ({ cart }) => {
  
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, [cart]);

  if (!cart) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={product.image} alt={product.title} className="cart-item-image" />
                  <div>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
