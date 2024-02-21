import React from 'react';
import ArbolDecisiones from './arbolDecisiones.js';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Juego de Decisiones</h1>
      <ArbolDecisiones />
    </div>
  );
};

export default App;