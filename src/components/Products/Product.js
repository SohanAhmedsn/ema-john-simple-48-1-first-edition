import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const {key,category,name, seller, wholePrice,stock, star,startCount, img, url} =props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product-details">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h6 style={{color:'blue', fontWeight:'500'}}>{name} </h6>
            <h6>By: {seller} </h6>
            <h6>Price: ${wholePrice} </h6>
            <h6>Only {stock} left in stock -order soon.</h6>
            <button 
            onClick={()=> props.handleAddToCart(props.product)}
            className="regular-btn">{faShoppingCart}Add to Cart</button>
        
            </div>
        </div>
    );
};

export default Product;