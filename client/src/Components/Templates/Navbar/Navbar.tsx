import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../../Context/DataContext";

const Navbar = () => {
  const { setShowMenu, setToken } = useDataContext();

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navIcon">
              <i className="fa-solid fa-house fa-sm"></i>
            </NavLink>
          </li>
          <li className="navIcon" onClick={() => setShowMenu(true)}>
            <i className="fa-solid fa-bars fa-sm"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
