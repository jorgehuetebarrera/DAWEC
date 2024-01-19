import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  tareas: [],
  categorias: ['Trabajo', 'Personal', 'Estudio'],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_TAREA':
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };
    case 'TOGGLE_COMPLETADA':
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload ? { ...tarea, completada: !tarea.completada } : tarea
        ),
      };
    case 'EDITAR_TAREA':
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? { ...tarea, texto: action.payload.texto } : tarea
        ),
      };
    case 'ELIMINAR_TAREA':
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case 'AGREGAR_CATEGORIA':
      return {
        ...state,
        categorias: [...state.categorias, action.payload],
      };
    default:
      return state;
  }
};

const useLocalStorageReducer = (key, reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

const ToDoApp = () => {
  const [state, dispatch] = useLocalStorageReducer('tareasApp', reducer, initialState);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() === '' || categoriaSeleccionada.trim() === '') return;
    const tareaNueva = {
      id: Date.now(),
      texto: nuevaTarea,
      categoria: categoriaSeleccionada,
      completada: false,
    };
    dispatch({ type: 'AGREGAR_TAREA', payload: tareaNueva });
    setNuevaTarea('');
  };

  const agregarCategoria = (e) => {
    e.preventDefault();
    if (nuevaCategoria.trim() === '') return;
    dispatch({ type: 'AGREGAR_CATEGORIA', payload: nuevaCategoria });
    setNuevaCategoria('');
  };

  return (
    <div>
      <h1>Gestor de Tareas Avanzado</h1>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Introduce una tarea"
        />
        <select
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <option value="">Selecciona una categoría</option>
          {state.categorias.map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <button type="submit">Agregar Tarea</button>
      </form>
      <form onSubmit={agregarCategoria}>
        <input
          type="text"
          value={nuevaCategoria}
          onChange={(e) => setNuevaCategoria(e.target.value)}
          placeholder="Añade una nueva categoría"
        />
        <button type="submit">Agregar Categoría</button>
      </form>
      <ul>
        {state.tareas.map((tarea) => (
          <li key={tarea.id} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            {tarea.texto} ({tarea.categoria})
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => dispatch({ type: 'TOGGLE_COMPLETADA', payload: tarea.id })}
            />
            <button onClick={() => dispatch({ type: 'ELIMINAR_TAREA', payload: tarea.id })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;