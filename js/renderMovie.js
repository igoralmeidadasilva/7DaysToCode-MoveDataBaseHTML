import { isFavorito, favoritar } from './script.js'
import { getFavoriteMovies } from './localStorage.js'

const containerMain = document.querySelector('.container-main')
export function renderMovie(movie) {
    // Renderizar toda a estrutura do filme na página
    const movieElement = document.createElement('div');
    movieElement.className ='flexbox-container';
    
    movieElement.appendChild(renderItem1(movie));
    movieElement.appendChild(renderItem2(movie));
    movieElement.appendChild(renderItem3(movie));
    containerMain.appendChild(movieElement)
  }
  
  function renderItem1(movie) {
    const item = document.createElement('div');
    item.className='flexbox-item item-1';
    const img = document.createElement('img');
    img.src = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
    item.appendChild(img);
    return item
  }
  
  function renderItem2(movie) {
    //Titulo
    const item = document.createElement('div');
    item.className='flexbox-item item-2';
    const tituloDiv = document.createElement('div');
    tituloDiv.textContent = movie.title;
    item.appendChild(tituloDiv);
    //div inferior
    const flexImageDiv = document.createElement('div');
    flexImageDiv.className='flex-image';
    //primeira imagem
    const img1 = document.createElement('img');
    img1.src = 'img/Star.svg';
    const label1 = document.createElement('label');
    label1.textContent = movie.vote_average;
    const label2 = document.createElement('label');
    label2.textContent="Favoritar";
    //segunda imagem
    const img2 = document.createElement('img');
    if(isFavorito(movie)){
      img2.src = 'img/Vector.svg';
    } else {
      img2.src = 'img/Heart.svg';
    }
    
    img2.addEventListener("click", () => {
      favoritar(img2, movie)
      })
  
    flexImageDiv.appendChild(img1);
    flexImageDiv.appendChild(label1);
    flexImageDiv.appendChild(img2);
    flexImageDiv.appendChild(label2);
    item.appendChild(flexImageDiv);
    return item;
  }
  
  function renderItem3(movie){
    const item = document.createElement('div');
    item.className='flexbox-item item-3';
    const description = document.createElement('p');
    description.textContent = movie.overview;
    item.appendChild(description);
    return item
  }
