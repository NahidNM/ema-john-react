import React from 'react';
import logo from './../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
                <img src={logo} alt="" />
               <div className='nav-icon'>
               <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
               </div>
        </div>
        
    );
};

export default Header;