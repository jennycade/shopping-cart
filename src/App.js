import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [cartIndex, setCartIndex] = useState(0);

  const getCartTotal = () => {
    return cart.map(item => item.price).reduce((sum, value) => sum + value, 0);
  }

  const addToCart = (item, qty) => {
    let newCart = [...cart];
    let newCartIndex = cartIndex;
    for (let i=0; i<qty; i++) {
      const cartItem = {...item, key: newCartIndex};
      newCart = [...newCart, cartItem];
      newCartIndex = newCartIndex + 1;
    }
    // set state all at once
    setCart(newCart);
    setCartIndex(newCartIndex);
  }

  const removeFromCart = (itemKey) => {
    const indexToRemove = cart.findIndex(item => item.key === itemKey);

    let newCart = [...cart];
    newCart.splice(indexToRemove, 1);

    setCart(newCart);
  }

  // TODO: Learn about how github pages and react-router-dom interact.
  // https://jennycade.github.io/shopping-cart/ - navbar + blank
  // click home --> https://jennycade.github.io/
  // click shop --> https://jennycade.github.io/shop
  // click cart --> https://jennycade.github.io/cart

  return (
    <Router>
      <div className="App">
        <Navbar numItems={cart.length} total={ getCartTotal() } />
        <Switch>
          <Route path="/shopping-cart/" exact>
            <Home />
          </Route>
          <Route path="/shopping-cart/shop" exact>
            <Shop addToCart={ addToCart } />
          </Route>
          <Route path="/shopping-cart/cart">
            <Cart cartItems={ cart } removeFromCart={ removeFromCart } />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
