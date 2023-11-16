import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import ScrollToTop from "./utils/ScrollToTop";
import Account from "./pages/Account/Account";

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
