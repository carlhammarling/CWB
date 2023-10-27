import React from "react";
import "./Modal.scss";
import { useDataContext } from "../../../Context/DataContext";
import LoginRegister from "../../Organisms/LoginRegister/LoginRegister";

const Modal = () => {
  const { setShowModal, userData } = useDataContext();
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
          {userData ? <h1>Här ska vi boka!</h1> : <LoginRegister />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
