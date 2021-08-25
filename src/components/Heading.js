import React from "react";
import "../styles/App.css";

import { Link } from "react-router-dom"; // to link logo and the cart image

function Heading({ cart, newArray, setNewArray }) {
  // const cartFormat = () => {
  //   for (let i = 0; i < 20; i++) {
  //     let count = 0;
  //     for (let j = 0; j < cart.length; j++) {
  //       if (i === cart[j]) {
  //         count++;
  //       }
  //     }
  //     if (count !== 0) {
  //       setNewArray({ i, count });
  //     }
  //   }
  // };
  const logoStyle = {
    // for modifying the nav logo
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav className="heading">
      {/* linking logo to home address*/}
      <Link to="/" style={logoStyle}>
        <h1 className="heading-title">Apni Dukaan</h1>
      </Link>
      {/* linking cart image to cart page */}
      <Link to="/cart">
        <img
          className="heading-image"
          src="https://img.icons8.com/FFFFFF/shopping-cart"
          alt="not found"
        />
      </Link>
    </nav>
  );
}

export default Heading;
