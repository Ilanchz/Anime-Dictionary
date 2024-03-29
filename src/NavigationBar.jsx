import GenreSelect from './GenreSelect';
import SearchBar from './SearchBar';
import GetAnime from "./Anime";
import RenderPage from "./Render";
import { getFromLocalStorage } from './Anime';


function NavigationBar(props){

    async function SearchRequest(event){
        const searchquery=document.querySelector("#search").value;
        const selectedgenre=document.querySelector("#genre-select").value;
        let PreparedList=await GetAnime(searchquery,selectedgenre);
        RenderPage(PreparedList);
        
        //call function to re-render
    }

    let GenreList=getFromLocalStorage("genres");

    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-danger d-flex align-items-center" >
            <a className="navbar-brand" href="#">Anime Jisho</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                <GenreSelect genres={GenreList}/>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control" id="search" type="search" placeholder="Search" aria-label="Search"/>
                <button type="button" className="btn btn-success" onClick={SearchRequest}>Search</button>
            </form>
            </div>
        </div>
        </nav>;
    
}

export default NavigationBar;