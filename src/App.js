import "./App.css";
import React, { useState, useEffect } from "react";
import SCV from "./components/SCV";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
import Espresso from "./components/Espresso";
import SCVPeach from "./components/SCVPeach";
import SCVCitrus from "./components/SCVCitrus";
import LsGin from "./components/LsGin";
import Swag from "./components/Swag";
import Shop from "./components/Shop";
// import Popup from "./components/Popup";

export default function App() {
  const [verification, setVerification] = useState(false);
  useEffect(() => {
    const checked = localStorage.getItem("verification");
    if (checked) {
      setVerification(JSON.parse(localStorage.getItem("verification")));
    } else {
      setVerification(false);
    }
  }, []);
  function verUser(e) {
    e.preventDefault();
    localStorage.setItem("verification", "true");
    window.location.reload();
  }
  function logout() {
    setVerification(false);
    localStorage.clear();
    window.location.reload();
  }
  function underage() {
    alert(
      "While we appreciate your enthusiasm, you are too young. Come back and visit us when you're 21!"
    );
  }
  if (verification === true) {
    return (
      <div className="App">
        <Header logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="espresso" element={<Espresso />} />
          <Route path="SCV" element={<SCV />} />
          <Route path="SCVPeach" element={<SCVPeach />} />
          <Route path="SCVCitrus" element={<SCVCitrus />} />
          <Route path="LsGin" element={<LsGin />} />
          <Route path="swag" element={<Swag />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="headerage">Elevation Distilling</h3>
        <div className="box-contain">
          <h2 className="verifytext">Please Verify your Age</h2>
          <br></br>
          <div className="buttonbox">
            <button className="button-yes" onClick={verUser}>
              I am 21 or older
            </button>
            <button className="button-no" onClick={underage}>
              I am under 21
            </button>
          </div>
        </div>
      </div>
    );
  }
}
