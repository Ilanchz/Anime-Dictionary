import { getFromLocalStorage } from "./Anime";
import ReactDOM from "react-dom";
import AnimePage from "./AnimePage";
import NavigationBar from "./NavigationBar";

function OpenAnime(event){
    const selected_anime=event.target.id;
    let Res=getFromLocalStorage("data");
    
    let api_response_data=Res.data.data;
    let selected_content;
    for (let i in api_response_data){
        if (api_response_data[i]._id===selected_anime){
            selected_content={
                key:api_response_data[i]._id ,
                title:api_response_data[i].title,
                imagesource:api_response_data[i].image,
                genre:api_response_data[i].genres,
                ranking:api_response_data[i].ranking,
                episodes:api_response_data[i].episodes,
                status:api_response_data[i].status,
                synopsis:api_response_data[i].synopsis
            }
        }
    }
    console.log(selected_content);

    ReactDOM.render(
        <div className="MainFrame">
          <NavigationBar/>
          <AnimePage 
          key={selected_content.key}
           title={selected_content.title}
            image={selected_content.imagesource} 
            genre={selected_content.genre} 
            synopsis={selected_content.synopsis}
            ranking={selected_content.ranking} 
            episodes={selected_content.episodes}
             status={selected_content.status}/>
        </div>
          
      
          ,document.getElementById('root'));
    



}

function Cards(props){
    return <div className="AnimeCard">
        <img id={props.animeid} src={props.imgsrc} width="200" height="300" alt={props.title+" image"} onClick={OpenAnime}/>
        {props.title}
    </div>
}

export default Cards;