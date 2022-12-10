import React from "react";
import "./PortImage.css";
// import img1 from "../../../Image/portImg.png";

function PortImage(props) {
  return (
    <>
      <div className="fit">
        <div className="PortImage">
          <img src={props.image} alt="" />
          <div className="curve">
            <div className="uperdata">{props.uperdata}</div>
            <div className="lowerData">{props.lowerData}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortImage;
