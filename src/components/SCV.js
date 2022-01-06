import React from "react";
import pic from "../images/og-limes.jpg";
import pic2 from "../images/og-martini.jpg";
import pic3 from "../images/og-red.jpg";
import pic4 from "../images/og-shrimp.jpg";
import pic5 from "../images/bearlake.JPG";

const SCV = () => {
  return (
    <div>
      <h1 className="og-red">The Original Salt City Vodka®</h1>
      <h2>
        Our classic sipping Vodka that started it all. Enjoy it by the shot, add
        to your favorite cocktail or just slowly sip over ice. No matter how you
        do it there's no wrong way to enjoy the Original Salt City Vodka
      </h2>
      <img src={pic5} className="scv-pic" alt="bearlake-og" />
      <img src={pic2} className="scv-pic" alt="og-martini" />
      <img className="scv-pic" src={pic} alt="og-scv" />
      <img src={pic3} className="scv-pic" alt="og-red" />
      <img src={pic4} className="scv-pic" alt="og-shrimp" />
    </div>
  );
};

export default SCV;
