import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import "../styles/Footer.css";
import icon from "../assets/NeighborSale.png";

const Footer = () => (
  <footer className="footer py-5">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-3 text-center text-md-left">
          <img src={icon} alt="Logo" className="footer-logo" />
          <p className="footer-text">¡Donde cada venta encuentra un nuevo hogar!</p>
        </div>
        
        <div className="col-md-3 text-center">
          <h5 className="subt mb-3">Más Información</h5>
          <ul className="footer-links list-unstyled">
            <li><Link to="/preguntas-frecuentes" className="footer-link">Preguntas Frecuentes</Link></li> {/* Reemplazado por Link */}
            <li><Link to="/contactanos" className="footer-link">Contáctanos</Link></li> {/* Reemplazado por Link */}
            <li><Link to="/porque-escogernos" className="footer-link">¿Por qué escogernos?</Link></li> {/* Reemplazado por Link */}
            <li><Link to="/calificaciones" className="footer-link">Calificaciones</Link></li> {/* Reemplazado por Link */}
            <li><a href="#Download" className="footer-link">Descarga nuestra App</a></li> {/* Se queda como <a> */}
          </ul>
        </div>
        
        <div className="col-md-3 text-center">
          <h5 className="subt mb-3">Síguenos</h5>
          <ul className="footer-social list-inline">
            <li className="list-inline-item"><a href="#" className="icons bi bi-facebook"></a></li>
            <li className="list-inline-item"><a href="#" className="icons bi bi-instagram"></a></li>
            <li className="list-inline-item"><a href="#" className="icons bi bi-twitter"></a></li>
            <li className="list-inline-item"><a href="#" className="icons bi bi-linkedin"></a></li>
            <li className="list-inline-item"><a href="#" className="icons bi bi-youtube"></a></li>
          </ul>
        </div>
      </div>
      
      <div className="row text-center mt-4">
        <small className="footer-copy">&copy; 2024, NeighborSale</small>
        <small className="footer-copy">Todos los derechos reservados.</small>
      </div>
    </div>
  </footer>
);

export default Footer;
