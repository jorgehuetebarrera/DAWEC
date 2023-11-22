const apiKey = '356bbc9b6395ee0eb5370156bdb075eb';
const apiReadToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTZiYmM5YjYzOTVlZTBlYjUzNzAxNTZiZGIwNzVlYiIsInN1YiI6IjY1NTc4YzA3ZDA1MWQ5MDExZGI0Y2Q5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i1N7OlKs9A5Jc6c8H8caZGGOXLAF006QDJogUOX5LSw';

const favorites = [];

async function makeRequest(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiReadToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
    }
}

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`;

    makeRequest(url)
        .then(data => {
            displayResultsWithPaginationAndFavorites(data.results, 1, data.total_pages);
        });
}

async function loadGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

    const data = await makeRequest(url);

    const genreSelect = document.getElementById('genreSelect');
    
    genreSelect.innerHTML = '';

    const allGenresOption = document.createElement('option');
    allGenresOption.value = '';
    allGenresOption.text = 'Todos los géneros';
    genreSelect.add(allGenresOption);

    data.genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.id;
        option.text = genre.name;
        genreSelect.add(option);
    });
}

function filterByGenre() {
    const genreSelect = document.getElementById('genreSelect');
    const selectedGenreId = genreSelect.value;

    const url = selectedGenreId ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenreId}` :
                                   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    makeRequest(url)
        .then(data => {
            const currentPage = 1; // Ajusta esto según tus necesidades
            displayResultsWithPaginationAndFavorites(data.results, currentPage, data.total_pages);
        });
}

function toggleFavorite(movieId) {
    const index = favorites.indexOf(movieId);
    if (index === -1) {
        favorites.push(movieId);
    } else {
        favorites.splice(index, 1);
    }

    // Actualizar la visualización de la lista de favoritos
    displayFavorites();
}

function displayFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = '';

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No hay películas favoritas</p>';
        return;
    }

    favorites.forEach(async movieId => {
        const movie = await getMovieDetails(movieId);

        if (movie) {
            const favoriteCard = document.createElement('div');
            favoriteCard.className = 'favorite-card';
            favoriteCard.innerHTML = `
                <h3>${movie.title}</h3>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} Poster">
                <button onclick="toggleFavorite(${movie.id})">Eliminar de favoritos</button>
            `;
            favoritesContainer.appendChild(favoriteCard);
        }
    });
}

async function getMovieDetails(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(`Error en la solicitud: ${data.status_message}`);
        }
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
        return null;
    }
}
function showFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    favoritesContainer.innerHTML = '';

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No hay películas favoritas</p>';
        return;
    }

    favorites.forEach(async movieId => {
        const movie = await getMovieDetails(movieId);

        if (movie) {
            const favoriteCard = document.createElement('div');
            favoriteCard.className = 'favorite-card';
            favoriteCard.innerHTML = `
                <h3>${movie.title}</h3>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} Poster">
                <button onclick="toggleFavorite(${movie.id})">Eliminar de favoritos</button>
            `;
            favoritesContainer.appendChild(favoriteCard);
        }
    });
}
function displayResultsWithPaginationAndFavorites(results, page, totalPages) {
    const movieResults = document.getElementById('movieResults');
    const reelContainer = document.getElementById('reelContainer');
    movieResults.innerHTML = '';
    reelContainer.innerHTML = '';

    if (results.length > 0 && page === 1) {
        const reelResults = results.slice(0, Math.min(10, results.length));

        reelResults.forEach(movie => {
            const reelCard = document.createElement('div');
            reelCard.className = 'reel-card';
            reelCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title} Poster">
                <button onclick="toggleFavorite(${movie.id})">${favorites.includes(movie.id) ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
            `;
            reelContainer.appendChild(reelCard);
        });
    }

    const moviesPerPage = 20;
    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const displayResults = results.slice(startIndex, endIndex);

    displayResults.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
            <p>Año: ${movie.release_date}</p>
            <p>Resumen: ${movie.overview}</p>
            <p>Puntuación: ${movie.vote_average}</p>
            <button onclick="toggleFavorite(${movie.id})">${favorites.includes(movie.id) ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
            <hr>
        `;
        movieResults.appendChild(movieCard);
    });

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if (page > 1) {
        const prevButton = createPaginationButton('Anterior', page - 1);
        pagination.appendChild(prevButton);
    }

    const startPage = Math.max(1, page - 10);
    const endPage = Math.min(totalPages, startPage + 20);

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = createPaginationButton(i.toString(), i);
        if (i === page) {
            pageButton.classList.add('active');
        }
        pagination.appendChild(pageButton);
    }

    if (page < totalPages) {
        const nextButton = createPaginationButton('Siguiente', page + 1);
        pagination.appendChild(nextButton);
    }

    // Mostrar la lista de favoritos
    displayFavorites();
}

function createPaginationButton(text, page) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', () => handlePagination(page));
    return button;
}

function handlePagination(page) {
    const genreSelect = document.getElementById('genreSelect');
    const selectedGenreId = genreSelect.value;

    const url = selectedGenreId ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenreId}&page=${page}` :
                                   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;

    makeRequest(url)
        .then(data => {
            displayResultsWithPaginationAndFavorites(data.results, page, data.total_pages);
        });
}

loadGenres();