import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const {key,category,name, seller, wholePrice,stock, star,startCount, img, url} =props.product;
    // const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product-details">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h6 style={{color:'blue', fontWeight:'500',fontSize:'30px'}}>{name} </h6>
            <h6>By: {seller} </h6>
            <h6>Price: <span style={{fontSize:'24px', color:'crimson'}}>${wholePrice}</span> </h6>
            {/* <h6>Only {stock} left in stock -order soon.</h6> */}
            <h6>Only <span style={{fontSize:'24px', color:'goldenrod'}}>{stock}</span> left in stock -order soon.</h6>
            <Rating
             initialRating={star}
             emptySymbol="far fa-star icon-color"
             fullSymbol="fas fa-star icon-color"
            ></Rating>
            <br />


            <button 
            onClick={()=> props.handleAddToCart(props.product)}
            className="regular-btn">  
               <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
        
            </div>
        </div>
    );
};

export default Product;