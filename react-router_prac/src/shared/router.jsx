import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Works from "../pages/Works";

const AppRouter = () => {
  return (
    // Routes > Route ( path, element )
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/works' element={<Works />} />
      <Route path='/works/:workName' element={<Works />} />
    </Routes>
  );
};

export default AppRouter;
