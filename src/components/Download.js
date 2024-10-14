import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../styles/Download.css";
import icon from "../assets/NeighborSale.png";

const slideInVariants = {
  hidden: { opacity: 0, x: -100 }, // Comienza desde la izquierda
  visible: {
    opacity: 1,
    x: 0, // Mueve a su posición original
    transition: {
      duration: 0.8, // Duración de la animación
    },
  },
};

const Download = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Se activa cada vez que el componente entra en vista
    threshold: 0.7, // Activa la animación cuando el 70% del componente es visible
  });

  return (
    <div ref={ref} className="container-download">
      <motion.div
        className="about-text"
        variants={slideInVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Ejecuta la animación solo cuando está en vista
      >
        <p className="titulos">Descarga nuestra app ahora</p>
        <p className="subtitulo">Regístrate y comienza a descubrir el lugar donde se encuentra tu nuevo artículo.</p>
      </motion.div>
      <motion.div
        className="about-buttons"
        variants={slideInVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Ejecuta la animación solo cuando está en vista
      >
        <a className="btn btn-sm m-1" href="https://www.apple.com/cl/app-store/" target="_blank" rel="noopener noreferrer"><i className="bi bi-apple"></i> Apple</a>
        <a className="btn btn-sm m-1" href="https://play.google.com/store/apps?hl=es_CL&pli=1" target="_blank" rel="noopener noreferrer"><i className="bi bi-android2"></i> Android</a>
      </motion.div>
     {/* <div className="download-app-image">
        <img src={icon} alt="App placeholder" width={"50px"} />
      </div> */}
    </div>
  );
};

export default Download;
