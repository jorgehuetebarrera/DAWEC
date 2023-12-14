"use strict";
// main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const pokemonInfo = document.getElementById('pokemonInfo');
    if (searchButton && searchInput && pokemonInfo) {
        searchButton.addEventListener('click', () => {
            const input = searchInput.value.trim();
            const isNumeric = /^\d+$/.test(input); // Verificar si la entrada es numérica
            if (input !== '') {
                getPokemonData(input, isNumeric);
            }
        });
        function getPokemonData(input, isNumeric) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Consulta principal para obtener información básica del Pokémon
                    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${isNumeric ? input : input.toLowerCase()}`);
                    const data = yield response.json();
                    // Consulta para obtener información sobre la especie del Pokémon
                    const speciesResponse = yield fetch(data.species.url);
                    const speciesData = yield speciesResponse.json();
                    // Consulta para obtener información sobre la cadena de evolución del Pokémon
                    const evolutionResponse = yield fetch(speciesData.evolution_chain.url);
                    const evolutionData = yield evolutionResponse.json();
                    // Limpiamos el contenido existente antes de agregar nuevo contenido
                    pokemonInfo.innerHTML = '';
                    // Mostramos la imagen principal del Pokémon
                    const pokemonImage = document.createElement('img');
                    pokemonImage.src = data.sprites.front_default;
                    pokemonImage.alt = `Imagen de ${data.name}`;
                    pokemonInfo.appendChild(pokemonImage);
                    // Mostramos la información adicional del Pokémon
                    const pokemonDetails = document.createElement('div');
                    pokemonDetails.innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p>ID: ${data.id}</p>
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <!-- Agrega más detalles según tus necesidades -->
          `;
                    pokemonInfo.appendChild(pokemonDetails);
                    // Mostramos las habilidades del Pokémon
                    const abilities = data.abilities.map((ability) => ability.ability.name).join(', ');
                    const abilitiesElement = document.createElement('div');
                    abilitiesElement.innerHTML = `<p>Habilidades: ${abilities}</p>`;
                    pokemonInfo.appendChild(abilitiesElement);
                    // Mostramos la descripción del Pokémon
                    const descriptions = speciesData.flavor_text_entries.filter((entry) => entry.language.name === 'es');
                    const description = descriptions.length > 0 ? descriptions[0].flavor_text : 'No hay descripción disponible.';
                    const descriptionElement = document.createElement('div');
                    descriptionElement.innerHTML = `<p>Descripción: ${description}</p>`;
                    pokemonInfo.appendChild(descriptionElement);
                    // Mostramos las evoluciones del Pokémon
                    const evolutionChain = yield getEvolutionChain(evolutionData.chain);
                    const evolutionsElement = document.createElement('div');
                    evolutionsElement.innerHTML = '<p>Evoluciones:</p>';
                    evolutionChain.forEach(evolution => {
                        const evolutionInfo = document.createElement('div');
                        evolutionInfo.innerHTML = `<p>${evolution.name}</p>`;
                        if (evolution.image) {
                            const evolutionImage = document.createElement('img');
                            evolutionImage.src = evolution.image;
                            evolutionImage.alt = `Imagen de ${evolution.name}`;
                            evolutionInfo.appendChild(evolutionImage);
                        }
                        evolutionsElement.appendChild(evolutionInfo);
                    });
                    pokemonInfo.appendChild(evolutionsElement);
                }
                catch (error) {
                    console.error('Error al obtener datos del Pokémon:', error);
                    pokemonInfo.innerHTML = '<p>Pokémon no encontrado</p>';
                }
            });
        }
        // Función para obtener la cadena de evolución recursivamente
        function getEvolutionChain(chain) {
            return __awaiter(this, void 0, void 0, function* () {
                const evolutionChain = [{ name: chain.species.name, image: '' }];
                if (chain.evolves_to && chain.evolves_to.length > 0) {
                    for (const evolution of chain.evolves_to) {
                        // Obtener la imagen de la evolución
                        const evolutionData = yield fetch(`https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`);
                        const evolutionImageData = yield evolutionData.json();
                        evolutionChain.push({
                            name: evolution.species.name,
                            image: evolutionImageData.sprites.front_default,
                        });
                        evolutionChain.push(...yield getEvolutionChain(evolution));
                    }
                }
                return evolutionChain;
            });
        }
    }
});
