import React from 'react';

import shopData from './data/shop-data.json';
import ShopItem from './ShopItem';

import './Shop.css';

const Shop = (props) => {
  return (
    <div className="Shop">
      <h1>Shop</h1>
      <div className="ShopItemDisplay">
        { shopData.map(item => <ShopItem display='shop' key={item.name} item={item} addToCart={ props.addToCart } />) }
      </div>
    </div>
  );
};

export default Shop;