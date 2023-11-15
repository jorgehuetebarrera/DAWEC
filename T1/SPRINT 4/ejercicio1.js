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
  
      // Crear el contenido HTML
      const contenidoHTML = `
        <h2>Información del Pokémon</h2>
        <p>Nombre: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Tipos: ${tipos.join(', ')}</p>
        <img src="${imagenUrl}" alt="${nombre}">
      `;
  
      // Mostrar el contenido en el contenedor
      document.getElementById('pokemon-info').innerHTML = contenidoHTML;
      
    } catch (error) {
      // Manejar errores de manera adecuada
      console.error(`Error: ${error.message}`);
    }
  }
  
  function buscarPokemon() {
    const inputPokemon = document.getElementById('pokemonInput').value;
    if (inputPokemon.trim() !== '') {
      obtenerInformacionPokemon(inputPokemon);
    } else {
      console.error('Ingrese un nombre o número de Pokémon válido.');
    }
  }