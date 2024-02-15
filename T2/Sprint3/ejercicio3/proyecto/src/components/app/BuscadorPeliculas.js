import React, { useState } from 'react';

const BuscadorPeliculas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = 'c7c158f9';

  const searchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&type=movie&page=1&apikey=${apiKey}&r=json&plot=short`);
      const data = await response.json();
      if (data.Response === 'True') {
        const limitedMovies = data.Search.slice(0, 3); // Limitar los resultados a 3 películas
        setMovies(limitedMovies);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      setError('Ocurrió un error al realizar la búsqueda.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      searchMovies();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Buscar películas..."
        />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <div>
          <h2>Resultados:</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <strong>{movie.Title}</strong> ({movie.Year})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuscadorPeliculas;