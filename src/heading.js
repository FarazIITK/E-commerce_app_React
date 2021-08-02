import React from "react";
import "./App.css";

import { Link } from "react-router-dom";

function Heading({ cart }) {
  const logoStyle = {
    // for modifying the nav logo
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav className="heading">
      <Link to="/" style={logoStyle}>
        <h1 className="heading-title">Apni Dukaan</h1>
      </Link>
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
