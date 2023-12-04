// usuario.ts

// Definir la interfaz Usuario
interface Usuario {
  nombre: string;
  edad: number;
  sexo: string;
  telefono: string;
}

// Crear una función que acepte un objeto Usuario y devuelva una descripción
function describirUsuario(usuario: Usuario): string {
  return `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Sexo: ${usuario.sexo}, Teléfono: ${usuario.telefono}`;
}

// Crear una función que acepte parámetros para crear un nuevo usuario
function crearUsuario(nombre: string, edad: number, sexo: string, telefono: string): Usuario {
  return { nombre, edad, sexo, telefono };
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(event: Event): void {
  event.preventDefault();

  // Obtener valores del formulario
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const edad = parseInt((document.getElementById('edad') as HTMLInputElement).value, 10);
  const sexo = (document.getElementById('sexo') as HTMLSelectElement).value;
  const telefono = (document.getElementById('telefono') as HTMLInputElement).value;

  // Crear un nuevo usuario y mostrar la descripción en el cuerpo del HTML
  const nuevoUsuario: Usuario = crearUsuario(nombre, edad, sexo, telefono);
  const resultado = document.createElement('p');
  resultado.textContent = describirUsuario(nuevoUsuario);
  document.body.appendChild(resultado);
}

// Agregar un escuchador de eventos al formulario
const formulario = document.getElementById('formulario');
if (formulario) {
  formulario.addEventListener('submit', manejarEnvioFormulario);
}