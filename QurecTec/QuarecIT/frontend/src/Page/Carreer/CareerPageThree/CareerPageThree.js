import React from "react";
import "./CareerPageThree.css";
import Portfolio from "../../../Page/Portfolio/Portfolio";
import ScrollerComponent from "./ScrollerComponent";
import Android from "../../../Image/Vacancy/Android.png";
import apple from "../../../Image/Vacancy/apple.png";
import figma from "../../../Image/Vacancy/figma.png";
import larvel from "../../../Image/Vacancy/larvel.png";
import php from "../../../Image/Vacancy/php.png";
import react from "../../../Image/Vacancy/react.png";
import seo from "../../../Image/Vacancy/seo.png";
import Technical from "../../../Image/Vacancy/Technical.png";

function CareerPageThree() {
  const datas = [
    {
      id: 1,
      imgSrc: Android,
      designation: "Sr.Android Developer",
      experience: " 4 to 6 Years",
      position: "03",
      qualification: "MCA,BE/B.Tech, BCA,",
    },
    {
      id: 2,
      imgSrc: php,
      designation: "Php Developer Intern",
      experience: " Fresher",
      position: "02",
      qualification: "BE/B.Tech, BCA,.",
    },
    {
      id: 3,
      imgSrc: figma,
      designation: "Jr. UI-UX Designer",
      experience: " 0 To 6 Months",
      position: "01",
      qualification: "MCA,BE/B.Tech, BCA",
    },
    {
      id: 4,
      imgSrc: Technical,
      designation: "Technical Project Manager",
      experience: " 6 To 7 Years",
      position: "02",
      qualification: "MCA,BE/B.Tech, BCA,",
    },
    {
      id: 5,
      imgSrc: react,
      designation: "React Developer",
      experience: " 4 to 6 Years",
      position: "03",
      qualification: "MCA,BE/B.Tech, BCA,",
    },
    {
      id: 6,
      imgSrc: larvel,
      designation: "Sr. Laravel Developer",
      experience: " Fresher",
      position: "02",
      qualification: "MCA,BE/B.Tech",
    },
    {
      id: 7,
      imgSrc: php,
      designation: "Sr.Android Developer",
      experience: " 4 to 6 Years",
      position: "03",
      qualification: "MCA,BE/B.Tech, BCA",
    },
    {
      id: 8,
      imgSrc: apple,
      designation: "iOS / Sr. iOS Developer",
      experience: " 0 To 6 Months",
      position: "01",
      qualification: "BCA,M.Tech,Diploma-IT, BSC-IT",
    },
  ];

  return (
    <div className="CareerPageThree">
      <div className="CureentOpening">Current Openings We Have</div>
      <Portfolio value={{ value: false }} />
      <div className="ScrollerBlock">
        {datas.map((item) => {
          return (
            <>
              <ScrollerComponent
                key={item.id}
                Image={item.imgSrc}
                designation={item.designation}
                experience={item.experience}
                position={item.position}
                qualification={item.qualification}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CareerPageThree;
