document.getElementById("fusionarBoton").addEventListener("click", function() {
  var objeto1 = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
  var objeto2 = { edad: 35, profesion: "Ingeniero", ciudad: "Barcelona" };

  var objetoFusionado = fusionarObjetos(objeto1, objeto2);

  var resultadoTable = document.getElementById("resultado").getElementsByTagName('tbody')[0];
  resultadoTable.innerHTML = '';

  for (const propiedad in objetoFusionado) {
      var row = resultadoTable.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = propiedad;
      cell2.innerHTML = objetoFusionado[propiedad];
  }
});
function fusionarObjetos(obj1, obj2) {
  const resultado = { ...obj1, ...obj2 };
  return resultado;
}



