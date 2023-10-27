import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../../Context/DataContext";

const Navbar = () => {

  const { setShowModal, setToken } = useDataContext()


const logOut = () => {
  setToken(null)
  
  localStorage.removeItem('token')
};

  return (
    <div className="navbar" onClick={() => setShowModal(false)}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navIcon">
              <i className="fa-solid fa-house fa-sm"></i>
            </NavLink>
          </li>
          <li className="navIcon" onClick={logOut}>
          <i className="fa-solid fa-bars fa-sm"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
