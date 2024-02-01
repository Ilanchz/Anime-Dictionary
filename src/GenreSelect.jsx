
function GenreSelect(props){
    return <div class="dropdown">
    <select name="Genre" id="genre-select">
        <option value="">Genre</option>
        {props.genres.map((genre)=>{
            return <option value={genre}>{genre}</option>
        })}
  </select>
  </div>
}

export default GenreSelect;