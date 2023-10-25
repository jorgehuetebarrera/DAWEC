function transponerMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;

  // Inicializa una nueva matriz para almacenar la transposición.
  const matrizTranspuesta = new Array(columnas);

  for (let i = 0; i < columnas; i++) {
      matrizTranspuesta[i] = new Array(filas);
  }

  // Llena la matriz transpuesta intercambiando filas por columnas.
  for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
          matrizTranspuesta[j][i] = matriz[i][j];
      }
  }

  return matrizTranspuesta;
}

// Matriz de ejemplo
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Obtener el elemento de la matriz de entrada y mostrarla
var entradaElement = document.getElementById("entrada");
entradaElement.textContent = JSON.stringify(matriz);

// Calcular la matriz transpuesta
var matrizTranspuesta = transponerMatriz(matriz);

// Obtener el elemento de la matriz transpuesta y mostrarla
var resultadoElement = document.getElementById("resultado");
resultadoElement.textContent = JSON.stringify(matrizTranspuesta);