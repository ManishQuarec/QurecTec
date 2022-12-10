import React from "react";
import "./CareerPageFour.css";
import CV from "../../../component/CV/CV";
import JoinTeam from '../../../Image/JoinTeam.png'

function CareerPageFour() {
  return (
    <div className="CareerPageFour">
      <div className="CareerPageFourLeft">
        <div className="CareerPageFourMargin">
          <div className="didntFind">
            Didn't Find Correct Position For You ?
          </div>
          <div className="fillThisForm">
            Fill This Form & share Your Resume /CV With Us
          </div>
          <div className="cvform">
            <CV />
          </div>
        </div>
      </div>
      <div className="CareerPageFourRight">
        <img src={JoinTeam} alt="Image" className="JoinTeam" />
      </div>
    </div>
  );
}

export default CareerPageFour;
