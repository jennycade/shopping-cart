import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar numItems={5} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
