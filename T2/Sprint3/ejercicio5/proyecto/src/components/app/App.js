import React from 'react';
import HolaMundo from './HolaMundo';
import Saludo from './Saludo';

const App = () => {
  return (
    <div>
      <HolaMundo />
      <Saludo nombre="Juan" />
      <Saludo nombre="María" />
      <Saludo nombre="Carlos" />
      {}
    </div>
  );
};

export default App;