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
        console.error(`Error: ${error.message}`);
        return null;
      }
    }
    
    window.obtenerEvolucionesYHabilidadesPokemon = obtenerEvolucionesYHabilidadesPokemon;