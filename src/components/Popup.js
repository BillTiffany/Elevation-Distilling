import React from "react";

const Popup = (props) => {
  return (
    <div className="box-container">
      <div className="verify-box">
        <button className="button-yes" onClick={props.verUser}>
          I am 21 or over
        </button>
        <button className="button-no">I am under 21</button>
      </div>
    </div>
  );
};

export default Popup;
