import React from "react";
import dabois from "../images/dabois1.jpg";
import dabois2 from "../images/aaronjessnew.jpg";
import dabois3 from "../images/friends.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1 className="abouthead">About Us</h1>
      <h2>
        "Elevation Distilling is the realization of a dream... A dream that
        began when two friends risked everything to take the road less traveled.
        This is home to us - so we handmake every bottle with pure Utah mountain
        spring water to create exceptionally smooth sipping vodka. With the
        belief that through hard work you make your own luck, We proudly invite
        you to join us in celebrating life's finest moments as you chase your
        own dreams"
      </h2>
      <br />
      <div />
      <img src={dabois3} alt="cheers3" className="scv-pic" />
      <img src={dabois} alt="cheers" className="scv-pic" />
      <img src={dabois2} alt="cheers2" className="scv-pic" />
      <br />
      <p className="scv-about-bio2">Cheers,</p>
      <br />
      <p className="signature">Aaron & Jesse</p>
    </div>
  );
};

export default AboutUs;
