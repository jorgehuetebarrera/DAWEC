import React, { useState, useEffect } from 'react';
import TareasList from './TareasList';
import CategoriasList from './CategoriasList';
import FormularioTarea from './FormularioTarea'; // Importa el componente FormularioTarea
import Filtro from './Filtro';
import './App.css';

const ToDoApp = () => {
  const [tareas, setTareas] = useState([]);
  const [categorias, setCategorias] = useState(['Trabajo', 'Personal', 'Estudio']);
  const [filtro, setFiltro] = useState('Todas');

  useEffect(() => {
    // Cargar tareas y categorías desde Local Storage al iniciar
    const storedTareas = JSON.parse(localStorage.getItem('tareas')) || [];
    const storedCategorias = JSON.parse(localStorage.getItem('categorias')) || ['Trabajo', 'Personal', 'Estudio'];

    setTareas(storedTareas);
    setCategorias(storedCategorias);
  }, []);

  useEffect(() => {
    // Guardar tareas y categorías en Local Storage cuando cambian
    localStorage.setItem('tareas', JSON.stringify(tareas));
    localStorage.setItem('categorias', JSON.stringify(categorias));
  }, [tareas, categorias]);

  const agregarTarea = (nuevaTarea) => {
    // Crear una copia del array de tareas actual
    const nuevasTareas = [...tareas];

    // Agregar la nueva tarea con un ID único
    const nuevaTareaConID = {
      id: Date.now(),
      texto: nuevaTarea.texto,
      completada: false,
      categoria: nuevaTarea.categoria,
    };

    nuevasTareas.push(nuevaTareaConID);

    // Actualizar el estado de tareas con la nueva tarea
    setTareas(nuevasTareas);
  };

  const completarTarea = (id) => {
    // Crear una copia del array de tareas actual
    const tareasActualizadas = [...tareas];

    // Encontrar la tarea con el ID proporcionado
    const tareaSeleccionada = tareasActualizadas.find((tarea) => tarea.id === id);

    // Si la tarea existe, actualizar su estado de completado
    if (tareaSeleccionada) {
      tareaSeleccionada.completada = !tareaSeleccionada.completada;

      // Actualizar el estado de tareas con la tarea modificada
      setTareas(tareasActualizadas);
    }
  };

  const editarTarea = (id, nuevoTexto) => {
    // Crear una copia del array de tareas actual
    const tareasActualizadas = [...tareas];

    // Encontrar la tarea con el ID proporcionado
    const tareaSeleccionada = tareasActualizadas.find((tarea) => tarea.id === id);

    // Si la tarea existe, actualizar su texto
    if (tareaSeleccionada) {
      tareaSeleccionada.texto = nuevoTexto;

      // Actualizar el estado de tareas con la tarea modificada
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    // Filtrar las tareas para mantener solo aquellas con un ID diferente al proporcionado
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);

    // Actualizar el estado de tareas con las tareas filtradas
    setTareas(tareasFiltradas);
  };

  const agregarCategoria = () => {
    // Preguntar al usuario por el nombre de la nueva categoría
    const nuevaCategoria = prompt("Ingrese el nombre de la nueva categoría:");

    // Verificar si el usuario ingresó un nombre de categoría
    if (nuevaCategoria) {
      // Crear una copia del array de categorías actual
      const categoriasActualizadas = [...categorias];

      // Agregar la nueva categoría
      categoriasActualizadas.push(nuevaCategoria);

      // Actualizar el estado de categorías con la nueva categoría
      setCategorias(categoriasActualizadas);
    }
  };

  const seleccionarCategoria = (categoria) => {
    // Actualizar el estado del filtro con la categoría seleccionada
    setFiltro(categoria);
  };

  const filtrarTareas = () => {
    // Filtrar las tareas según el estado y la categoría seleccionada
    const tareasFiltradas = tareas.filter((tarea) => {
      // Filtrar por estado (completada, no completada)
      const filtroEstado = filtro === 'Completadas' ? tarea.completada : !tarea.completada;

      // Filtrar por categoría
      const filtroCategoria = filtro === 'Todas' || tarea.categoria === filtro;

      // Combinar ambos filtros
      return filtroEstado && filtroCategoria;
    });

    return tareasFiltradas;
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <CategoriasList
        categorias={categorias}
        agregarCategoria={agregarCategoria}
        seleccionarCategoria={seleccionarCategoria}
      />
      <FormularioTarea onAgregarTarea={agregarTarea} /> {/* Agrega el componente FormularioTarea aquí */}
      <Filtro opciones={['Todas', 'Completadas', ...categorias]} seleccionarOpcion={setFiltro} />
      <TareasList
        tareas={filtrarTareas()}
        completarTarea={completarTarea}
        editarTarea={editarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
};

export default ToDoApp;
