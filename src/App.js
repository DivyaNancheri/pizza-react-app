import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Customize from './components/Customize';

// import './App.css';

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });
  
  return (
    <div className="App">
      <Header />
      <Router>
       <Switch>
          <Route exact path="/">
            <Customize ingredients={ingredients} />
          </Route>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
