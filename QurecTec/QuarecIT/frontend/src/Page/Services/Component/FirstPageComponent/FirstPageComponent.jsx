import React from "react";
import "./FirstPageComponent.css";
import img1 from "../../../../Image/homeImage/1.png";

function FirstPageComponent(props) {
  
  

  return (
    <div className="FirstPageComponentMain">
      
      <div className="FirstPageHeader">{props.value.Pageheader}</div>
      <div className="FirstPageComponent">
      
        <div className="FirstPageComponentLeft">
          <div className="LeftComponent">
            <div className="FirstPageComponentLeft-Head">
             {props.value.heading}
            </div>
            <div className="FirstPageComponentLeft-Content">
              
            {props.value.content}
            </div>
          </div>
        </div>
        <div className="FirstPageComponentRight">
          <div className="FirstPageComponentRight-Content">
            <img src={require(`../../../../Image/homeImage/${props.value.imgSrc}.png`)} className="ImgComponent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPageComponent;
