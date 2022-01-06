import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import home1 from "../images/scspread.JPG";
import peachy4 from "../images/citpeach.JPG";
import gin from "../images/gin-hatchet.jpg";

const Home = () => {
  return (
    <div>
      <h2 className="homehead">
        Welcome to Elevation Distilling, a Utah based distillery founded by two
        best friends.
      </h2>
      <img src={home1} alt="homeback" className="scv-pic" />
      <h2>
        {/* <button onClick={logout}>Logout</button> */}
        Introducing our Newest Flavors: <br></br>Crisp and refreshing Salt City
        Citrus®, Sweet and Smooth Salt City Peach® and our newest offering
        Lakeside Gin®
      </h2>
      <img src={peachy4} className="scv-pic" alt="peachy4" />
      <img src={gin} className="scv-pic" alt="ginhatchet" />
      <YoutubeEmbed />
    </div>
  );
};

export default Home;
