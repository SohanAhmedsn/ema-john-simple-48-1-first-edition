import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    // Add to product btn
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Products:{products.length} </h3>
                {
                    products.map(product => <Product
                   key={product.key}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;