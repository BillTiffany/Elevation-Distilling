import React from "react";
import espresso1 from "../images/espresso-gold.jpg";
import espresso2 from "../images/espresso-mug.jpg";
import espresso3 from "../images/espresso-lakeside.jpg";
import espresso4 from "../images/espresso-bw.jpg";
import espresso5 from "../images/espresso-flower.jpg";
import EspressoEmbed from "./espressoembed";

const Layout = () => {
  return (
    <div>
      <h1 className="espresso-blue">Salt City Espresso®</h1>
      <h2>
        Bold, smooth and elegant. Start the evening here or wake up your weekend
        with a splash in your morning Joe. We've crafted this espresso for
        sipping, mixing or warming up next to a roaring fire.
      </h2>
      <div>
        <EspressoEmbed />
        <img
          className="scv-pic"
          src={espresso3}
          alt="espresso 3"
          loading="lazy"
        />
        <img
          className="scv-pic"
          src={espresso2}
          alt="espresso 2"
          loading="lazy"
        />
        <img
          className="scv-pic"
          src={espresso1}
          alt="espresso 1"
          loading="lazy"
        />
        <img
          className="scv-pic"
          src={espresso4}
          alt="espresso 4"
          loading="lazy"
        />
        <img
          className="scv-pic"
          src={espresso5}
          alt="espresso 5"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Layout;
