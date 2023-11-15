import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Organisms/Navbar/Navbar";
import Footer from "../../Components/Organisms/Footer/Footer";
import "./RootLayout.scss";
import Modal from "../../Components/Organisms/Modal/Modal";
import { useDataContext } from "../../Context/DataContext";
import DropDownMenu from "../../Components/Organisms/DropDownMenu/DropDownMenu";

const RootLayout = () => {
  const { showModal, showMenu } = useDataContext();

  return (
    <div className="siteWrapper">
      <Navbar />
      <Outlet />
      {showModal && <Modal />}
      {showMenu && <DropDownMenu />}
      <Footer />
    </div>
  );
};

export default RootLayout;
