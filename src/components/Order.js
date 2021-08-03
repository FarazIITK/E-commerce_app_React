import React, { useState } from "react";
import "../styles/App.css";

function Order({ cart, products }) {
  // to update the total amount, as the products are added to the cart
  let [value, setValue] = useState("?");

  // to calculate the cart total based upon the number of products added
  const calculateValue = () => {
    value = 0;
    for (let i = 0; i < cart.length; i++) {
      value += products[cart[i]].price;
    }

    value = Math.floor(value * 0.9); // giving 10% discount on the total amount

    setValue(value); // update the totak amount
  };

  // function invoked on cicking the order button
  const orderPlaced = () => {
    alert("Order placed");
  };

  return (
    <div className="order">
      <div className="order-msg">
        {/* on clicking the dollar-sign, the total amount is displayed and the the total also updates when we add more items in the cart */}
        <h3 className="dollar-sign" onClick={calculateValue}>
          Total:
          <span> {value}</span> $
        </h3>
        <p>(Click on $ sign to get discounted total)</p>
      </div>
      {/* button to place order */}
      <button className="order-btn" onClick={orderPlaced}>
        Order now
      </button>
    </div>
  );
}

export default Order;
