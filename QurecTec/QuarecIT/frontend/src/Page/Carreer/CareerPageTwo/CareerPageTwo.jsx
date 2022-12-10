import React from "react";
import "./CareerPageTwo.css";
import MonthlyPizza from "../../../Image/careers/MonthlyPizza.png";
import DaysWorking from "../../../Image/careers/DaysWorking.png";
import DaysWorking2 from "../../../Image/careers/DaysWorking2.png";
import EngagementActivites from "../../../Image/careers/EngagementActivites.png";
import FlexibleHours from "../../../Image/careers/FlexibleHours.png";
import FlexibleTiming from "../../../Image/careers/FlexibleTiming.png";

function CareerPageTwo() {
  return (
    <div className="CareerPageTwo">
      <div className="HeadingWhy"> Why Choose US</div>
      <div className="secondHalf">
        <div className="secondHalfLeft">
          <div className="secondHalfLeftSide">
            <img src={FlexibleTiming} alt="Image" />
            <img src={FlexibleHours} alt="Image" />
            <img src={DaysWorking} alt="Image" />
          </div>
        </div>
        <div className="secondHalfRight">
          <div className="secondHalfRightSide">
            <img src={DaysWorking2} alt="Image" />
            <img src={EngagementActivites} alt="Image" />
            <img src={MonthlyPizza} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPageTwo;
