import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, price, seller, ratings, img} = props.product
    return (
    <div className="card">
            <img src={img} className="card-img-top p-2 rounded-3" alt="" />
            <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Price:  ${price}</h6>
                    <p className="card-text">
                    <br />
                     <span>Manufacturer: {seller}</span>
                    <br />
                    <span>Rating: {ratings} stars</span>
                    </p>
            </div>
                <button id='add-to-cart card-footer'>Add to Card <i class="fa-solid fa-cart-plus"></i></button>
  </div>
);
};

export default Product;
