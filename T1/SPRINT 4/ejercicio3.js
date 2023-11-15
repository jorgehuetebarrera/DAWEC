// Función para obtener cadena de evolución
function obtenerCadenaEvolucion(datosEvolucionesYHabilidades) {
  const cadenaEvolucion = [datosEvolucionesYHabilidades.name];
  if (datosEvolucionesYHabilidades.evolves_from_species) {
    cadenaEvolucion.unshift(datosEvolucionesYHabilidades.evolves_from_species.name);
  }

  return cadenaEvolucion;
}

// Función para obtener habilidades
function obtenerHabilidades(datosEvolucionesYHabilidades) {
  const habilidades = [];
  if (datosEvolucionesYHabilidades.varieties) {
    for (const forma of datosEvolucionesYHabilidades.varieties) {
      habilidades.push(obtenerHabilidadesForma(forma.pokemon.url));
    }
  } else {
    habilidades.push(obtenerHabilidadesForma(datosEvolucionesYHabilidades.pokemon.url));
  }

  return habilidades;
}

// Función para obtener habilidades de una forma específica
async function obtenerHabilidadesForma(urlForma) {
  const respuesta = await fetch(urlForma);
  const datosForma = await respuesta.json();
  
  return datosForma.abilities.map(habilidad => habilidad.ability.name);
}

// Función para obtener detalles de evoluciones y habilidades de un Pokémon
async function obtenerEvolucionesYHabilidadesPokemon(nombrePokemon) {
  try {
    // Hacer la petición a la PokeAPI para obtener detalles de evoluciones y habilidades
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nombrePokemon.toLowerCase()}`);
    
    // Verificar si la respuesta es exitosa
    if (!respuesta.ok) {
      throw new Error('Pokémon no encontrado');
    }
    
    // Convertir la respuesta a formato JSON
    const datosEvolucionesYHabilidades = await respuesta.json();
    
    // Extraer la cadena de evolución y habilidades
    const cadenaEvolucion = obtenerCadenaEvolucion(datosEvolucionesYHabilidades);
    const habilidades = obtenerHabilidades(datosEvolucionesYHabilidades);

    // Formatear la información
    const infoEvolucionesYHabilidades = cadenaEvolucion.map((formaEvolucion, index) => ({
      nombre: formaEvolucion,
      habilidades: Array.isArray(habilidades[index]) ? habilidades[index] : [habilidades[index] || 'N/A']
    }));

    return infoEvolucionesYHabilidades;
    
  } catch (error) {
    // Manejar errores de manera adecuada
    console.error(`Error: ${error.message}`);
    return null;
  }
}

// Función para mostrar detalles de habilidades en el modal
function mostrarDetalles(habilidades) {
  const modal = document.getElementById('habilidadesModal');
  const detalleHabilidades = document.getElementById('detalleHabilidades');
  detalleHabilidades.innerHTML = `Detalles de habilidades: ${habilidades}`;
  modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById('habilidadesModal');
  modal.style.display = 'none';
}

// Función para mostrar información de evoluciones y habilidades
async function mostrarInformacion() {
  const inputPokemon3 = document.getElementById('pokemonInput3').value;

  if (inputPokemon3.trim() !== '') {
    // Obtener información de evoluciones y habilidades del Pokémon
    const infoEvolucionesYHabilidades = await obtenerEvolucionesYHabilidadesPokemon(inputPokemon3);

    if (infoEvolucionesYHabilidades) {
      // Crear la lista de evoluciones y habilidades
      const listaHTML = `
        <h2>Cadena de Evolución y Habilidades de Pokémon</h2>
        <ul>
          ${infoEvolucionesYHabilidades.map(formaEvolucion => `
            <li>
              <strong>${formaEvolucion.nombre}</strong> - Habilidades: ${formaEvolucion.habilidades.join(', ')}
              <button onclick="mostrarDetalles('${formaEvolucion.habilidades.join(', ')}')">Ver Detalles</button>
            </li>
          `).join('')}
        </ul>
      `;

      // Mostrar la lista en el contenedor
      document.getElementById('evoluciones-habilidades-info').innerHTML = listaHTML;
    }
  } else {
    console.error('Ingrese un nombre o número de Pokémon válido.');
  }
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  const modal = document.getElementById('habilidadesModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
