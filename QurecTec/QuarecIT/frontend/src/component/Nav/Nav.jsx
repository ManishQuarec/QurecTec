import React from "react";
import "../Nav/nav.css";
import logo from "../../Image/Quarec.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="sticky">
    <div className="nav">
      <ul>
        <img src={logo} alt="Logo" />

        <li>
          <a className="Contact">Contact Us</a>
        </li>
        <li>
          <a className="expand">Careers</a>
        </li>
        <li>
          <a className="expand">Blogs</a>
        </li>
        <li>
          <a className="expand">Services</a>
        </li>
        <li>
          <a className="expand">Portfolio</a>
        </li>
        <li>
          <a className="expand">About Us</a>
        </li>

        <li>
          <a className="expand">Home </a>
        </li>
      </ul>
    </div>
    </nav>
  );
}

export default Nav;
