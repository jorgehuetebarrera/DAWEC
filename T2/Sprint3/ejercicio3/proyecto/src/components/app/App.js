import React from 'react';
import BuscadorPeliculas from './BuscadorPeliculas'; // Importamos el componente BuscadorPeliculas

const App = () => {
  return (
    <div>
      <h1>Buscador de Películas</h1>
      <BuscadorPeliculas /> {/* Agregamos el componente BuscadorPeliculas aquí */}
    </div>
  );
};

export default App;