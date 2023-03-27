import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, img, seller, quantity, price} = props.product;
    console.log(img);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>name :{name}</h4>
        </div>
    );
};
import './Product.css';
export default Product;