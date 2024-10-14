import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar'; // Asegúrate de que esta ruta es correcta
import Footer from '../src/components/Footer'; // Asegúrate de que esta ruta es correcta
import Home from '../src/components/Home'; // Asegúrate de que esta ruta es correcta
import Download from './components/Download';
import Contact from './components/Contact';
import Nosotros from './components/Nosotros';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Nosotros/>
      <Download />
      <Contact />
      <Footer />
    </>
  )
}

export default App
