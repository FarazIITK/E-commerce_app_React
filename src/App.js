import React from "react";
import "./styles/App.css"; // importing style sheet
import Heading from "./components/Heading"; // contain nav bar
import Item from "./components/Item"; // contains all the products
import MyCart from "./components/MyCart"; // for cart page
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // for routing

function App() {
  const products = require("./data/products.json"); // reading data from local JSON file
  const cart = []; // Initializing the items in cart as zero, this array stores the index of the products in cart
  return (
    <Router>
      <>
        {/* generates the nav bar */}
        <Heading cart={cart} />
        {/* nav bar always stays on page, routing applied to home page and cart page */}
        <Switch>
          {/* routing for home page */}
          <Route path="/" exact>
            <div className="app">
              {/* adding each product on the page */}
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
          {/* routing for cart page */}
          <Route path="/cart">
            <MyCart cart={cart} products={products} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
