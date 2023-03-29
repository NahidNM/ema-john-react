import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const {cart} = props;
    // console.log(cart);

    let totalPrice =0;
    let totalShipping = 0
    let quantity = 0
    for(let product of cart){
      // console.log(product.img)
        
      // if(product.quantity === 0){
      //   product.quantity =1;
      // }
      product.quantity = product.quantity || 1;
        totalPrice  = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;   
    }
      const tax = totalPrice*7/100;
      const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Order summary</h2>
          <p>select items : {quantity}</p>
         {/* <img src={product.img} alt="" /> */}
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping: ${totalShipping}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};
import './Cart.css';
export default Cart;