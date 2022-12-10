import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav'
import  AboutUs from './Page/AboutUS/AboutUs.jsx'
import Portfolio from './Page/Portfolio/PortfolioMain/PortfolioMain';
import Home from './Page/Home/Home';
import Career from './Page/Carreer/Career'
import ContactUS from './Page/ContactUS/ContactUS'; 

import Test from './Page/ContactUS/Test/Test'


function App() {
  return (
    <div className="App">
     {/* <CV/> */}
    {/* <Nav/> */}
    {/* <Test/> */}
    <ContactUS/>
    {/* <Career/> */}

    {/* <AboutUs /> */}

    {/* <Home/> */}

     {/* <Portfolio value="true" /> */}
    
    </div>
  );
}

export default App;
