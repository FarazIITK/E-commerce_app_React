import React from "react";
import "../styles/App.css";

import { Link } from "react-router-dom"; // to link logo and the cart image

function Heading({ cart }) {
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
