import { apiKey } from './config.js';

export async function getPopularMovies() {
    const url = "https://api.themoviedb.org/3/movie/popular";
    const headers = { 'Authorization': apiKey };
    const fetchResponse = await fetch(url, {headers})
    const jsonResponse = await fetchResponse.json()
    return jsonResponse["results"]
  }

export async function getSearchMovies(btn){
    if(btn.value != "") {
      const url = "https://api.themoviedb.org/3/search/movie?query=" + btn.value
      const headers = {'Authorization': apiKey}
      const fetchResponse = await fetch(url, {headers});
      const jsonResponse = await fetchResponse.json();
      return jsonResponse["results"];
    } else {
        return getPopularMovies();
    }
  }


