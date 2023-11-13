import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./DropDownMenu.scss";
import { useDataContext } from "../../../Context/DataContext";
const DropDownMenu = () => {
  const { setShowMenu, userData, setToken, setShowModal } = useDataContext();

  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <div
      className="dropdownWrapper"
      onClick={() => setShowMenu((state) => !state)}
    >
      <div className="dropdown" onClick={(e) => e.stopPropagation()}>
        <div className="dropdownHeader">
          <button
            className="invisibleButton"
            onClick={() => setShowMenu((state) => !state)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="dropdownContent">
          <nav className="menu">
            <ul>
              <li>
                <NavLink to="/" onClick={() => setShowMenu(false)}>
                  <div>
                    <i className="fa-solid fa-house fa-xs"></i>
                  </div>
                  <p className="bold darkGray">Home</p>
                </NavLink>
              </li>
              {userData ? (
                <>
                  <li>
                    <NavLink to="/account" onClick={() => setShowMenu(false)}>
                      <div>
                        <i className="fa-solid fa-user fa-xs"></i>
                      </div>
                      <p className="bold darkGray">Account</p>
                    </NavLink>
                  </li>
                  <li
                    className="menuButton"
                    onClick={() => {
                      setShowMenu(false);
                      logOut();
                    }}
                  >
                    <div>
                      <i className="fa-solid fa-right-from-bracket fa-xs"></i>
                    </div>
                    <p className="bold darkGray">Logout</p>
                  </li>
                </>
              ) : (
                <li
                  className="menuButton"
                  onClick={() => {
                    setShowModal(true);
                    setShowMenu(false);
                  }}
                >
                  <div>
                    <i className="fa-solid fa-user fa-xs"></i>
                  </div>
                  <p className="bold darkGray">Login</p>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
