function AnimePage(props){
    return <div className="anime-page">
        <img src={props.image} alt="not loading" width="200px" height="300px"></img>
        <div className="anime-page-data">
        <ul>
            <li>{"Title: "+props.title}</li>
            <li>{"Ranking: "+props.ranking}</li>
            <li>Genre: </li>
            <ul>
            {props.genre.map((genre)=>{
                return <li>{genre}</li>
            })}
            </ul>
            
            <li>{"Episodes: "+props.episode}</li>
        </ul>
        <p className="paragh-synopsis">{"Synopsis: "+props.synopsis.replace("[Written by MAL Rewrite]","")}</p>
        </div>
    </div>;

}

export default AnimePage;