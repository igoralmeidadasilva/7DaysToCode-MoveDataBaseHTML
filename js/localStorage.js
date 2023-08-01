export function saveToLocalStorage(movie) {
    const movies = getFavoriteMovies(); // busca os filmes favoritados no Local Storage
    movies.push(movie); // inclui o novo filme favorito no array
    const moviesJSON = JSON.stringify(movies);
    localStorage.setItem("movies", moviesJSON); // salva o array no Local Storage
}
  
export function removeToLocalStorage(indice) {
    const movies = getFavoriteMovies(); // busca os filmes favoritados no Local Storage
    movies.splice(indice, 1); // inclui o novo filme favorito no array
    const moviesJSON = JSON.stringify(movies);
    localStorage.setItem("movies", moviesJSON); // salva o array no Local Storage
}
  
export function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem('movies'))
}