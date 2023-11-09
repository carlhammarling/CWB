import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Templates/Navbar/Navbar";
import Footer from "../../Components/Templates/Footer/Footer";
import "./RootLayout.scss";
import Modal from "../../Components/Templates/Modal/Modal";
import { useDataContext } from "../../Context/DataContext";
import DropDownMenu from "../../Components/Templates/DropDownMenu/DropDownMenu";

const RootLayout = () => {

 const { showModal, showMenu } = useDataContext()

  return (
    <div className="siteWrapper">
      <Navbar />
        <Outlet />
        { showModal && <Modal /> }
        { showMenu && <DropDownMenu /> }
      <Footer />
    </div>
  );
};

export default RootLayout;
