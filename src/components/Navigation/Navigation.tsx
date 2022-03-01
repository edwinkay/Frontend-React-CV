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
      <nav>
        
        
        <NavLink className="nav-link" to="/">
          Profile
        </NavLink>

        <NavLink className="nav-link" to="/Projects">
          Projects
        </NavLink>

        <NavLink className="nav-link" to="/Bonus">
          Bonus
        </NavLink>

        <NavLink className="nav-link-print" to="/">
          <Printed />
        </NavLink>

      

        <div className="verMobile">
          <img
            className="editImage"
            onClick={handleToggle}
            src={menu}
            alt="menu"
          />
        </div>
      </nav>
      {toggle && <Mobile />}
      {/* <NavLink className="nav-link" to="/">
            React Multi-Page Website
          </NavLink> */}
    </div>
  );
}
export default Navigation;


