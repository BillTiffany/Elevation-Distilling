import React from "react";
import swag1 from "../images/espresso-swag.jpg";
import swag2 from "../images/og-swag.jpg";
import swag3 from "../images/tower.jpg";

const Swag = () => {
  return (
    <div>
      <h1>Swag</h1>
      <h2>
        Whether it's a night out on the town or a day at the beach, we have the
        swag you need to look sharp and sip delicious. <br></br>Shades, Shots
        and Shirts! <br></br>Shop our exclusive line of merch now.
      </h2>
      <img src={swag1} alt="swag1" className="scv-pic" />
      <img src={swag2} alt="swag2" className="scv-pic" />
      <img src={swag3} alt="tower" className="scv-pic" />
    </div>
  );
};

export default Swag;
