import React from 'react';

import './Cart.css';

const Cart = (props) => {
  console.log(props.cartItems);

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <ul>
        { props.cartItems.map((item) => {
          return (<li>{item.name}</li>);
        }) }
      </ul>
    </div>
  );
};

export default Cart;