import React from 'react';
import { useState } from 'react';

import './ShopItem.css'

const ShopItem = (props) => {
  const { item: { name, imageURL, price, descripton } } = props;

  const [quantity, setQuantity] = useState(1);
  const [input, setInput] = useState('1');

  const verifyQuantity = (e) => {
    const input = e.target.value;
    setInput(input);
    const number = parseInt(input);
    if (input >=1) {
      setQuantity(number);
    }
    
  }

  return (
    <div className="ShopItem">
      <img src={ imageURL } alt={ name } />
      <p className="itemName">{ name }</p>
      <p className="itemPrice">${ price }</p>
      <label>Quantity <input type="text" onChange={verifyQuantity} value={input} /></label>
      <button onClick={ () => {
        props.addToCart(props.item);
      } }>Add { quantity } to cart</button>

    </div>
  );
};

export default ShopItem;