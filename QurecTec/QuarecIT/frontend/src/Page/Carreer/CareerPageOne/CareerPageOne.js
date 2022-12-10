import React from "react";
import "./CareerPageOne.css";
import year from "../../../Image/yearsExpertise.png";
import employes from "../../../Image/employes.png";
import Hiring from "../../../Image/Hiring.png";

function CareerPageOne() {
  return (
    <div className="CareerPageOne">
      <div className="leftCareer">
        <div className="leftcareer1">
          <div className="whyJoinUS">Why Join Us?</div>
          <div className="joinTheBest"> Join The Best. Be The Best</div>
          <p>
            Quarec IT Hub is a future-ready web and mobile app development
            company serving to drive the digital revolution. Since its inception
            in 1998, our friendly and diverse team of 200+ professionals aiding
            businesses of every niche globally.Quarec IT Hub is a future-ready
            web and mobile app development company serving to drive the digital
            revolution. Since its inception in 1998, our friendly and diverse
            team of 200+ professionals aiding businesses of every niche
            globally.
          </p>
          <div className="leftCareerImage">
            <img className="employes" src={employes} />
            <img className="year" src={year} />
          </div>
        </div>
      </div>
      <div className="rightCareer">
        <img src={Hiring} alt="Image" />
      </div>
    </div>
  );
}

export default CareerPageOne;
