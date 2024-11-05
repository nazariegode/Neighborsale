import React from "react";
import { Routes, Route } from "react-router-dom";
import Nosotros from "../components/Nosotros";
import Home from '../components/Home'
import Contact from '../components/Contact'
import Products from '../components/Products'
import { BrowserRouter } from "react-router-dom";


const AppRouter = () => {
  return (
    <BrowserRouter basename="/app">
    <Routes>
      <Route exact path="#home" element={<Home />} />
      <Route exact path="#nosotros" element={<Nosotros />} />
      <Route exact path="#contactanos" element={<Contact />} />
      <Route exact path="#productos" element={<Products />} />
    </Routes>
  </BrowserRouter>
  );
};

export default AppRouter;