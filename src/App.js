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


function App() {
  return (
    <div className="App">
      <Navbar />
        <Home />
        <Download/>
        <Contact/>
      <Footer />
    </div>
  );
}

export default App;
