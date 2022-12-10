import React from "react";
import "./Client.css";
import img1 from "../../Image/Client/1.png";
import img2 from "../../Image/Client/2.png";
import img3 from "../../Image/Client/bajaj.png";
import img4 from "../../Image/Client/phonepay.png";
import img5 from "../../Image/Client/Dunzo.png";
import img6 from "../../Image/Client/flipkart.png";
import img7 from "../../Image/Client/hindustan.png";
import img8 from "../../Image/Client/myntra.png";


function Client() {
  return (
    <div className="Container">
      <h1>Our Clients</h1>
      <div className="img-container">
        <img src={img1} alt="client1" />
        <img src={img2} alt="client1" />
        <img src={img3} alt="client1" />
        <img src={img4} alt="client1" />
        <img src={img5} alt="client1" />
        <img src={img6} alt="client1" />
        <img src={img7} alt="client1" />
        <img src={img8} alt="client1" />

        <img src={img1} alt="client1" />
        <img src={img2} alt="client1" />
        <img src={img3} alt="client1" />
        <img src={img4} alt="client1" />
        <img src={img5} alt="client1" />
        <img src={img6} alt="client1" />
        <img src={img7} alt="client1" />
        <img src={img8} alt="client1" />
      </div>
    </div>
  );
}

export default Client;
