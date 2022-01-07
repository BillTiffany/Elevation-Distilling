import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import pint from "../images/pint.png";
import youtube from "../images/youtube.png";
import google from "../images/googs.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link id="footer-link" to="/">
        Home
      </Link>
      {/* <Link id="footer-link" to="/about">
        About Us
      </Link> */}
      <Link id="footer-link" to="/Espresso">
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
      <Link id="footer-link" to="/swag">
        Swag
      </Link>
      <Link id="footer-link" to="/about">
        About Us
      </Link>
      <div className="socials">
        <a href="https://www.facebook.com/SaltCityVodka">
          <img src={facebook} id="sbox" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/saltcityespresso/?hl=en">
          <img src={insta} id="sbox" alt="insta" />
        </a>
        <a href="https://twitter.com/saltcityvodka?lang=en">
          <img src={twitter} id="sbox" alt="twitter" />
        </a>
        <a href="https://www.pinterest.com/pin/538180224200792987/">
          <img src={pint} id="sbox" alt="pinterest" />
        </a>
        <a href="https://www.youtube.com/channel/UC5W1ewIzdSgyR_8G2VNTCCQ/videos">
          <img src={youtube} id="sbox" alt="youtube" />
        </a>
        <a href="https://www.google.com/search?q=salt+city+vodka&sxsrf=AOaemvITcy6ZL9BmR1TSWUH-qcn079kHaw%3A1641424260954&ei=hCXWYefYOc-1tAbs_bj4BQ&ved=0ahUKEwjnqv_v3Zv1AhXPGs0KHew-Dl8Q4dUDCA4&uact=5&oq=salt+city+vodka&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCAgAEIAEEMkDMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoHCCMQsAMQJzoKCAAQRxCwAxDJAzoICAAQkgMQsAM6BwgAEEcQsANKBAhBGABKBAhGGABQgQdY3BdgxxloAXACeACAAW-IAegFkgEDOS4xmAEAoAEByAEFwAEB&sclient=gws-wiz">
          <img src={google} id="sbox" alt="google" />
        </a>
        <p className="footertext">
          Copyright 2022 Elevation Distilling LLC, all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
