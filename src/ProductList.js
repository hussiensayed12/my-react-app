import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles.css/ProductList.css'; // Import CSS file
import Carousel from './Carousel';
import deliveryIcon from './Images/shipped.png';
import returnIcon from './Images/charity.png';
import supportIcon from './Images/support.png';
import img1 from './Images/shop_banner_img1.jpg';
import img2 from './Images/shop_banner_img2.jpg';
import img3 from './Images/menu_banner2-1.jpg';
import img4 from './Images/tranding_img-1 - Copy.webp'
import img5 from './Images/add-to-cart (1).png'
import img6 from './Images/vision.png'
import ClientFeedbackCarousel from './ClientFeedbackCarousel';
import SingleProduct from './SingleProduct'; // Import SingleProduct component
const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const exclusiveProducts = products.slice(0, 8); // First 8 products
    const featuredProducts = products.slice(8, 12); // Next 4 products

    // Function to handle product selection
    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="home-page">
            {/* Section 1: Image with Quote */}
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Section 3: Exclusive Products */}
            <section className="section exclusive-products">
                <h2>Exclusive Products</h2>
                <div className="product-list-container">
                    {exclusiveProducts.map((product) => (
                        <div key={product.id} className="product-card-exclusive">
                            <img src={product.image} alt={product.title} className="product-image" />
    <div className="product-details" style={{ display: 'flex', alignItems: 'center' }}>
    <h3>{product.title}</h3>
    <p className="product-price">${product.price}</p>
    {/* Add to Cart button logo */}
    <img src={img5} alt="Add to Cart" className="add-to-cart-logo" onClick={() => { 
    addToCart(product); 
    alert('The product has been added to the cart.'); 
}} />
    {/* View Product button logo */}
    <img src={img6} alt="View Product" className="view-product-logo" onClick={() => handleProductSelect(product)} />
    </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Featured Products */}
            <section className="section featured-products">
                <h2>Featured Products</h2>
                <div className="product-list-container">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <div className="product-details">
                                <h3>{product.title}</h3>
                                <p className="product-price">${product.price}</p>
                            {/* <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button> */}
                            <img src={img5} alt="Add to Cart" className="add-to-cart-logo" onClick={() => { 
    addToCart(product); 
    alert('The product has been added to the cart.'); 
}} />

                                {/* Add button to select product */}
                                {/* <button className="view-product-btn" onClick={() => handleProductSelect(product)}>View Product</button> */}
                                <img src={img6} alt="View Product" className="view-product-logo" onClick={() => handleProductSelect(product)} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="section banner-quote">
                <div className="banner-image">
                    {/* Add your full-width photo here */}
                    <img src={img4} alt="Delivery Icon" />
                    
                </div>
                <div className="quote-container1">
                    <h3>New season trends!</h3>
                    <p>Best Summer Collection</p>
                    <p>Sale Get up to 50% Off</p>
                    <button className="shop-now-btn1">Shop Now</button>
                </div>
            </section>

            {/* Section 5: Client Feedback */}
            <section className="section client-feedback">
                <h2>Client Feedback</h2>
                <ClientFeedbackCarousel />
            </section>

            {/* Section 6: Quotes */}
            <section className="section quotes">
                <div className="quote-container">
                    <img src={deliveryIcon} alt="Delivery Icon" />
                    <p>Free Delivery</p>
                    <hr />
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
                <div className="quote-container">
                    <img src={returnIcon} alt="Return Icon" />
                    <p>30 Day Return</p>
                    <hr />
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
                <div className="quote-container">
                    <img src={supportIcon} alt="Support Icon" />
                    <p>24/7 Support</p>
                    <hr />
                    <p>If you are going to use of Lorem, you need to be sure there anything</p>
                </div>
            </section>

            {/* Render SingleProduct component when selectedProduct is not null */}
            {selectedProduct && (
                <SingleProduct
                    product={selectedProduct}
                    addToCart={addToCart}
                    onClose={() => setSelectedProduct(null)} // Close the SingleProduct component
                />
            )}
        </div>
    );
};
export default ProductList;
