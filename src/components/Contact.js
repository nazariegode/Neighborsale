import React from 'react';
import '../styles/Contact.css';


const Contact = () => {
  return (
    <div className="contact-container text-center">
      <h2>¡Contáctanos!</h2>
      <p>Estamos aquí para ayudarte.</p>
      <div className="row w-100">
        <div className="col-md-4">
          <i className="iconn bi bi-envelope-fill" style={{ fontSize: '2rem' }}></i>
          <h5 className="mt-3">Email</h5>
          <p>Escríbenos al siguiente correo electrónico.</p>
          <a href="mailto:hello@geekfood.cl">hello@geekfood.cl</a>
        </div>
        <div className="col-md-4">
          <i className="iconn bi bi-telephone-fill" style={{ fontSize: '2rem' }}></i>
          <h5 className="mt-3">Teléfono</h5>
          <p>Contáctanos al siguiente número telefónico.</p>
          <a href="tel:+5696404040431">+569 (640) 404-0431</a>
        </div>
        <div className="col-md-4">
          <i className="iconn bi bi-geo-alt-fill" style={{ fontSize: '2rem' }}></i>
          <h5 className="mt-3">Oficina</h5>
          <p>También puedes visitarnos en nuestra oficina.</p>
          <p>Providencia, Santiago Chile</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;