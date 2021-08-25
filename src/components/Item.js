import React from "react";
import "../styles/App.css";

function Item({ name, price, imgLink, id, cart, setCart }) {
  // const [, setElement] = useState(cart); // to update the cart array each time we click the 'add to cart' button

  // checks if the product is present in the cart or not
  // If the product is not present in the cart, then it adds the index of the product in the cart array
  const addToCart = () => {
    if (cart.has(id)) {
      let value = cart.get(id);
      setCart(cart.set(id, ++value));
    } else {
      setCart(cart.set(id, 1));
    }
    alert(`Product added successfully and its quantity is ${cart.get(id)}`);
  };

  return (
    <div className="item">
      {/* displays name, price and image of individual product */}
      <h3>{name}</h3>
      <h4>{price} $</h4>
      <img className="item-img" src={imgLink} alt="Not found" />
      {/* adding event listener to each button, to add it to the cart and update the cart array */}
      <button className={"add-cart "} onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

export default Item;
