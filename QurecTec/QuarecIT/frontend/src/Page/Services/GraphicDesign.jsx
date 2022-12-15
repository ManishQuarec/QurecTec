import React from 'react'
import FirstPageComponent from "./Component/FirstPageComponent/FirstPageComponent";

import SecondPageComponent from "./Component/SecondPageComponent/SecondPageComponent";

import ThirdPageComponent from "./Component/ThirdPageComponent/ThirdPageComponent";
import FourthPageComponent from "./Component/FourthPageComponent/FourthPageComponent";

import Nav from '../../component/Nav/Nav';
import Quote from '../../component/Quote/Quote';
import Client from '../../component/Client/Client';

function GraphicDesign() {

    const PropsForFirstPage = {
        Pageheader: "Graphic Design",
        imgSrc: "7",
        heading:
          "Lokking For Pixel Perfect Graphic Solution?",
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      };
    
      const PropsForSecondPage = {
        ParaOne: "Pixel Pefect Graphic Design Agency In Gujarat",
        Header: "Top Web Development Company",
        ParaTwo:
          "Silicon IT Hub is a forward-thinking Web and Mobile App Development Company in India, providing a competitive edge to businesses across the world.2",
        ParaThree:
          "With years of industry experience, we have gained a global clientele. They hire us for our commitment to delivering a complete range of customized IT services that accelerate their business efficiency.",
        ParaFour:
          "We strive for excellence and that’s seen in each result we produce.",
        image: "GraphicDesign",
      };
    
    
    const PropsForThirdPage = ["CMYKBanners","Packaging","Branding","SocialMedia","HoardingDesign","CardDesign", "LogoDesign","Pamplet",     ]
    
    const PropsForFourthPage = {
        Item1: {
            Name:"Gujarat Vandan",
            Content: "Quarec IT 1 Hub is a future-ready web and mobile app development company serving to drive the digital revolution. Since its inception in 1998, our friendly and ",
            Image:"Image1",
            
        },
        Item2: {
            Name:"Quarec",
            Content: "Quarec IT 2 Hub is a future-ready web and mobile app development company serving to drive the digital revolution. Since its inception in 1998, our friendly and ",
            Image:"Image2",
            
        },
        Item3: {
            Name:"Triumph Group",
            Content: "Quarec IT 3Hub is a future-ready web and mobile app development company serving to drive the digital revolution. Since its inception in 1998, our friendly and ",
            Image:"Image3",
            
        }
    }
  return (
    <>
    <Nav/>
    <FirstPageComponent value={PropsForFirstPage} />
    <SecondPageComponent value={PropsForSecondPage} />
    <ThirdPageComponent value={PropsForThirdPage}/>
    <FourthPageComponent value={PropsForFourthPage} />
    <Client/>
    <Quote value={{value:true}}/>
  </>
  )
}

export default GraphicDesign