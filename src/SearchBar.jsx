import GetAnime from "./Anime";
import RenderPage from "./Render";
import { getFromLocalStorage } from './Anime';
import GenreSelect from './GenreSelect';

function SearchBar(){

    async function SearchRequest(event){
        const searchquery=document.querySelector("#search").value;
        const selectedgenre=document.querySelector("#genre-select").value;
        let PreparedList=await GetAnime(searchquery,selectedgenre);
        RenderPage(PreparedList);
        
        //call function to re-render
    }
    let GenreList=getFromLocalStorage("genres");

    return <div className="searchBar">
                <input type="text" id="search" name="searchname" placeholder="Search Anime"></input>
                <input type="button" onClick={SearchRequest} id="search-button" value="Go"></input>
                <GenreSelect genres={GenreList}/>
            </div>;
}

export default SearchBar;