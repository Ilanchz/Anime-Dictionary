
function GenreSelect(props){
    return <select name="Genre" id="genre-select">
        {props.genres.map((genre)=>{
            return <option value={genre}>{genre}</option>
        })}
  </select>
}

export default GenreSelect;