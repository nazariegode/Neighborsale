import React from "react";
import { Routes, Route } from "react-router-dom";
import Nosotros from "../components/Nosotros";
import Home from '../components/Home'
import Contact from '../components/Contact'
import Products from '../components/Products'

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="#nosotros" element={<Nosotros />} />
      <Route exact path="/contactanos" element={<Contact />} />
      <Route exact path="/productos" element={<Products />} />
    </Routes>
  );
};

export default AppRouter;