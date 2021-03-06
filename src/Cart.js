import React from 'react';

import ShopItem from './ShopItem';

import './Cart.css';

const Cart = (props) => {

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <ul>
        { props.cartItems.map((item) => {
          return (
            <ShopItem item={item} key={item.key} display='cart' removeFromCart={ props.removeFromCart } />
          );
        }) }
      </ul>
    </div>
  );
};

export default Cart;