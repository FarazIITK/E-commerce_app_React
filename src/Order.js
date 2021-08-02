import React, { useState } from "react";
import "./App.css";

function Order({ cart, products }) {
  let [value, setValue] = useState("?");
  const calculateValue = () => {
    value = 0;
    for (let i = 0; i < cart.length; i++) {
      value += products[cart[i]].price;
    }

    value = Math.floor(value * 0.9);

    setValue(value);
  };

  const orderPlaced = () => {
    alert("Order placed");
  };

  return (
    <div className="order">
      <div className="order-msg">
        <h3 className="dollar-sign" onClick={calculateValue}>
          Total:
          <span> {value}</span> $
        </h3>
        <p>(Click on $ sign to get discounted total)</p>
      </div>
      <button className="order-btn" onClick={orderPlaced}>
        Order now
      </button>
    </div>
  );
}

export default Order;
