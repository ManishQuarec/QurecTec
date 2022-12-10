import React from "react";
import "./ScrollerComponent.css";
import image1 from '../../../Image/Vacancy/Android.png'

function ScrollerComponent(props) {
  return (
    <div className="ScrollerComponent">
      <div className="IconImg"><img src={props.Image} alt="Image1" className="IconImage" /></div>
      <div className="jobDescription">
        <div className="Headers">
          <div className="designation">{props.designation}</div>
          <div className="experience">Experience</div>
          <div className="positions"> Position </div>
          <div className="qualification">Qualification</div>
        </div>
        <div className="headerData">
          <div className="yearsOfExperince"> {props.experience}</div>
          <div className="positionsNo">{props.position}</div>
          <div className="qualifictionData">
           {props.qualification}
          </div>
        </div>
      </div>
      <div className="submitButton">
        <button className="viewDetail">View Details</button>
        <button className="applyNow">Apply Now</button>
      </div>
    </div>
  );
}

export default ScrollerComponent;
