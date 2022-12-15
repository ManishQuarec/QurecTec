import React from "react";
import "./AboutUs.css";
import img1 from "../../Image/homeImage/2.png";
import employes from "../../Image/employes.png";
import years from "../../Image/yearsExpertise.png";
import SecondAboutUs from "./SecondAboutUs/SecondAboutUs";
import ThirdAboutUs from "./ThirdAboutUS/ThirdAboutUs";
import FourthAboutus from "./FourthAboutus/ForthAboutus";
import Client from "../../component/Client/Client";
import Quote from "../../component/Quote/Quote";
import Nav from "../../component/Nav/Nav";



function AboutUs() {

  function load() {
    window.scrollTo(0, 0);
  }
  return (
    <>
   
    <Nav/>
    {load()}
    <div className="About">
      <div className="left-About">
        <div className="club-left">
          <div className="clubleftText">
            <div className="who">Who We Are?</div>
            <div className="Us">This is Us</div>
            <div className="statement">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda quisquam maxime numquam recusandae dolore, non hic suscipit voluptas maiores veniam molestiae laboriosam consectetur harum sit, voluptatem placeat ex, fugiat vero. Necessitatibus rem, dolorem maxime, placeat dolorum corrupti tempora quidem sit doloremque adipisci quae. Sunt inventore natus totam quas vero impedit, iste voluptas animi odio atque doloribus aut reprehenderit alias maxime ex aliquam neque accusamus 
            </div>
          </div>
          <div className="alltime">
            <img src={employes} alt="Image" className="emp" />
            <img src={years} alt="Image" className="years" />
          </div>
        </div>
      </div>

      <div className="Right-About">
        <div className="club-right">
          <img src={img1} alt="image" className="aboutImg1" />
        </div>
      </div>
    </div>
    <SecondAboutUs/>
    <ThirdAboutUs/>
    <FourthAboutus/>
    <Client/>
    <Quote value={{ value: true }} />
    </>
  );
}

export default AboutUs;
