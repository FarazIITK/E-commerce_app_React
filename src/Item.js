import React, { useState } from "react";
import "./App.css";

function Item({ name, price, imgLink, id, cart }) {
  const [, setElement] = useState(cart);

  const addToCart = () => {
    if (cart.indexOf(id - 1) === -1) {
      setElement(cart.push(id - 1));
    } else {
      alert("Product already in cart");
    }
  };

  return (
    <div className="item">
      <h3>{name}</h3>
      <h4>{price} $</h4>
      <img className="item-img" src={imgLink} alt="Not found" />
      <button className={"add-cart "} onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Item;
