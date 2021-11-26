import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProduts] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProduts(data);
        
        } 
            )
    },[]);
    
    useEffect(()=>{ 
        if(products.length) {
            const saveCart = getStoredCart();
            const storeCart = [];
        for(const key in saveCart){
        const addedProduct = products.find( product => product.key === key);
        if(addedProduct) {
            const quantity = saveCart[key];
            addedProduct.quantity= quantity;
            storeCart.push(addedProduct);
        }
        // console.log(key, addedProduct);
        
        }
        setCart(storeCart)
        }
    },[])

    // Add to product btn
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        //save to localStorage 
        addToDb(product.key);
    }
    const handleSearch = event => {
     const searchText =event.target.value;
     const matchProducts = products.filter( product => product.name.toLowerCase().includes(searchText.toLowerCase()));
     setDisplayProduts(matchProducts);
     
        
    }
    return (
     <div> 
         <div className="search-container">
             <input type="text" 
             onChange={handleSearch}
             placeholder="Search your products" />
         </div>
            <d className="shop-container">
            <div className="product-container">
                <h3>Products:{products.length} </h3>
                {
                    displayProducts.map(product => <Product
                   key={product.key}
                    product={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </d>
     </div>
    );
};

export default Shop;