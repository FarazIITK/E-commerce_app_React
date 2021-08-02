import React from "react";
import "./App.css";
import Heading from "./heading"; // contain nav bar
import Item from "./Item"; // contains all the products
import MyCart from "./MyCart"; // products that are in the cart
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // for routing

function App() {
  const products = require("./products.json"); // reading data from local JSON file
  const cart = []; // Initializing the items in cart as zero
  return (
    <Router>
      <>
        <Heading cart={cart} />
        <Switch>
          <Route path="/" exact>
            <div className="app">
              {products.map((product) => (
                <Item
                  name={product.title}
                  price={product.price}
                  imgLink={product.image}
                  id={product.id}
                  cart={cart}
                  key={product.id}
                />
              ))}
            </div>
          </Route>
          <Route path="/cart">
            <MyCart cart={cart} products={products} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
