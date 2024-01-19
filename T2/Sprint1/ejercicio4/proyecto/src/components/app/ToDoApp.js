import React, { useState } from 'react';
import Tarea from './Tarea';
import './App.css';

const ToDoApp = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      const nuevaTareaObj = {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false,
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
    }
  };

  const completarTarea = (id) => {
    setTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      <div>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoApp;