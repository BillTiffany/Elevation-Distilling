import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";
import home1 from "../images/scspread.JPG";
import peachy4 from "../images/citpeach.JPG";
import gin from "../images/gin-hatchet.jpg";

const Home = () => {
  // const [verification, setVerification] = useState(false);
  // const navigation = useNavigate();
  // useEffect(() => {
  //   const checked = localStorage.getItem("verification");
  //   if (checked) {
  //     setVerification(JSON.parse(localStorage.getItem("verification")));
  //   } else {
  //     setVerification(false);
  //   }
  // }, []);
  // function verUser(e) {
  //   e.preventDefault();
  //   localStorage.setItem("verification", "true");
  //   window.location.reload();
  // }
  // function logout() {
  //   setVerification(false);
  //   localStorage.clear();
  // }
  // function underage() {
  //   alert(
  //     "While we appreciate your enthusiasm, you are too young. Come back when you're old enough"
  //   );
  // }
  // if (verification === true) {
  return (
    <div>
      <h2>
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
  // } else {
  //   return (
  //     <div className="box-container">
  //       <div className="verify-box">
  //         <h2>Lorem Ipsum{verification}</h2>
  //         <button className="button-yes" onClick={verUser}>
  //           I am 21 or over
  //         </button>
  //         <button className="button-no" onClick={underage}>
  //           I am under 21
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
};

export default Home;
