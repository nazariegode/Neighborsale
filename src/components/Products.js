import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Contact.css';

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    }
  }
};

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Para que se dispare cada vez que el componente entre en vista
    threshold: 0.2,     // Se activa cuando el 20% del componente es visible
  });

  return (
    <div ref={ref} className="contact-container text-center">
      <motion.p 
        className='titulos' 
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        ¡Contáctanos!
      </motion.p>
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Estamos aquí para ayudarte.
      </motion.p>
      <div className="row">
        <motion.div 
          className="col-md-4 mt-4" 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.i 
            className="iconn bi bi-envelope-fill" 
            style={{ fontSize: '2rem' }} 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
          <h5 className="mt-1">E-mail</h5>
          <p>Escríbenos al siguiente correo electrónico.</p>
          <a href="mailto:hello@neighborsale.cl">hello@neighborsale.cl</a>
        </motion.div>
        <motion.div 
          className="col-md-4 mt-4" 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.i 
            className="iconn bi bi-telephone-fill" 
            style={{ fontSize: '2rem' }} 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
          <h5 className="mt-1">Teléfono</h5>
          <p>Contáctanos al siguiente número telefónico.</p>
          <a href="tel:+5696404040431">+569 (640) 404-0431</a>
        </motion.div>
        <motion.div 
          className="col-md-4 mt-4" 
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.i 
            className="iconn bi bi-geo-alt-fill" 
            style={{ fontSize: '2rem' }} 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          />
          <h5 className="mt-1">Oficina</h5>
          <p>También puedes visitarnos en nuestra oficina.</p>
          <a>Providencia, Santiago Chile</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
