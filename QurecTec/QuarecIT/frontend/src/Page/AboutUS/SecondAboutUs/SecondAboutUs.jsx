import React from "react";
import "./SecondAboutUs.css";
import star from "../../../Image/Star.png";

function SecondAboutUs() {
  return (
    <div className="SecondAboutUs">
      <div className="contain-1">
        <div className="image-1">
          <img src={star} alt="star" />
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. unknown printer took
            a galley of type and scrambled it
          </p>
        </div>
      </div>
      <div className="contain-2">
        <div className="image-2">
          <img src={star} alt="star" />
        </div>
        <div className="vision">
          
          <h2>Our Vission</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. unknown printer took
            a galley of type and scrambled it
          </p>
        </div>
      </div>

      <div className="contain-3">
        <div className="image-3">
          <img src={star} alt="star" />
        </div>
        <div className="values">
          <h2>Core Values</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. unknown printer took
            a galley of type and scrambled it
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondAboutUs;
