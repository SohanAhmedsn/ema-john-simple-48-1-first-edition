import React from 'react';
import './Cart.css';
import Product from './../Products/Product';



const Cart = (props) => {
    const { cart } = props;

   let totalQuantity = 0;
    let total = 0;
    for (const product of cart ) {
        if(!product.quantity){
            product.quantity = 1;
        }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
    }

    // const total = cart.reduce((previous, product) => previous + product.price, 0)
    

    // const tortalReducer = (previous, product) =>previous + product.price;
    // const total = cart.reduce(tortalReducer, 0);

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    //Font Awesome 
    // const element = <FontAwesomeIcon icon={faCoffee} />

     return (
        <div>
              <h3>Order Summary</h3>
                <ul>
                <h4>Items Ordered: {totalQuantity} </h4>
                <p>Total: {total}</p>
                <p>Shipping: {shipping} </p>
                <p>Tax: {tax.toFixed(2)} </p>
                <p>Grand Total:{grandTotal.toFixed(2)} </p>
                
                </ul>
        </div>
    );
};

export default Cart;