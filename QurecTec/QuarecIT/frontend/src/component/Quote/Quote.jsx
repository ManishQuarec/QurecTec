import React, {useState} from "react";
import "./Quote.css";

function Quote(props) {
  const [view, setView] = useState(props.value.value)
  console.log(view);

  return (
    
    <div>

      <div className={view ? "main-container" : null }>
        {view ?  (<div className="main-container-left">
          <div className="text">
            <h2 className="get">Get A Quote </h2>
            <div className="detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a!
              Ipsum asperiores quisquam quas facilis nihil, voluptatem quia
              eligendi libero iure amet sint vel numquam harum fuga earum aut
              odio debitis dolorem deserunt esse saepe soluta maiores. Corrupti
              quia optio beatae maiores dolor, hic, aut a adipisci molestias sed
              reprehenderit vero exercitationem repellat perferendis quaerat,
              numquam repellendus dignissimos itaque animi quisquam?{" "}
            </div>
            <div className="email">Email:- Info@quarecsolution.com</div>
            <div className="call">Call:- +91-7878787878</div>
            <div className="fax">Fax:- +91-7878787878</div>
            <div className="add">
              Address:- Level 13, Suite 1a, 465 Victoria Ave, Chatswood, NSW
              2067
            </div>
          </div>
        </div>): null }
        
        <div className="main-container-right">
          <div className={view ? "text-right" : "text-right-null"}>
            <div className="frame">
                <input type="text" className="Name" placeholder="Full Name"/>
                <input type="text" className="Name" placeholder="Phone Number"/>
                <input type="text" className="Name" placeholder="Email- I'd"/>
                <input type="text" className="Name" placeholder="Subject"/>
                <input type="text" className="Name" placeholder="Message"/>
                <button className="submit"> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
