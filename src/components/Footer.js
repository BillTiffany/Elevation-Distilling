import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link id="footer-link" to="/">
        Home
      </Link>
      <Link id="footer-link" to="/about">
        About Us
      </Link>
      <Link id="footer-link" to="/layout">
        Salt City Espresso
      </Link>
      <Link id="footer-link" to="/SCV">
        Salt City Vodka
      </Link>
      <Link id="footer-link" to="/SCVPeach">
        Salt City Peach
      </Link>
      <Link id="footer-link" to="/SCVCitrus">
        Salt City Citrus
      </Link>
      <Link id="footer-link" to="/LsGin">
        Lake Side Gin
      </Link>
    </div>
  );
};

export default Footer;
