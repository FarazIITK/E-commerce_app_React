import React from "react";
import "./App.css";
import CartItem from "./cart_item";
import Order from "./Order";

function MyCart({ cart, products }) {
  return (
    <div className="cart">
      {cart.map((element) => {
        return (
          <CartItem
            key={element}
            name={products[element].title}
            price={products[element].price}
            imgLink={products[element].image}
          />
        );
      })}
      <Order cart={cart} products={products} />
    </div>
  );
}

export default MyCart;
