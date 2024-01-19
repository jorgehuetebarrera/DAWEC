import React from 'react';

const Filtro = ({ opciones, seleccionarOpcion, agregarTarea }) => {
  const handleAgregarTarea = () => {
    // Llama a la función agregarTarea cuando sea necesario
    agregarTarea(/* Pasa los parámetros necesarios para agregar una tarea */);
  };

  return (
    <div>
      {/* Tu código actual para el componente Filtro */}
      <button onClick={handleAgregarTarea}>Agregar Tarea</button>
    </div>
  );
};

export default Filtro;