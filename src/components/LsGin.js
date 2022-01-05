import React from "react";
import gin1 from "../images/ginsnow.JPG";
import gin2 from "../images/gin-river.jpg";
import gin3 from "../images/gin-hatchet.jpg";
import gin4 from "../images/gin-lake.jpg";
import gin5 from "../images/gin-ctail.jpg";

const LsGin = () => {
  return (
    <div>
      <h1>Lake Side Gin®</h1>
      <h2>
        Our newest addition to the Elevation line is our Lakeside Gin. We took
        our time to craft this spirit just for your drinking pleasure. The high
        notes of juniper marry with our unique blend of botanicals to give you a
        Gin that makes your cocktail sing. Yet it is smooth enough to enjoy on
        the rocks, by the lake.. at your leisure.
      </h2>
      <img src={gin4} alt="gin4" className="scv-pic" />
      <img src={gin1} alt="gin1" className="scv-pic" />
      <img src={gin3} alt="gin3" className="scv-pic" />
      <img src={gin5} alt="gin5" className="scv-pic" />
      <img src={gin2} alt="gin2" className="scv-pic" />
    </div>
  );
};

export default LsGin;
