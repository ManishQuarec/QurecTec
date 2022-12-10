import React from "react";
import "./CV.css";

function CV() {
  return (
    <div className="frame2">
      <input type="text" className="Name" placeholder="Full Name" />
      <input type="text" className="phoneNumber" placeholder="Phone Number" />
      <input type="text" className="email" placeholder="Email- I'd" />
      <input type="text" className="noticePeriod" placeholder="Notice Period" />
      <input
        type="text"
        className="reasonForChange"
        placeholder="Reason For Change"
      />
      <div className="UploadResume">Upload Your CV/Resume :</div>
      <div className="browseFile"> Browse File </div>
      <button className="submit"> Apply Now</button>
    </div>
  );
}

export default CV;
