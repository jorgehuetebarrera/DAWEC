// Función para obtener cadena de evolución
async function obtenerCadenaEvolucion(datosEspecie) {
  const cadenaEvolucion = [];

  if (datosEspecie.evolution_chain && datosEspecie.evolution_chain.url) {
    const respuestaEvolucion = await fetch(datosEspecie.evolution_chain.url);
    if (!respuestaEvolucion.ok) {
      throw new Error('Error al obtener detalles de la cadena de evolución');
    }
    const datosEvolucion = await respuestaEvolucion.json();

    // Asumiendo que la estructura de datos está en el formato esperado
    const formasEvolucion = obtenerFormasEvolucion(datosEvolucion.chain);
    cadenaEvolucion.push(...formasEvolucion);
  } else {
    cadenaEvolucion.push(datosEspecie.name);
  }

  return cadenaEvolucion;
}

// Función auxiliar para obtener formas de evolución
function obtenerFormasEvolucion(chain) {
  const formasEvolucion = [];
  const obtenerFormas = (evoluciones) => {
    for (const evolucion of evoluciones) {
      formasEvolucion.push(evolucion.species.name);
      if (evolucion.evolves_to.length > 0) {
        obtenerFormas(evolucion.evolves_to);
      }
    }
  };

  obtenerFormas([chain]);
  return formasEvolucion;
}

// Función para obtener habilidades
function obtenerHabilidades(datosPokemon) {
  return datosPokemon.abilities.map(habilidad => habilidad.ability.name);
}

// Función para obtener detalles de evoluciones y habilidades de un Pokémon
async function obtenerEvolucionesYHabilidadesPokemon(nombrePokemon) {
  try {
    // Obtener detalles de la especie del Pokémon
    const respuestaEspecie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nombrePokemon.toLowerCase()}`);
    if (!respuestaEspecie.ok) {
      throw new Error('Error al obtener detalles de la especie del Pokémon');
    }
    const datosEspecie = await respuestaEspecie.json();

    // Obtener cadena de evolución
    const cadenaEvolucion = await obtenerCadenaEvolucion(datosEspecie);

    // Obtener detalles del Pokémon
    const respuestaPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
    if (!respuestaPokemon.ok) {
      throw new Error('Pokémon no encontrado');
    }
    const datosPokemon = await respuestaPokemon.json();

    // Obtener habilidades
    const habilidades = obtenerHabilidades(datosPokemon);

    // Formatear la información
    const infoEvolucionesYHabilidades = cadenaEvolucion.map((formaEvolucion, index) => ({
      nombre: formaEvolucion,
      habilidades: habilidades
    }));

    return infoEvolucionesYHabilidades;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

// Función para mostrar detalles de habilidades en el modal
async function mostrarDetalles(urlsHabilidades) {
  try {
    // Realizar la segunda consulta para obtener detalles de habilidades
    const detallesHabilidades = await Promise.all(
      urlsHabilidades.map(async (urlHabilidad) => {
        const respuestaHabilidad = await fetch(urlHabilidad);
        if (!respuestaHabilidad.ok) {
          throw new Error('Error al obtener detalles de la habilidad');
        }
        const detalleHabilidad = await respuestaHabilidad.json();

        // Segunda consulta para obtener información detallada de la habilidad
        const respuestaDetalleHabilidad = await fetch(`https://pokeapi.co/api/v2/ability/${detalleHabilidad.name}`);
        if (!respuestaDetalleHabilidad.ok) {
          throw new Error('Error al obtener detalles de la habilidad');
        }
        const detalleCompletoHabilidad = await respuestaDetalleHabilidad.json();

        return {
          name: detalleHabilidad.name,
          effect: detalleCompletoHabilidad.effect_entries[0].effect,
        };
      })
    );

    // Formatear la información y mostrar en el modal
    const detallesHTML = detallesHabilidades.map((detalle) => `
      <p><strong>${detalle.name}</strong> - ${detalle.effect} <button onclick="showAbilityInfo('${detalle.name}')">Ver Detalles</button></p>
    `).join('');

    const modal = document.getElementById('habilidadesModal');
    const detalleHabilidades = document.getElementById('detalleHabilidades');
    detalleHabilidades.innerHTML = detallesHTML;
    modal.style.display = 'block';
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById('habilidadesModal');
  modal.style.display = 'none';
}

async function mostrarInformacion() {
  const inputPokemon3 = document.getElementById('pokemonInput3').value;

  if (inputPokemon3.trim() !== '') {
    try {
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
                <button onclick="mostrarDetalles(${JSON.stringify(formaEvolucion.habilidades)})">Ver Detalles</button>
              </li>
            `).join('')}
          </ul>
        `;

        // Mostrar la lista en el contenedor
        document.getElementById('evoluciones-habilidades-info').innerHTML = listaHTML;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  } else {
    console.error('Ingrese un nombre o número de Pokémon válido.');
  }
}

// Función para mostrar detalles de habilidades usando la nueva función showAbilityInfo
function showAbilityInfo(abilityName) {
  fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`)
    .then(response => response.json())
    .then(abilityData => {
      const englishInfo = abilityData.effect_entries.find(entry => entry.language.name === 'en');
      if (englishInfo) {
        alert(`Ability Name: ${abilityData.names.find(name => name.language.name === 'en').name}\n\nDescription: ${englishInfo.effect}`);
      } else {
        alert('No English description available.');
      }
    })
    .catch(error => console.log('Error fetching ability data:', error));
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  const modal = document.getElementById('habilidadesModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};