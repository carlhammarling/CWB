import React, { useEffect } from "react";
import "./Modal.scss";
import { useDataContext } from "../../../Context/DataContext";
import LoginRegister from "../../Organisms/LoginRegister/LoginRegister";
import Booking from "../../Organisms/Booking/Booking";

const Modal = () => {
  const { setShowModal, userData, token } = useDataContext();

  
  return (
    <div className="modalWrapper" onClick={() => setShowModal((state) => !state)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button
            className="invisibleButton"
            onClick={() => setShowModal((state) => !state)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="modalContent">
          {userData ? <Booking /> : <LoginRegister />}        
        </div>
      </div>
    </div>
  );
};

export default Modal;
