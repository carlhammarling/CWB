import React from "react";
import "./Modal.scss";
import { useDataContext } from "../../../Context/DataContext";
import Login from "../../Organisms/LoginRegister/LoginRegister";

const Menu = () => {
  const { setShowModal } = useDataContext();
  return (
    <div className="modalWrapper">
      <div className="modal">
        <div className="modalHeader">
          <button
            className="invisibleButton"
            onClick={() => setShowModal((state) => !state)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modalContent">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Menu;
