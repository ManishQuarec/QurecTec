import React from "react";
import "../Nav/nav.css";
import logo from "../../Image/Quarec.png";

import { Outlet, Link } from "react-router-dom";
import { GoGrabber } from "react-icons/go";

function Nav() {
  return (
    <header>
      <nav className="sticky">
        <input type="checkbox" id="check" />

        <div className="nav">
          <ul>
            <img src={logo} alt="Logo" />

            <label htmlFor="check" className="Icones">
              <GoGrabber color="white" />
            </label>

            <li className="MoveLeft">
              <Link to="/contactus" className="Contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="expand">
                Careers
              </Link>
            </li>

            <li className="dataes">
              <Link className="expand">Services</Link>
              <div className="sub-menu-1">
                <div>
                  <a href="/WebDevelopment">Web Development</a>
                </div>
                <div>
                  <a href="/ERP">ERP Solution</a>
                </div>
                <div>
                  <a href="/UiDesign">UI UX Design</a>
                </div>
                <div>
                  <a href="/WebDevelopment">Graphic Design</a>
                </div>
                <div>
                  <a href="/GraphicDesign">Digital Marketing</a>
                </div>
              </div>
            </li>

            <li>
              <Link to="/portfolio" className="expand">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="expand">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/" className="expand">
                Home{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
