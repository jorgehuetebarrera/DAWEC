"use strict";
// usuario.ts
// Crear una función que acepte un objeto Usuario y devuelva una descripción
function describirUsuario(usuario) {
    return `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Sexo: ${usuario.sexo}, Teléfono: ${usuario.telefono}`;
}
// Crear una función que acepte parámetros para crear un nuevo usuario
function crearUsuario(nombre, edad, sexo, telefono) {
    return { nombre, edad, sexo, telefono };
}
// Función para manejar el envío del formulario
function manejarEnvioFormulario(event) {
    event.preventDefault();
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value, 10);
    const sexo = document.getElementById('sexo').value;
    const telefono = document.getElementById('telefono').value;
    // Crear un nuevo usuario y mostrar la descripción en el cuerpo del HTML
    const nuevoUsuario = crearUsuario(nombre, edad, sexo, telefono);
    const resultado = document.createElement('p');
    resultado.textContent = describirUsuario(nuevoUsuario);
    document.body.appendChild(resultado);
}
// Agregar un escuchador de eventos al formulario
const formulario = document.getElementById('formulario');
if (formulario) {
    formulario.addEventListener('submit', manejarEnvioFormulario);
}
