import React from 'react';

const Tarea = ({ tarea, completarTarea, eliminarTarea }) => {
  return (
    <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => completarTarea(tarea.id)}
      />
      <span>{tarea.texto}</span>
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </div>
  );
};

export default Tarea;