import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../../Context/DataContext";
import { log } from "console";

const Navbar = () => {
  const { setShowMenu, setToken, userData, setShowModal } = useDataContext();

  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <nav className="mobile">
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
      <nav className="desktop">
        <ul>
          <li>
            <NavLink to="/" className="navIcon">
              <i className="fa-solid fa-house fa-sm"></i>
            </NavLink>
          </li>
          {userData ? (
            <>
              <li>
                <NavLink to="/account" className="navIcon">
                  <i className="fa-solid fa-user fa-sm"></i>
                </NavLink>
              </li>
              <li className="navIcon" onClick={logOut}>
                <i className="fa-solid fa-right-from-bracket fa-sm"></i>
              </li>
            </>
          ) : (
            <li className="navIcon mobile" onClick={() => setShowModal(true)}>
              <i className="fa-solid fa-user fa-sm"></i>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
