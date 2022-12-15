import React, { useContext, useState } from "react";
import "./Portfolio.css";
import {CountContext} from './PortfolioMain/PortfolioMain';



function load() {
  window.scrollTo(0, 0);
}



function Portfolio(props) {

 const [view, setView]= useState(props.value.value)
 

  const count = useContext(CountContext);
 

  return (
    <>
    
      <div className={view ? "Portfolio" : "Portfolio-false"}>
        { view ? <div className="head" >Portfolio</div> : null}
       
        <div className="subDivision">
          <label onClick={() => count.countDispatch("all")}>All</label>
          <label onClick={() => count.countDispatch("Web Development")}>
            Web Development
          </label>
          <label onClick={() => count.countDispatch("ERP")}>ERP</label>
          <label onClick={() => count.countDispatch("App Development")}>
            App Development
          </label>
          <label onClick={() => count.countDispatch("UI-UX Design")}>
            UI-UX Design
          </label>
          <label onClick={() => count.countDispatch("Graphic Design")}>
            Graphic Design
          </label>
          <label onClick={() => count.countDispatch("Digital Marketing")}>
            Digital Marketing
          </label>
          <label onClick={() => count.countDispatch("Hardware Solutions")}>
            Hardware Solutions
          </label>
        </div>
        
      </div>
    </>
  );
}

export default Portfolio;
