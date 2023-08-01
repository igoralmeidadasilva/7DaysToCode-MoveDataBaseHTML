import { getPopularMovies, getSearchMovies } from './api.js';
import { renderMovie } from './renderMovie.js';
import { saveToLocalStorage, removeToLocalStorage, getFavoriteMovies } from './localStorage.js'

const containerMain = document.querySelector('.container-main')

window.onload = async function() {
  const movies = await getPopularMovies()
  movies.forEach(movie => renderMovie(movie))
}

function cleanAllMovies() {
  containerMain.innerHTML = ''
}

export function favoritar(img, movie) {
  const movies = getFavoriteMovies()
  if(isFavorito(movie)){
    let indice = movies.findIndex(m => m.id == movie.id)
    removeToLocalStorage(indice)
    img.src = "img/Heart.svg"
  } else {
    saveToLocalStorage(movie)
    img.src = "img/Vector.svg"
  }
}

export function isFavorito(movie){
  const id = movie.id
  const movies = getFavoriteMovies()
  if(movies.find(m => m.id == id) == undefined){
    return false;
  } else {
    return true;
  }
}

const check = document.querySelector('.btn-check')
check.addEventListener("click", async () => {
  if(check.checked){
    cleanAllMovies()
    const movies = getFavoriteMovies()
    movies.forEach(movie => renderMovie(movie))
  } else {

    cleanAllMovies()
    const movies = await getPopularMovies()
    movies.forEach(movie => renderMovie(movie))
  }
})

const searchBar = document.getElementById("input-search");
searchBar.addEventListener("keypress", async (e) => {
  if (e.key == 'Enter'){
    cleanAllMovies()
    const movies = await getSearchMovies(searchBar)
    movies.forEach(movie => renderMovie(movie))
  }
})

const btnSearch = document.getElementById("btn-input-search");
btnSearch.addEventListener("click", async ()=> {
  cleanAllMovies()
  const movies = await getSearchMovies(searchBar)
  movies.forEach(movie => renderMovie(movie))
})


  



