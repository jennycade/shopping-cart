import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

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
