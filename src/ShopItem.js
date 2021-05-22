import React from 'react';
import { useState } from 'react';

const ShopItem = (props) => {
  // name
  // image
  // price
  // description

  // quantity input
  // add to cart button
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
      <title>{ props.name }</title>
      <img src={ props.imageURL } alt={ props.name } />
      <p>${ props.price }</p>
      <label>Quantity <input type="text" onChange={verifyQuantity} value={input} /></label>
      <button>Add { quantity } to cart</button>

    </div>
  );
};

export default ShopItem;