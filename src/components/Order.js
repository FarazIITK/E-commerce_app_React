import React, { useState, useEffect } from "react";
import "../styles/App.css";

function Order({ cart, products }) {
  // to update the total amount, when the products are added to the cart
  let [value, setValue] = useState(0);

  // to calculate the cart total based upon the number of products added
  const calculateValue = () => {
    value = 0;
    for (let i = 0; i < cart.length; i++) {
      value += products[cart[i]].price;
    }
    setValue(value);
  };

  // to update the cart total
  useEffect(() => {
    calculateValue();
  });

  // function invoked on cicking the order button
  const orderPlaced = () => {
    alert("Order placed");
  };

  return (
    <div className="order">
      <div className="order-msg">
        <h3>
          Total:
          <span> {value}</span> $
        </h3>
      </div>
      {/* button to place order */}
      <button className="order-btn" onClick={orderPlaced}>
        Order now
      </button>
    </div>
  );
}

export default Order;
