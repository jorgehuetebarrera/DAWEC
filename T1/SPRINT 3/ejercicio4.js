function cadenaMasLarga(arr) {
    if (arr.length === 0) {
        // Manejo de caso especial: el array está vacío
        return { cadena: null, longitud: 0 };
    }

    let cadenaMasLarga = arr[0]; // Inicializamos con la primera cadena
    let longitudMasLarga = cadenaMasLarga.length;

    for (let i = 1; i < arr.length; i++) {
        const cadenaActual = arr[i];
        if (cadenaActual.length > longitudMasLarga) {
            // Si la cadena actual es más larga, actualizamos la cadena y su longitud
            cadenaMasLarga = cadenaActual;
            longitudMasLarga = cadenaActual.length;
        }
    }

    return { cadena: cadenaMasLarga, longitud: longitudMasLarga };
}

// Ejemplo de uso:
const arrayDeCadenas = ["manzana", "plátano", "fresa", "kiwi"];
const resultado = cadenaMasLarga(arrayDeCadenas);
console.log("La cadena más larga es: " + resultado.cadena);
console.log("Su longitud es: " + resultado.longitud);