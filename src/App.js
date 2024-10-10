import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
