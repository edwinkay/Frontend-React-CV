import React, { useState } from "react";
import "./Navigation.scss";
import menu from "../../assets/icons/icon_menu_white.png";

import Printed from "../Contact/Contact"
import { NavLink } from "react-router-dom";
import Mobile from "./MenuMobile/Mobile";

function Navigation() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };


  return (
    <div className="caja">
      <ul className="content-navbar">
        <li>
          <NavLink className="nav-link" to="/">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/Projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React">
            React
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link-print" to="/">
            <Printed />
          </NavLink>
        </li>

        <div className="verMobile">
          <img
            className="editImage"
            onClick={handleToggle}
            src={menu}
            alt="menu"
          />
        </div>
      </ul>
      {/* <div className="login-style">
        <NavLink className="nav-link" to="/login">
          log in
        </NavLink>
      </div> */}
      {toggle && <Mobile />}
      {/* <NavLink className="nav-link" to="/">
            React Multi-Page Website
          </NavLink> */}
    </div>
  );
}
export default Navigation;


