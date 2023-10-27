import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Templates/Navbar/Navbar";
import Footer from "../../Components/Templates/Footer/Footer";
import "./RootLayout.scss";
import Modal from "../../Components/Templates/Modal/Modal";
import { useDataContext } from "../../Context/DataContext";

const RootLayout = () => {

 const { showModal } = useDataContext()

  return (
    <div className="siteWrapper">
      <Navbar />
        <Outlet />
        { showModal && <Modal /> }
      <Footer />
    </div>
  );
};

export default RootLayout;
