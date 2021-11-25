import React from 'react';
import imgLogo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
       <img src={imgLogo} alt="" />
            <nav className="nav-bar">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage</a>
                <a href="/inventory">Inventory</a>


            </nav>
        </div>
    );
};

export default Header;