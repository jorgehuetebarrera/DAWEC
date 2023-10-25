function filtrarPropiedades(obj, propiedades) {
  const resultado = {};

  for (const propiedad of propiedades) {
      if (obj.hasOwnProperty(propiedad)) {
          resultado[propiedad] = obj[propiedad];
      }
  }

  return resultado;
}

const entrada = { a: 1, b: 2, c: 3, d: 4 };
const props = ["d", "a"];
const resultado = filtrarPropiedades(entrada, props);

document.getElementById("entrada").textContent = JSON.stringify(entrada, null, 2);
document.getElementById("propiedades").textContent = JSON.stringify(props, null, 2);
document.getElementById("resultado").textContent = JSON.stringify(resultado, null, 2);