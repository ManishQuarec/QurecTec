import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav'
import  AboutUs from './Page/AboutUS/AboutUs.jsx'
import Portfolio from './Page/Portfolio/PortfolioMain/PortfolioMain';
import Home from './Page/Home/Home';
import Career from './Page/Carreer/Career'
import ContactUS from './Page/ContactUS/ContactUS'; 

import Form from './Page/ContactUS/Test/Form';
import FirstPageComponent from './Page/Services/Component/FirstPageComponent/FirstPageComponent';
import SecondPageComponent from './Page/Services/Component/SecondPageComponent/SecondPageComponent';
import Services from './Page/Services/Services'
import WebDevelopment from './Page/Services/WebDevelopment';
import UiDesign from './Page/Services/UiDesign';
import GraphicDesign from './Page/Services/GraphicDesign';
import ERP from './Page/Services/ERP';
import DigitalMarketing from './Page/Services/DigitalMarketing';
import AppDevelopment from './Page/Services/AppDevelopment';
function App() {
  return (
    <div className="App">
     {/* <CV/> */}
    <Nav/>
    <AppDevelopment/>
    {/* <Services/> */}
    {/* <SecondPageComponent/> */}
    {/* <FirstPageComponent/> */}
    {/* <Form/> */}
    {/* <ContactUS/> */}
    {/* <Career/> */}

    {/* <AboutUs /> */}

    {/* <Home/> */}

     {/* <Portfolio value="true" /> */}
    
    </div>
  );
}

export default App;
