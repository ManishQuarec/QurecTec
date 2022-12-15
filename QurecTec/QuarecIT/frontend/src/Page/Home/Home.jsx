import React from "react";
import "./Home.css";
import Nav from "../../component/Nav/Nav";
import img1 from "../../Image/homeImage/1.png";
import project from "../../Image/Projects.png";
import client from "../../Image/Clients.png";
import employes from "../../Image/employes.png";
import yearExpertise from "../../Image/yearsExpertise.png";
import retension from "../../Image/retension.png";
import industries from "../../Image/industries.png";
import google from "../../Image/Google.png";
import clutch from "../../Image/Clutch.png";
import upwork from "../../Image/upwork.png";
import HomePage3 from "./HomePage3/HomePage3";
import Client from "../../component/Client/Client";
import Quote from "../../component/Quote/Quote";
import Swipper from "../../Page/Home/Swipper/Swipper";

function Home() {
  function  load() {
    window.scrollTo(0, 0);
  }
  return (
    <>
    <Nav/>
    {load()}
     
        <Swipper />
      

      <div className="second-container">
        <div className="container">
          <div className="container-one">
            <div className="word">
              <h2 className="TopWeb">
                Top Web and Mobile App Development Company
              </h2>
              <div className="para">
                <p>
                  Silicon IT Hub is a forward-thinking Web and Mobile App
                  Development Company in India, providing a competitive edge to
                  businesses across the world. With years of industry
                 
                </p>

                <p>
                  With years of industry experience, we have gained a global
                  clientele. They hire us for our commitment to delivering a
                  complete range of customized IT services that accelerate their
                  business efficiency.Silicon IT Hub is a forward-thinking Web
                  and Mobile App Development Company in India, providing a
                  competitive edge to businesses across the world. With years of
                  industry experience, we have gained a global clientele. They
                
                </p>

                <p>
                  We strive for excellence and that’s seen in each result we
                  produce.
                </p>
              </div>
            </div>
            <div className="awards">
              <img src={google} alt="google" className="google" />
              <img src={clutch} alt="clutch" className="clutch" />
              <img src={upwork} alt="upwork" className="upwork" />
            </div>
          </div>
          <div className="container-two">
            <img className="project" src={project} alt="Project" />
            <img className="industries" src={industries} alt="Project" />
          </div>
          <div className="container-three">
            <img className="employes" src={employes} alt="Project" />
            <img className="client" src={client} alt="Project" />
            <img className="yearExpertise" src={yearExpertise} alt="Project" />
            <img className="retension" src={retension} alt="Project" />
          </div>
        </div>
      </div>
      <HomePage3 />
      <Client />
      <Quote value={{value:true}} />
    </>
  );
}

export default Home;
