import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import PerfilUsuario from './PerfilUsuario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/usuario/:id" element={<PerfilUsuario />} />
      </Routes>
    </Router>
  );
};

export default App;