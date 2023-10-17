import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Templates/Navbar/Navbar";
import Footer from "../../Components/Templates/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
