import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {

    console.log(cart);
    
    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
         totalPrice = totalPrice +( product.price * product.quantity);
         shippingCharge = shippingCharge + product.shipping
    }
    const tax = parseInt((totalPrice / 5).toFixed(2));
    const grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart'>
            <div className='title'>
                    <h4>Order  Summary</h4>
                </div>
                <div className='bill-details'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: {grandTotal}</h5>
                </div>
                <div className='btn-area'>
                    <button className="clear">Clear Cart <i className="fa-solid fa-trash-can"></i></button>
                        <button className="review">Review Order <i className="fa-solid fa-arrow-right"></i></button>
                </div>
        </div>
    );
};

export default Cart;