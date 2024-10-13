import React from 'react';
import "../styles/About.css";
import icon from "../assets/NeighborSale.png";

const Download = () => (
    <div className="container-download">
    <div className="about-text">
      <h1>Descarga nuestra app ahora</h1>
      <p>Regístrate y comienza a descubrir el lugar donde se encuentra tu nuevo articulo.</p>
      </div>
    <div className="about-buttons">
      <a className="btn btn-sm m-1" href="https://www.apple.com/cl/app-store/" target="_blank" rel="noopener noreferrer">¡Descargar iOS!</a>
      <a className="btn btn-sm m-1" href="https://play.google.com/store/apps?hl=es_CL&pli=1" target="_blank" rel="noopener noreferrer">¡Descargar Android!</a>
    </div>
   {/*  <div className="download-app-image">
      <img src={icon} alt="App placeholder" width={"50px"} />
    </div> */}
  </div>
);

export default Download;
