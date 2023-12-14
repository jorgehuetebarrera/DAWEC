// holaMundo.ts

function saludarHolaMundo(): void {
  const mensaje: string = "Hola mundo!";
  console.log(mensaje);

  // Mostrar el mensaje en el cuerpo del HTML
  document.body.innerHTML = `<h1>${mensaje}</h1>`;
}

// Llamar a la función
saludarHolaMundo();