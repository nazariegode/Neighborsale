import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Nosotros.css';

const itemVariants = {
  hidden: { opacity: 0, x: 100 }, // Comienza desde la derecha
  visible: {
    opacity: 1,
    x: 0, // Mueve a su posición original
    transition: {
      duration: 0.8, // Duración de la animación
    },
  },
};

const Nosotros = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Se activa cada vez que el componente entra en vista
    threshold: 0.7, // Activa la animación cuando el 70% del componente es visible
  });

  return (
    <div ref={ref} className="contact-container text-center">
      <motion.p
        className='titulos'
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        ¡Conoce más de Nosotros!
      </motion.p>

      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
      </motion.p>


      <div className="row">

        <motion.div
          className="col-md-6 mt-4"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h5 className="mt-1">Nuestra Misión <i class="bi bi-chat-heart-fill"></i>
          </h5>
          <p className='mision'>En NeighborSale, nuestra misión es conectar a las comunidades a través de una plataforma de venta que facilite el intercambio de productos y servicios de manera segura y eficiente. Creemos que cada venta tiene el potencial de crear una nueva conexión y contribuir al bienestar de nuestros usuarios.</p>
        </motion.div>

        <motion.div
          className="col-md-6 mt-4"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h5 className="mt-1">Nuestra Visión <i class="bi bi-chat-heart-fill"></i>
          </h5>
          <p className='mision'>Nuestra visión es ser la plataforma líder en el comercio comunitario, donde cada transacción no solo beneficie a compradores y vendedores, sino que también fomente relaciones duraderas. Aspiramos a crear un ecosistema donde las personas puedan encontrar lo que necesitan a un precio justo, mientras apoyan a sus vecinos y fortalecen su comunidad.</p>
        </motion.div>

        
      </div>
    </div>
  );
};

export default Nosotros;
