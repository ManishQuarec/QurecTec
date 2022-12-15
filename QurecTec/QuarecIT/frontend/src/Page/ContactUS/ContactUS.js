import React from "react";
import "./ContactUS.css";
import Form from "./Test/Form";
import Quote from "../../component/Quote/Quote";
import Nav from "../../component/Nav/Nav";


function ContactUS() {
  return (
    <>
    <Nav/>
    <div className="ContactUS">
      <div className="firstSide">
        <div className="texts">
          <h2 className="get">General Inquiries </h2>
          <div className="detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolores officia optio vitae pariatur autem, unde, quaerat nemo,
            tenetur voluptas esse ullam. Dolores qui odio cupiditate dolorem?
            Consectetur in odit blanditiis architecto, quo dolorem doloremque,
            placeat aperiam id, aut commodi nesciunt totam laborum facere soluta
            veniam fugit numquam. Iste sed soluta sequi explicabo, modi, illo
            dolores labore nesciunt ullam itaque laudantium rerum maxime
          </div>
          <div className="email">Email:- Info@quarecsolution.com</div>
          <div className="call">Call:- +91-7878787878</div>
          <div className="fax">Fax:- +91-7878787878</div>
          <div className="add">
            Address:- Level 13, Suite 1a, 465 Victoria Ave, Chatswood, NSW 2067
          </div>
        </div>
      </div>

      <div className="secondSide">
        <div className="secondSideMargin">
          <Quote value={{ value: false }} />
        </div>
      </div>
      <div className="thirdSide">
        <Form />
      </div>
    </div>
    </>
  );
}

export default ContactUS;
