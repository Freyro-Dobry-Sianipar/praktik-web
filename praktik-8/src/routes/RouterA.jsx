import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";

const RouterA = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./Profile" element={<Profile />} />
        <Route patch="./Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterA;
