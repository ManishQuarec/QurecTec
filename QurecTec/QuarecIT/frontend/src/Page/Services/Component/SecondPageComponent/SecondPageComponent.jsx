import React from "react";
import "./SecondPageComponent.css";
import google from '../../../../Image/Google.png';
import clutch from '../../../../Image/Clutch.png';
import upwork from '../../../../Image/upwork.png';
import computer from '../../../../Image/homeImage/2.png';


function SecondPageComponent(props) {
  console.log(props.value);
  return (
    <div className="SecondPageComponent">
      <div className="SecondPageLeft">
        <div className="SecondPageLeftMargin">
          <div className="pone">{props.value.ParaOne}</div>
          <div className="headerContent">{props.value.Header}</div>
          <div className="ptwo">
          {props.value.ParaTwo}
          </div>
          <div className="pthree">
          {props.value.ParaThree}
          </div>
          <div className="pfour">{props.value.ParaFour}</div>
          <img src={google} alt="Google" className="googleone" />
          <img src={clutch} alt="Clutch" className="clutchone" />
          <img src={upwork} alt="Upwork" className="upworkone" />
        </div>
      </div>
      <div className="SecondPageRight">
        <img src={require(`../../../../Image/ServicePageSecond/${props.value.image}.png`)} alt="" className="SecondPageRightImage" />
      </div>
    </div>  
  );
}

export default SecondPageComponent;
