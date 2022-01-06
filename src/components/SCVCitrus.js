import React from "react";
// @ts-ignore
import cit1 from "../images/citrus.JPG";
// @ts-ignore
import cit2 from "../images/citrusleg.JPG";
// @ts-ignore
import cit3 from "../images/citruscocktail.JPG";
// @ts-ignore
import cit4 from "../images/citrusredcocktail.JPG";

const SCVCitrus = () => {
  return (
    <div>
      <h1 className="cit-header">Salt City Citrus®</h1>
      <h2>
        Crisp and refreshing, the perfect choice for a summer cooldown or a
        winter's wassail. It's always the right time for Salt City Citrus
      </h2>
      <img src={cit2} className="scv-pic" alt="cit2" />
      <img src={cit1} className="scv-pic" alt="cit1" />
      <img src={cit3} className="scv-pic" alt="cit3" />
      <img src={cit4} className="scv-pic" alt="cit4 red" />
    </div>
  );
};

export default SCVCitrus;
