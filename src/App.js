import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [cartIndex, setCartIndex] = useState(0);

  const addToCart = (item, qty) => {
    console.log(`App.addToCart() called ${qty} times.`);
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

  // TODO: write removeFromCart()

  return (
    <Router>
      <div className="App">
        <Navbar numItems={cart.length} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop" exact>
            <Shop addToCart={ addToCart } />
          </Route>
          <Route path="/cart">
            <Cart cartItems={ cart } />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
