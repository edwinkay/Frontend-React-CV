import React from "react";
import "./Mobile.scss"
// import Printed from "../../Contact/Contact"
import { NavLink } from "react-router-dom";

function Mobile() {
  return (
    <div className="cajaM">
      <ul>
        <li>
          <NavLink className="nav-linkM" to="/">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-linkM" to="/Projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-linkM" to="/Bonus"
          >
            Bonus
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}
export default Mobile;
