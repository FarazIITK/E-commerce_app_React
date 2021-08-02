import React from "react";
import "./App.css";

function CartItem({ name, price, imgLink }) {
  return (
    <div className="cart-item">
      <img className="cart-img" src={imgLink} alt="Not found" />
      <h3>{name}</h3>
      <p className="cart-price">{price} $</p>
    </div>
  );
}

export default CartItem;
