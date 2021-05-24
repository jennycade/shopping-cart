import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {

  return (
    <nav className="Navbar">
      <ul>
        <Link to="/shopping-cart/"><li>Home</li></Link>
        <Link to="/shopping-cart/shop"><li>Shop</li></Link>
        <Link to="/shopping-cart/cart"><li>Cart ({ props.numItems } items - ${props.total})</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar