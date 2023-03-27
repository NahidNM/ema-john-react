import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        // fetch('products.json')
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
            products.map(product => <Product 
                key={product.id}
                name ={product.name}
                product ={product}
                ></Product>)
            }
            
            </div>
            <div className='cart-container'>
            <h1>hasan</h1>
            </div>
        </div>
    );
};
import './Shop.css'
export default Shop;