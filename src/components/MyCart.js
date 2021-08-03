import React from "react";
import "../styles/App.css";
import CartItem from "./CartItem"; // for the display block of each item added to cart
import Order from "./Order"; // for the display block of total amount and te order button

function MyCart({ cart, products }) {
  return (
    <div className="cart">
      {/* for each item in the cart, a display block is created */}
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
      {/* creates the display block with total amount and the order button */}
      <Order cart={cart} products={products} />
    </div>
  );
}

export default MyCart;
