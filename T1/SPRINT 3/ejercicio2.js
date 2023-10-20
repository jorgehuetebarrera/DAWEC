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
  
  // Ejemplo de uso:
  var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  var matrizTranspuesta = transponerMatriz(matriz);
  console.log(matrizTranspuesta);