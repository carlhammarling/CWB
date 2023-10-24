import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import ScrollToTop from "./Utils/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cowork/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
