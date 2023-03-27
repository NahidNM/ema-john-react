import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name, img, seller, quantity, price, ratings} = props.product;
    console.log(img);
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>Price:${price}</p>
            <p>Manufacter: {seller}</p>
            <p>Rating : {ratings}</p>
           </div>
            <button className='btn-cart'>add to cart</button>
        </div>
    );
};
import './Product.css';
export default Product;