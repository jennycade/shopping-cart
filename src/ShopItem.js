import React from 'react';
import { useState } from 'react';

import './ShopItem.css'

const ShopItem = (props) => {
  const { item: { name, imageURL, price } } = props;

  const [quantity, setQuantity] = useState(1);
  const [input, setInput] = useState('1');

  const verifyQuantity = (e) => {
    const input = e.target.value;
    setInput(input);
    const number = parseInt(input);
    if (input >= 1) {
      setQuantity(number);
    }
    
  }

  const itemButton = () => {
    if (props.display === 'cart') {
      return <button onClick={ () => {
        props.removeFromCart(props.item.key);
      } }>Remove from cart</button>
    }
    if (props.display === 'shop') {
      return (
        <div>
          <label>Quantity <input type="text" onChange={verifyQuantity} value={input} /></label>
          <button onClick={ () => {
            props.addToCart(props.item, quantity)
          } }>Add { quantity } to cart</button>
        </div>
      );
    }
  };

  // TODO: add the right quantity!

  return (
    <div className="ShopItem">
      <img src={ imageURL } alt={ name } />
      <p className="itemName">{ name }</p>
      <p className="itemPrice">${ price }</p>
      { itemButton() }

    </div>
  );
};

export default ShopItem;