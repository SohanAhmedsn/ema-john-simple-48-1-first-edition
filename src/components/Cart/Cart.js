import React from 'react';
import './Cart.css';
import Product from './../Products/Product';

const Cart = (props) => {
    const { cart } = props;
    // let total = 0;
    // for (const product of cart ) {
    // total = total + product.price;
    // }

    // const total = cart.reduce((previous, product) => previous + product.price, 0)

    const tortalReducer = (previous, product) =>previous + product.price;
    const total = cart.reduce(tortalReducer, 0);
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;

     return (
        <div>
              <h3>Order Summary</h3>
                <ul>
                <h4>Items Ordered: {props.cart.length} </h4>
                <p>Total: {total}</p>
                <p>Shipping: {shipping} </p>
                <p>Tax: {tax.toFixed(2)} </p>
                <p>Grand Total:{grandTotal.toFixed(2)} </p>
                </ul>
        </div>
    );
};

export default Cart;