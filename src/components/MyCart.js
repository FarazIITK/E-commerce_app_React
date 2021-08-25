import React from "react";
import "../styles/App.css";
import CartItem from "./CartItem"; // for the display block of each item added to cart
import Order from "./Order"; // for the display block of total amount and te order button

function MyCart({ cart, products }) {
  let newArray = [];
  const renderCartProduct = () => {
    cart.forEach((value, key) =>
      newArray.push(
        <CartItem
          key={key}
          name={products.find((x) => x.id === key).title}
          price={products.find((x) => x.id === key).price}
          imgLink={products.find((x) => x.id === key).image}
          count={value}
        />
      )
    );
  };
  return (
    <div className="cart" onLoad={renderCartProduct()}>
      {/* for each item in the cart, a display block is created */}
      <ul>{newArray}</ul>
      {/* creates the display block with total amount and the order button */}
      <Order cart={cart} products={products} />
    </div>
    // <CartItem
    //   key={2}
    //   name={products[2].title}
    //   price={products[2].price}
    //   imgLink={products[2].image}
    //   count={4}
    // />
  );
}

export default MyCart;
