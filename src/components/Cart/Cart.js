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
     return (
        <div>
              <h3>Order Summary</h3>
                <h4>Items Ordered: {props.cart.length} </h4>
                <p>Total: {total}</p>
        </div>
    );
};

export default Cart;