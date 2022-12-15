import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav/Nav";
import AboutUs from "./Page/AboutUS/AboutUs.jsx";
import Portfolio from "./Page/Portfolio/PortfolioMain/PortfolioMain";
import Home from "./Page/Home/Home";
import Career from "./Page/Carreer/Career";
import ContactUS from "./Page/ContactUS/ContactUS";

import Form from "./Page/ContactUS/Test/Form";
import FirstPageComponent from "./Page/Services/Component/FirstPageComponent/FirstPageComponent";
import SecondPageComponent from "./Page/Services/Component/SecondPageComponent/SecondPageComponent";
import Services from "./Page/Services/Services";
import WebDevelopment from "./Page/Services/WebDevelopment";
import UiDesign from "./Page/Services/UiDesign";
import GraphicDesign from "./Page/Services/GraphicDesign";
import ERP from "./Page/Services/ERP";
import DigitalMarketing from "./Page/Services/DigitalMarketing";
import AppDevelopment from "./Page/Services/AppDevelopment";
function App() {
  function load() {
    window.scrollTo(0, 0);
  }

  function onUnload() {
    this.context.router.push('/');
}

  // export default ScrollToTop;
  return (
    <>
      {load()}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            {/* <Route index element={<Home />} /> */}
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="portfolio" element={<Portfolio value="true" />} />
            <Route path="careers" element={<Career />} />
            <Route path="/WebDevelopment" element={<WebDevelopment />} />
            <Route path="/UiDesign" element={<UiDesign />} />
            <Route path="/ERP" element={<ERP/>} />
            <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
            <Route path="/AppDevelopment" element={<AppDevelopment />} />
            <Route path="/GraphicDesign" element={<GraphicDesign />} />
            <Route path="/ContactUS" element={<ContactUS />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>

    // </div>
  );
}

export default App;
