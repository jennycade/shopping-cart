import React from 'react';

import shopData from './data/shop-data.json';
import ShopItem from './ShopItem';

const Shop = (props) => {
  return (
    <div className="Shop">
      <h1>Shop</h1>
      { shopData.map(item => <ShopItem key={item.name} item={item} />) }
    </div>
  );
};

export default Shop;