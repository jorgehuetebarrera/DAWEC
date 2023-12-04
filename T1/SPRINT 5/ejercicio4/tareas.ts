// tareas.ts

// Definir la interfaz para una tarea
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    importante: boolean;
  }
  
  // Crear arrays para almacenar las tareas normales y las tareas importantes
  const listaTareasNormales: Tarea[] = [];
  const listaTareasImportantes: Tarea[] = [];
  
  // Variable para rastrear el estado del modo oscuro
  let modoOscuro = false;
  
  // Función para añadir una nueva tarea a la lista de tareas normales
  function agregarTareaNormal(titulo: string): void {
    const nuevaTarea: Tarea = {
      id: listaTareasNormales.length + 1,
      titulo,
      completada: false,
      importante: false,
    };
    listaTareasNormales.push(nuevaTarea);
    mostrarTareas();
  }
  
  // Función para añadir una nueva tarea a la lista de tareas importantes
  function agregarTareaImportante(titulo: string): void {
    const nuevaTarea: Tarea = {
      id: listaTareasImportantes.length + 1,
      titulo,
      completada: false,
      importante: true,
    };
    listaTareasImportantes.push(nuevaTarea);
    mostrarTareas();
  }
  
  // Función para marcar una tarea como completada por su id
  function completarTarea(id: number, lista: Tarea[]): void {
    const tarea = lista.find(tarea => tarea.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      mostrarTareas();
    }
  }
  
  // Función para marcar una tarea como importante por su id
  function marcarComoImportante(id: number): void {
    const tarea = listaTareasNormales.find(tarea => tarea.id === id);
    if (tarea) {
      tarea.importante = !tarea.importante;
      // También agregamos la tarea a la lista de tareas importantes
      listaTareasImportantes.push({ ...tarea, importante: true });
      mostrarTareas();
    }
  }
  
  // Función para eliminar una tarea por su id
  function eliminarTarea(id: number, lista: Tarea[]): void {
    const index = lista.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
      lista.splice(index, 1);
      mostrarTareas();
    }
  }
  
  // Función para mostrar las tareas en la consola
  function mostrarTareas(): void {
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
  function actualizarListasEnHTML(): void {
    const listaTareasElement = document.getElementById('listaTareas');
    const listaTareasImportantesElement = document.getElementById('listaTareasImportantes');
  
    if (listaTareasElement && listaTareasImportantesElement) {
      // Limpiar las listas antes de actualizarlas
      listaTareasElement.innerHTML = '';
      listaTareasImportantesElement.innerHTML = '';
  
      // Actualizar la lista de tareas normales en el HTML
      listaTareasNormales.forEach(tarea => {
        const tareaElement = document.createElement('div');
        tareaElement.className = `tarea ${tarea.importante ? 'tarea-importante' : ''}`;
  
        const textoTarea = document.createElement('span');
        textoTarea.textContent = tarea.titulo;
        tareaElement.appendChild(textoTarea);
  
        // Botón para completar tarea
        const completarButton = document.createElement('button');
        completarButton.textContent = tarea.completada ? 'Pendiente' : 'Completar';
        completarButton.addEventListener('click', () => completarTarea(tarea.id, listaTareasNormales));
        tareaElement.appendChild(completarButton);
  
        // Botón para marcar como importante
        const importanteButton = document.createElement('button');
        importanteButton.textContent = tarea.importante ? 'No Importante' : 'Importante';
        importanteButton.addEventListener('click', () => marcarComoImportante(tarea.id));
        tareaElement.appendChild(importanteButton);
  
        // Botón para eliminar tarea
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.addEventListener('click', () => eliminarTarea(tarea.id, listaTareasNormales));
        tareaElement.appendChild(eliminarButton);
  
        listaTareasElement.appendChild(tareaElement);
      });
  
      // Actualizar la lista de tareas importantes en el HTML
      listaTareasImportantes.forEach(tarea => {
        const tareaElement = document.createElement('div');
        tareaElement.className = 'tarea tarea-importante';
  
        const textoTarea = document.createElement('span');
        textoTarea.textContent = tarea.titulo;
        tareaElement.appendChild(textoTarea);
  
        // Botón para completar tarea
        const completarButton = document.createElement('button');
        completarButton.textContent = tarea.completada ? 'Pendiente' : 'Completar';
        completarButton.addEventListener('click', () => completarTarea(tarea.id, listaTareasImportantes));
        tareaElement.appendChild(completarButton);
  
        // Botón para marcar como importante
        const importanteButton = document.createElement('button');
        importanteButton.textContent = tarea.importante ? 'No Importante' : 'Importante';
        importanteButton.addEventListener('click', () => marcarComoImportante(tarea.id));
        tareaElement.appendChild(importanteButton);
  
        // Botón para eliminar tarea
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.addEventListener('click', () => eliminarTarea(tarea.id, listaTareasImportantes));
        tareaElement.appendChild(eliminarButton);
  
        listaTareasImportantesElement.appendChild(tareaElement);
      });
    }
  }
  
  // Función para cambiar entre modos claro y oscuro
  function toggleModoOscuro(): void {
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
    } else if (!modoOscuro && body && h1 && tareas && tareasImportantes && modoOscuroButton) {
      body.style.backgroundColor = '#f5f5f5';
      body.style.color = '#333';
      h1.style.color = '#555';
      tareas.style.backgroundColor = '';
      tareasImportantes.style.backgroundColor = '';
      modoOscuroButton.style.backgroundColor = '#4CAF50';
    }
  }
  
  // ... (Código posterior) ...
  