import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);

    useEffect( ()=>{
        // fetch('products.json')
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])

    useEffect(()=>{
        const savedCard = [];
        // console.log(products);

        const storedCart = getShoppingCart();
   for(let id in storedCart){
   const addedProduct = products.find(product=> product.id == id);
//   console.log(addedProduct);
if(addedProduct){
    const quantity = storedCart[id];
addedProduct.quantity = quantity;
// console.log(addedProduct);
savedCard.push(addedProduct);
}
 
   }
setCart(savedCard);
    },[products])

    const handleAddToCart = (product) =>{
        const newCart= [...cart, product];
        setCart(newCart)
        addToDb(product.id)   
     }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
            products.map(product => <Product 
                key={product.id}
                name ={product.name}
                product ={product}
                handleAddToCart ={handleAddToCart}
                ></Product>)
            }
            
            </div>
            <div className='cart-container'>
          <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
import './Shop.css'
export default Shop;