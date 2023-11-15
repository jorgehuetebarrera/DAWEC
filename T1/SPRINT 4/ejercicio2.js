async function obtenerInformacionPokemon(nombrePokemon) {
    try {
      // Hacer la petición a la PokeAPI
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
      
      // Verificar si la respuesta es exitosa
      if (!respuesta.ok) {
        throw new Error('Pokémon no encontrado');
      }
      
      // Convertir la respuesta a formato JSON
      const datosPokemon = await respuesta.json();
      
      // Extraer la información relevante del Pokémon
      const nombre = datosPokemon.name;
      const id = datosPokemon.id;
      const tipos = datosPokemon.types.map(tipo => tipo.type.name);
      const imagenUrl = datosPokemon.sprites.front_default;
  
      return { nombre, id, tipos, imagenUrl };
      
    } catch (error) {
      // Manejar errores de manera adecuada
      console.error(`Error: ${error.message}`);
      return null;
    }
  }
  
  async function obtenerEstadisticasPokemon(nombrePokemon) {
    try {
      // Hacer la petición a la PokeAPI
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
      
      // Verificar si la respuesta es exitosa
      if (!respuesta.ok) {
        throw new Error('Pokémon no encontrado');
      }
      
      // Convertir la respuesta a formato JSON
      const datosPokemon = await respuesta.json();
      
      // Extraer las estadísticas base del Pokémon
      const estadisticas = datosPokemon.stats.map(stat => ({ nombre: stat.stat.name, valor: stat.base_stat }));
      return estadisticas;
      
    } catch (error) {
      // Manejar errores de manera adecuada
      console.error(`Error: ${error.message}`);
      return null;
    }
  }
  
  async function compararPokemon() {
    const inputPokemon1 = document.getElementById('pokemonInput1').value;
    const inputPokemon2 = document.getElementById('pokemonInput2').value;
  
    if (inputPokemon1.trim() !== '' && inputPokemon2.trim() !== '') {
      // Obtener información y estadísticas de ambos Pokémon
      const infoPokemon1 = await obtenerInformacionPokemon(inputPokemon1);
      const infoPokemon2 = await obtenerInformacionPokemon(inputPokemon2);
      const estadisticasPokemon1 = await obtenerEstadisticasPokemon(inputPokemon1);
      const estadisticasPokemon2 = await obtenerEstadisticasPokemon(inputPokemon2);
  
      if (infoPokemon1 && infoPokemon2 && estadisticasPokemon1 && estadisticasPokemon2) {
        // Crear la tabla comparativa
        const tablaHTML = `
          <h2>Comparativa de Pokémon</h2>
          <table border="1">
            <tr>
              <th></th>
              <th>${infoPokemon1.nombre} (#${infoPokemon1.id})</th>
              <th>${infoPokemon2.nombre} (#${infoPokemon2.id})</th>
            </tr>
            <tr>
              <td>Imagen</td>
              <td><img src="${infoPokemon1.imagenUrl}" alt="${infoPokemon1.nombre}"></td>
              <td><img src="${infoPokemon2.imagenUrl}" alt="${infoPokemon2.nombre}"></td>
            </tr>
            ${estadisticasPokemon1.map(stat => `
              <tr>
                <td>${stat.nombre}</td>
                <td>${stat.valor}</td>
                <td>${encontrarValorEstadistica(stat.nombre, estadisticasPokemon2)}</td>
              </tr>
            `).join('')}
          </table>
        `;
  
        // Mostrar la tabla en el contenedor
        document.getElementById('comparativa-info').innerHTML = tablaHTML;
      }
    } else {
      console.error('Ingrese nombres o números de Pokémon válidos para comparar.');
    }
  }
  
  function encontrarValorEstadistica(nombre, estadisticas) {
    const estadistica = estadisticas.find(stat => stat.nombre === nombre);
    return estadistica ? estadistica.valor : 'N/A';
  }
  