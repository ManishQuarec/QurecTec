import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Quote.css";

function Quote(props) {
  const name = useRef("");
  const phoneNumber = useRef("");
  const emailId = useRef("");
  const subject = useRef("");
  const message = useRef("");

  const submit = (e) => {
    e.preventDefault();

    var templateParams = {
      name: name.current.value,

      phoneNumber: phoneNumber.current.value,
      emailId: emailId.current.value,
      subject: subject.current.value,
      message: message.current.value,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_bjwpjeg",
        "template_zzukcmb",
        templateParams,
        "eKBBb-xfe6O_9k6ST"
      )
      // .then(
      //   function (response) {
      //     // console.log("SUCCESS!", response.status, response.text);
      //   },
      //   function (err) {
      //     console.log("FAILED...", err);
      //   }
      // );
  };

  const [view, setView] = useState(props.value.value);
  console.log(view);

  return (
    <div>
      <div className={view ? "main-container" : null}>
        {view ? (
          <div className="main-container-left">
            <div className="text">
              <h2 className="get">Get A Quote </h2>
              <div className="detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                a! Ipsum asperiores quisquam quas facilis nihil, voluptatem quia
                eligendi libero iure amet sint vel numquam harum fuga earum aut
                odio debitis dolorem deserunt esse saepe soluta maiores.
                Corrupti quia optio beatae maiores dolor, hic, aut a adipisci
                molestias sed reprehenderit vero exercitationem repellat
                perferendis quaerat, numquam repellendus dignissimos itaque
                animi quisquam?{" "}
              </div>
              <div className="email">Email:- Info@quarecsolution.com</div>
              <div className="call">Call:- +91-7878787878</div>
              <div className="fax">Fax:- +91-7878787878</div>
              <div className="add">
                Address:- Level 13, Suite 1a, 465 Victoria Ave, Chatswood, NSW
                2067
              </div>
            </div>
          </div>
        ) : null}

        <div className="main-container-right">
          <div className={view ? "text-right" : "text-right-null"}>
            <div className="frame">
              <input
                ref={name}
                type="text"
                className="Name"
                placeholder="Full Name"
              />
              <input
                ref={phoneNumber}
                type="text"
                className="Name"
                placeholder="Phone Number"
              />
              <input
                ref={emailId}
                type="text"
                className="Name"
                placeholder="Email- I'd"
              />
              <input
                ref={subject}
                type="text"
                className="Name"
                placeholder="Subject"
              />
              <input
                ref={message}
                type="text"
                className="Name"
                placeholder="Message"
              />
              <button onClick={submit} className="submit">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
