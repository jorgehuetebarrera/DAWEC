import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h2>Bienvenido al Perfil de Usuarios</h2>
      <ul>
        <li><Link to="/usuario/1">Perfil de Usuario 1</Link></li>
        <li><Link to="/usuario/2">Perfil de Usuario 2</Link></li>
        <li><Link to="/usuario/3">Perfil de Usuario 3</Link></li>
      </ul>
    </div>
  );
};

export default Inicio;