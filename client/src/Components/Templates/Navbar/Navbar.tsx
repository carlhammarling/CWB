import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navIcon">
              <i className="fa-solid fa-house fa-sm"></i>
            </NavLink>
          </li>
          <li className="navIcon">
          <i className="fa-solid fa-bars fa-sm"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
