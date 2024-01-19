import React from 'react';
import Tarea from './Tarea';

const TareasList = ({ tareas, completarTarea, editarTarea, eliminarTarea }) => {
  return (
    <div>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          completarTarea={completarTarea}
          editarTarea={editarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
};

export default TareasList;