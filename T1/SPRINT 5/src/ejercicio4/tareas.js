"use strict";
// tareas.ts
// Crear arrays para almacenar las tareas normales y las tareas importantes
let listaTareasNormales = [];
let listaTareasImportantes = [];
// Variable para rastrear el estado del modo oscuro
let modoOscuro = false;
// Función para añadir una nueva tarea a la lista de tareas normales
function agregarTareaNormal() {
    var _a;
    const titulo = (_a = prompt('Introduce el título de la nueva tarea')) === null || _a === void 0 ? void 0 : _a.trim();
    if (titulo !== undefined && titulo !== null) {
        console.log('Título introducido:', titulo); // Agregamos un log para depurar
        if (titulo !== '') {
            const nuevaTarea = {
                id: listaTareasNormales.length + 1,
                titulo: titulo,
                completada: false,
                importante: false,
            };
            listaTareasNormales.push(nuevaTarea);
            mostrarTareas();
        }
        else {
            console.error('Error: El título está vacío.'); // Agregamos un log para depurar
        }
        console.log('Lista de tareas después de agregar:', listaTareasNormales); // Agregamos un log para depurar
    }
    else {
        console.error('Error: El título es undefined o null.'); // Agregamos un log para depurar
    }
}
// Función para añadir una nueva tarea a la lista de tareas importantes
function agregarTareaImportante() {
    const inputTarea = document.getElementById('nuevaTarea');
    const titulo = inputTarea.value.trim();
    if (titulo !== '') {
        const nuevaTarea = {
            id: listaTareasImportantes.length + 1,
            titulo: titulo,
            completada: false,
            importante: true,
        };
        listaTareasImportantes.push(nuevaTarea);
        mostrarTareas();
        inputTarea.value = ''; // Limpiar el campo de entrada después de agregar la tarea
    }
}
// Función para marcar una tarea como completada por su id
function completarTarea(id, lista) {
    const tarea = lista.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        mostrarTareas();
    }
}
// Función para marcar una tarea como importante por su id
function marcarComoImportante(id) {
    const tarea = listaTareasNormales.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.importante = !tarea.importante;
        // También agregamos la tarea a la lista de tareas importantes
        listaTareasImportantes.push(Object.assign(Object.assign({}, tarea), { importante: true }));
        mostrarTareas();
    }
}
// Función para eliminar una tarea por su id
function eliminarTarea(id, lista) {
    const index = lista.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        lista.splice(index, 1);
        mostrarTareas();
    }
}
// Función para eliminar tareas completadas
function eliminarTareasCompletadas() {
    listaTareasNormales = listaTareasNormales.filter(tarea => !tarea.completada);
    listaTareasImportantes = listaTareasImportantes.filter(tarea => !tarea.completada);
    mostrarTareas();
}
// Función para mostrar las tareas en la consola y en el HTML
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
            const tareaElement = crearElementoTarea(tarea, listaTareasNormales);
            listaTareasElement.appendChild(tareaElement);
        });
        // Actualizar la lista de tareas importantes en el HTML
        listaTareasImportantes.forEach(tarea => {
            const tareaElement = crearElementoTarea(tarea, listaTareasImportantes);
            listaTareasImportantesElement.appendChild(tareaElement);
        });
    }
}
// Función para crear un elemento de tarea con botones
function crearElementoTarea(tarea, lista) {
    const tareaElement = document.createElement('div');
    tareaElement.className = `tarea ${tarea.importante ? 'tarea-importante' : ''}`;
    const textoTarea = document.createElement('span');
    textoTarea.textContent = tarea.titulo;
    tareaElement.appendChild(textoTarea);
    // Botón para completar tarea
    const completarButton = document.createElement('button');
    completarButton.textContent = tarea.completada ? 'Pendiente' : 'Completar';
    completarButton.addEventListener('click', () => completarTarea(tarea.id, lista));
    tareaElement.appendChild(completarButton);
    // Botón para marcar como importante
    const importanteButton = document.createElement('button');
    importanteButton.textContent = tarea.importante ? 'No Importante' : 'Importante';
    importanteButton.addEventListener('click', () => marcarComoImportante(tarea.id));
    tareaElement.appendChild(importanteButton);
    // Botón para eliminar tarea
    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    eliminarButton.className = 'eliminar-button'; // Nueva clase para estilo de eliminación
    eliminarButton.addEventListener('click', () => eliminarTarea(tarea.id, lista));
    tareaElement.appendChild(eliminarButton);
    return tareaElement;
}
// Mostrar las tareas al cargar la página
mostrarTareas();
