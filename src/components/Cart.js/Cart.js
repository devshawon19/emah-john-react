import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <div className='title'>
                    <h4>Order  Summary</h4>
                </div>
                <div className='bill-details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${}</p>
                <p>Total Shipping Charge: ${}</p>
                <p>Tax: ${}</p>
                <h5>Grand Total: {}</h5>
                </div>
                <div className='btn-area'>
                    <button className="clear">Clear Cart <i class="fa-solid fa-trash-can"></i></button>
                        <button className="review">Review Order <i class="fa-solid fa-arrow-right"></i></button>
                </div>
        </div>
    );
};

export default Cart;