function filtrarPropiedades(obj, propiedades) {
    const resultado = {};
  
    for (const propiedad of propiedades) {
      if (obj.hasOwnProperty(propiedad)) {
        resultado[propiedad] = obj[propiedad];
      }
    }
  
    return resultado;
  }
  
  var entrada = {a: 1, b: 2, c: 3, d: 4};
  var props = ["d", "a"];
  var resultado = filtrarPropiedades(entrada, props);
  console.log(resultado); 