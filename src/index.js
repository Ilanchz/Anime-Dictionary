import GetAnime from './Anime';
import RenderPage from './Render';
import {GetGenres} from "./Anime";
import {saveToLocalStorage} from './Anime';

async function fetchData(Search) {
  console.log(process.env.REACT_APP_api_key);
  let GenreList=[]
  GenreList= await GetGenres();
  saveToLocalStorage("genres",GenreList);
  let PreparedList=[]
  PreparedList= await GetAnime(Search);
  RenderPage(PreparedList);

}

fetchData("");


//Main Render App here
