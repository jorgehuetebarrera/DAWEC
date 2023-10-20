function fusionarObjetos(obj1, obj2) {
    const resultado = { ...obj1, ...obj2 };
    return resultado;
  }
  
  // Ejemplo de uso:
  var objeto1 = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
  var objeto2 = { edad: 35, profesion: "Ingeniero", ciudad: "Barcelona" };
  
  var objetoFusionado = fusionarObjetos(objeto1, objeto2);
  console.log(objetoFusionado);