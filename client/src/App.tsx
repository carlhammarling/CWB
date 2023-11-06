import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import ScrollToTop from "./Utils/ScrollToTop";
import Account from "./Pages/Account/Account";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cowork/:id" element={<Details />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
