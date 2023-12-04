"use strict";
// tareas.ts
// Crear arrays para almacenar las tareas normales y las tareas importantes
const listaTareasNormales = [];
const listaTareasImportantes = [];
// Variable para rastrear el estado del modo oscuro
let modoOscuro = false;
// Función para añadir una nueva tarea a la lista de tareas normales
function agregarTareaNormal(titulo) {
    const nuevaTarea = {
        id: listaTareasNormales.length + 1,
        titulo,
        completada: false,
        importante: false,
    };
    listaTareasNormales.push(nuevaTarea);
    mostrarTareas();
}
// Función para añadir una nueva tarea a la lista de tareas importantes
function agregarTareaImportante(titulo) {
    const nuevaTarea = {
        id: listaTareasImportantes.length + 1,
        titulo,
        completada: false,
        importante: true,
    };
    listaTareasImportantes.push(nuevaTarea);
    mostrarTareas();
}
// Función para marcar una tarea como completada por su id
function completarTarea(id, lista) {
    const tarea = lista.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = true;
        mostrarTareas();
    }
}
// Función para marcar una tarea como importante por su id
function marcarComoImportante(id) {
    const tarea = listaTareasNormales.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.importante = true;
        // También agregamos la tarea a la lista de tareas importantes
        listaTareasImportantes.push(Object.assign(Object.assign({}, tarea), { importante: true }));
        mostrarTareas();
    }
}
// Función para mostrar las tareas en la consola
function mostrarTareas() {
    console.log("Lista de Tareas Normales:");
    listaTareasNormales.forEach(tarea => {
        console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Completada: ${tarea.completada ? 'Sí' : 'No'}, Importante: ${tarea.importante ? 'Sí' : 'No'}`);
    });
    console.log("\nLista de Tareas Importantes:");
    listaTareasImportantes.forEach(tarea => {
        console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, Completada: ${tarea.completada ? 'Sí' : 'No'}, Importante: Sí`);
    });
    actualizarListasEnHTML();
}
// Función para actualizar las listas en el HTML
function actualizarListasEnHTML() {
    const listaTareasElement = document.getElementById('listaTareas');
    const listaTareasImportantesElement = document.getElementById('listaTareasImportantes');
    if (listaTareasElement && listaTareasImportantesElement) {
        // Limpiar las listas antes de actualizarlas
        listaTareasElement.innerHTML = '';
        listaTareasImportantesElement.innerHTML = '';
        // Actualizar la lista de tareas normales en el HTML
        listaTareasNormales.forEach(tarea => {
            const tareaElement = document.createElement('div');
            tareaElement.textContent = `${tarea.titulo} - ${tarea.completada ? 'Completada' : 'Pendiente'}`;
            tareaElement.className = `tarea ${tarea.importante ? 'tarea-importante' : ''}`;
            // Agregar botón para completar tarea
            const completarButton = document.createElement('button');
            completarButton.textContent = 'Completar';
            completarButton.addEventListener('click', () => completarTarea(tarea.id, listaTareasNormales));
            tareaElement.appendChild(completarButton);
            listaTareasElement.appendChild(tareaElement);
        });
        // Actualizar la lista de tareas importantes en el HTML
        listaTareasImportantes.forEach(tarea => {
            const tareaElement = document.createElement('div');
            tareaElement.textContent = `${tarea.titulo} - ${tarea.completada ? 'Completada' : 'Pendiente'}`;
            tareaElement.className = 'tarea tarea-importante';
            // Agregar botón para completar tarea
            const completarButton = document.createElement('button');
            completarButton.textContent = 'Completar';
            completarButton.addEventListener('click', () => completarTarea(tarea.id, listaTareasImportantes));
            tareaElement.appendChild(completarButton);
            listaTareasImportantesElement.appendChild(tareaElement);
        });
    }
}
// Función para cambiar entre modos claro y oscuro
function toggleModoOscuro() {
    modoOscuro = !modoOscuro;
    // Obtener elementos después de que el documento esté completamente cargado
    const body = document.body;
    const h1 = document.querySelector('h1');
    const tareas = document.getElementById('tareas');
    const tareasImportantes = document.getElementById('tareasImportantes');
    const modoOscuroButton = document.getElementById('modoOscuro');
    if (modoOscuro && body && h1 && tareas && tareasImportantes && modoOscuroButton) {
        body.style.backgroundColor = '#222';
        body.style.color = '#eee';
        h1.style.color = '#eee';
        tareas.style.backgroundColor = '#444';
        tareasImportantes.style.backgroundColor = '#444';
        modoOscuroButton.style.backgroundColor = '#555';
    }
    else if (!modoOscuro && body && h1 && tareas && tareasImportantes && modoOscuroButton) {
        body.style.backgroundColor = '#f5f5f5';
        body.style.color = '#333';
        h1.style.color = '#555';
        tareas.style.backgroundColor = '';
        tareasImportantes.style.backgroundColor = '';
        modoOscuroButton.style.backgroundColor = '#4CAF50';
    }
}
