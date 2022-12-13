import React from "react";
import "./ThirdPageComponent.css";
import Angular from "../../../../Image/WebDevelopment/Angular.png";
import Django from "../../../../Image/WebDevelopment/Django.png";
import Expressjs from "../../../../Image/WebDevelopment/Expressjs.png";
import Laravel from "../../../../Image/WebDevelopment/Laravel.png";
import Nodejs from "../../../../Image/WebDevelopment/Nodejs.png";
import Php from "../../../../Image/WebDevelopment/Php.png";
import RubyOnRails from "../../../../Image/WebDevelopment/RubyOnRails.png";
import Vuejs from "../../../../Image/WebDevelopment/Vuejs.png";

function ThirdPageComponent(props) {
  console.log(props.value);

  return (
    <>
      <div className="ThirdPageComplete">
      <div className="TypesOfWebsite">
          Types Of Website Development We Provide
        </div>
        <div className="ThirdPageComponent">
          <div className="ThirdPageLeft">
            <img src={require(`../../../../Image/WebDevelopment/${props.value[3]}.png`)} alt="" className="Django" />
            <img src={require(`../../../../Image/WebDevelopment/${props.value[2]}.png`)} alt="" className="Vuejs" />
            <img src={require(`../../../../Image/WebDevelopment/${props.value[1]}.png`)} alt="" className="Nodejs" />
            <img src={require(`../../../../Image/WebDevelopment/${props.value[0]}.png`)} alt="" className="Angular" />
          </div>
          <div className="ThirdPageRight">
            <img src={require(`../../../../Image/WebDevelopment/${props.value[7]}.png`)} alt="" className="php" />
            <img src={require(`../../../../Image/WebDevelopment/${props.value[6]}.png`)} alt="" className="Laravel" />
            <img src={require(`../../../../Image/WebDevelopment/${props.value[5]}.png`)} alt="" className="RubyOnRails" />
            <img src={require(`../../../../Image/WebDevelopment/${props.value[4]}.png`)} alt="" className="Expressjs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdPageComponent;
