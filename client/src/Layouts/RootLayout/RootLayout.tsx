import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/organisms/Navbar/Navbar";
import Footer from "../../components/organisms/Footer/Footer";
import "./RootLayout.scss";
import Modal from "../../components/organisms/Modal/Modal";
import { useDataContext } from "../../contexts/DataContext";
import DropDownMenu from "../../components/organisms/DropDownMenu/DropDownMenu";

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
