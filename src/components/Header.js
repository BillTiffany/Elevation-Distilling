import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <h3 className="header">Elevation Distilling®</h3>
      <div className="header-container">
        <Link id="header-link" to="/">
          Home
        </Link>
        <Link id="header-link" to="/SCV">
          Salt City Vodka
        </Link>
        <Link id="header-link" to="/Espresso">
          Salt City Espresso
        </Link>
        <Link id="header-link" to="/SCVPeach">
          Salt City Peach
        </Link>
        <Link id="header-link" to="/SCVCitrus">
          Salt City Citrus
        </Link>
        <Link id="header-link" to="/LsGin">
          Lake Side Gin
        </Link>
        <Link id="header-link" to="/swag">
          Swag
        </Link>
        <Link id="header-link" to="/shop">
          Shop
        </Link>
        <Link id="header-link" to="/about">
          About Us
        </Link>
        <Link to="/" id="header-link" className="logout" onClick={props.logout}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
