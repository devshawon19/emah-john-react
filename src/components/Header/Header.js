import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav>
           <div className='container'>
               <div className='logo'>
                       <a href=""> <img src={logo} alt="" /></a>
               </div>
               <div className='menu'>
                        <ul className='menu-list'>
                            <li><a href="">Shop</a></li>
                            <li><a href="">Orders</a></li>
                            <li><a href="">Inventory</a></li>
                            <li><a href="">About</a></li>
                        </ul>
               </div>
           </div>
        </nav>
    );
};



export default Header;