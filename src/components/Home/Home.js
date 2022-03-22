import React from 'react';
import Photo from '../../images/Group 12.svg'
import './Home.css'
const Home = () => {
    return (
        <div className='Home'>
            <div className="home-container">
                <div className="description">
                    <small>Sale up to 70% off</small>
                    <br />
                    <br />
                    <br />
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <br />
                    <br />
                    <button id='shop-now'>SHOP NOW</button>
                </div>
                <div className="img">
                    <img src={Photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;