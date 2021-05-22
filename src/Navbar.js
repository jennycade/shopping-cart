import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {

  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/cart"><li>Cart ({ props.numItems })</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar