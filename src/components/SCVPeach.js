import React from "react";
import peachy1 from "../images/peachcocktail.JPG";
import peachy2 from "../images/peachharvest.JPG";
import peachy3 from "../images/blackberry-mule.jpg";

const SCVPeach = () => {
  return (
    <div>
      <h1 className="peach-header">Salt City Peach®</h1>
      <h2>
        Our harvest peach vodka is just the right amount of sweet and smooth. It
        makes for a perfect splash of flavor in any cocktail or just enjoy it
        over ice.
      </h2>
      <div>
        <img src={peachy2} className="scv-pic" alt="peachy 2" />
        <img src={peachy1} className="scv-pic" alt="peachy 2" />
        <img src={peachy3} className="scv-pic" alt="peachy 3" />
      </div>
    </div>
  );
};

export default SCVPeach;
