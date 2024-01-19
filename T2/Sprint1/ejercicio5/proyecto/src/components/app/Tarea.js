import React from 'react';

const Tarea = ({ tarea, completarTarea, editarTarea, eliminarTarea }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => completarTarea(tarea.id)}
      />
      <span>{tarea.texto}</span>
      <button onClick={() => editarTarea(tarea.id)}>Editar</button>
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </div>
  );
};

export default Tarea;