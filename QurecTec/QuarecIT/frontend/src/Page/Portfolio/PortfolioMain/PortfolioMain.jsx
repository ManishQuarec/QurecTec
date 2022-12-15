import React, { useState, useContext, useReducer } from "react";
import image1 from "../../../Image/Portfolio/Image1.png";
import image2 from "../../../Image/Portfolio/Image2.png";
import image3 from "../../../Image/Portfolio/Image3.png";
import image4 from "../../../Image/Portfolio/Image4.png";
import image5 from "../../../Image/Portfolio/Image5.png";
import image6 from "../../../Image/Portfolio/Image6.png";
import image7 from "../../../Image/Portfolio/Image7.png";
import image8 from "../../../Image/Portfolio/Image8.png";
import PortImage from "../PortImage/PortImage";
import "./PortfolioMain.css";
import Portfolio from "../Portfolio";
import Nav from "../../../component/Nav/Nav";

const initialState = "all";

export const CountContext = React.createContext();

function PortfolioMain() {
  // const [selected, setSelected] = useState("");
  function load() {
    window.scrollTo(0, 0);
  }

 

  const reducer = (state, action) => {
  
    switch (action) {
      case "Web Development":
        return "Web Development";
      case "ERP":
        return "ERP";
        case "App Development":
        return "App Development";
        case "UI-UX Design":
        return "UI-UX Design";
        case "Graphic Design":
        return "Graphic Design";
        case "Digital Marketing":
        return "Digital Marketing";
        case "Hardware Solutions":
        return "Hardware Solutions";
        case "ERP":
        return "web Development";
        default :
        return "all"
    }
  };

  const [selected, dispatch] = useReducer(reducer, initialState);

  console.log("selected", selected);

  const datas = [
    {
      id: 1,
      imgSrc: image1,
      uperdata: "Quarec Media",
      lowerData: "UI-UX Design",
    },
    {
      id: 2,
      imgSrc: image2,
      uperdata: "Gujarat Vandan",
      lowerData: "App Development",
    },
    {
      id: 3,
      imgSrc: image3,
      uperdata: "Hotel Maple Inn",
      lowerData: "Web Development",
    },
    {
      id: 4,
      imgSrc: image4,
      uperdata: "Cold Brew Cafe",
      lowerData: "UI-UX Design",
    },
    {
      id: 5,
      imgSrc: image5,
      uperdata: "Quarec Media",
      lowerData: "App Development",
    },
    {
      id: 6,
      imgSrc: image6,
      uperdata: "Gujarat Vandan",
      lowerData: "Web Development",
    },
    {
      id: 7,
      imgSrc: image7,
      uperdata: "Hotel Maple Inn",
      lowerData: "UI-UX Design",
    },
    {
      id: 8,
      imgSrc: image8,
      uperdata: "Cold Brew Cafe",
      lowerData: "Web Development",
    },
  ];

  const result = datas.filter((item) => {
    if (item.lowerData === selected || selected === "all") {
      return item;
    }
  });
  return (
    <>
    <Nav/>
    {load()}
<CountContext.Provider  value={{ countDispatch:dispatch}}>
      <Portfolio value={{ value: true }}/>

      <div className="limit">
        {result.map((item, index) => {
          return (
            <PortImage
              key={index}
              image={item.imgSrc}
              uperdata={item.uperdata}
              lowerData={item.lowerData}
            />
          );
        })}
      </div>
      </CountContext.Provider>
    </>
  );
}

export default PortfolioMain;
