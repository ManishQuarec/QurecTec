import React from "react";
import FirstPageComponent from "./Component/FirstPageComponent/FirstPageComponent";

import SecondPageComponent from "./Component/SecondPageComponent/SecondPageComponent";

import ThirdPageComponent from "./Component/ThirdPageComponent/ThirdPageComponent";
import FourthPageComponent from "./Component/FourthPageComponent/FourthPageComponent";
import Nav from "../../component/Nav/Nav";

import Quote from '../../component/Quote/Quote';
import Client from '../../component/Client/Client';
function WebDevelopment() {
  const PropsForFirstPage = {
    Pageheader: "Web Development",
    imgSrc: "1",
    heading:
      "Are You Looking For E-commerce site To Sell Your Products Worldwide?",
    content: `Lorem ipsum dolor  sit amet consectetur adipisicing elit. Soluta
        sed atque iure cupiditate rem, expedita ipsum non nam quas
        voluptatibus reprehenderit dolor numquam, aspernatur ad obcaecati
        laboriosam. Maiores alias nesciunt necessitatibus suscipit
        molestiae ut exercitationem atque consequatur provident facilis
        mollitia sunt et, harum libero porro quis, quibusdam beatae
        commodi. In repellat hic fugit sint aspernatur reprehenderit
        blanditiis, fugiat possimus ad nostrum iure omnis neque incidunt
        quo labore doloribus voluptatibus delectus ratione perspiciatis
        dicta similique quos quidem culpa? Nesciunt a totam voluptas`,
  };

  const PropsForSecondPage = {
    ParaOne: "Accelerating Innovations in a Real World",
    Header: "Top Web Development Company",
    ParaTwo:
      "Silicon IT Hub is a forward-thinking Web and Mobile App Development Company in India, providing a competitive edge to businesses across the world.2",
    ParaThree:
      "With years of industry experience, we have gained a global clientele. They hire us for our commitment to delivering a complete range of customized IT services that accelerate their business efficiency.",
    ParaFour:
      "We strive for excellence and that’s seen in each result we produce.",
    image: "WebDevelopment",
  };


const PropsForThirdPage = ["Django","Vuejs","Nodejs","Angular","Php","Laravel", "RubyOnRails","Expressjs",     ]

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
  );
}

export default WebDevelopment;
