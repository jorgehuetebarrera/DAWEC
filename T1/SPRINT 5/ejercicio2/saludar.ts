// saludar.ts

function saludar(): void {
    const nombre: string | null = prompt('Por favor, ingresa tu nombre:');
    const edadStr: string | null = prompt('Ahora, ingresa tu edad:');
  
    if (nombre === null || edadStr === null) {
      console.log('No se ingresaron datos válidos.');
    } else {
      const edad: number = parseInt(edadStr);
  
      if (isNaN(edad)) {
        console.log('La edad ingresada no es válida. Por favor, ingresa un número.');
      } else {
        // Mostrar el saludo en el cuerpo del HTML
        document.body.innerHTML = `<h1>¡Hola ${nombre}! Tienes ${edad} años. ¡Bienvenido!</h1>`;
      }
    }
  }
  
  // Llamar a la función
  saludar();