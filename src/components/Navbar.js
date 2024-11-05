import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import "../styles/Navbar.css"; // Asegúrate de que la ruta sea correcta
import icon from "../assets/NeighborSale-Home.png"; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">

        <img src={icon} alt="Logo" className="navbar-logo" />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#nosotros">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contactanos">Contáctanos</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
