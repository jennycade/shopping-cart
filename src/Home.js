import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>Why don't you check out the <Link to="/shopping-cart/shop">shop</Link>?</p>
    </div>
  );
};

export default Home;