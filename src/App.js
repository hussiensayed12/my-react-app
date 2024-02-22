// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import Login from './Login';
import Footer from './Footer';
import Carousel from './Carousel';
import SlimNavbar from './SlimNavbar';
import './App.css'; // Import global styles if needed

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <Router>
      <div>
      <SlimNavbar/>
        <Navbar />
        {/* <CarouselComponent/> */}
        <hr />

        <Routes>
        <Route
            path="/"
            element={<ProductList addToCart={addToCart} />} // Pass addToCart function
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
