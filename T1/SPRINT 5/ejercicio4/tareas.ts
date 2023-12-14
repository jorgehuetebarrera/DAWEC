// tareas.ts

// Definir la interfaz para una tarea
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
  importante: boolean;
}

// Crear arrays para almacenar las tareas normales y las tareas importantes
let listaTareasNormales: Tarea[] = [];
let listaTareasImportantes: Tarea[] = [];

// Variable para rastrear el estado del modo oscuro
let modoOscuro = false;


// Función para añadir una nueva tarea a la lista de tareas normales
function agregarTareaNormal(): void {
  const titulo = prompt('Introduce el título de la nueva tarea')?.trim();

  if (titulo !== undefined && titulo !== null) {
    console.log('Título introducido:', titulo); // Agregamos un log para depurar

    if (titulo !== '') {
      const nuevaTarea: Tarea = {
        id: listaTareasNormales.length + 1,
        titulo: titulo,
        completada: false,
        importante: false,
      };
      listaTareasNormales.push(nuevaTarea);
      mostrarTareas();
    } else {
      console.error('Error: El título está vacío.'); // Agregamos un log para depurar
    }

    console.log('Lista de tareas después de agregar:', listaTareasNormales); // Agregamos un log para depurar
  } else {
    console.error('Error: El título es undefined o null.'); // Agregamos un log para depurar
  }
}

// Función para añadir una nueva tarea a la lista de tareas importantes
function agregarTareaImportante(): void {
  const inputTarea = document.getElementById('nuevaTarea') as HTMLInputElement;
  const titulo = inputTarea.value.trim();

  if (titulo !== '') {
    const nuevaTarea: Tarea = {
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

// Función para eliminar tareas completadas
function eliminarTareasCompletadas(): void {
  listaTareasNormales = listaTareasNormales.filter(tarea => !tarea.completada);
  listaTareasImportantes = listaTareasImportantes.filter(tarea => !tarea.completada);
  mostrarTareas();
}

// Función para mostrar las tareas en la consola y en el HTML
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
function crearElementoTarea(tarea: Tarea, lista: Tarea[]): HTMLDivElement {
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
