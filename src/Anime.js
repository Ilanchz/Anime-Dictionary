import axios from "axios";

function saveToLocalStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}


function getFromLocalStorage(key) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined; 
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error retrieving from localStorage:', error);
    return undefined;
  }
}


const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime',
  params: {
    page: '1',
    size: '100',
    search:'',
    sortBy: 'ranking',
    sortOrder: 'asc'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

const genre_options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/genre',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

async function GetGenres(){
  let GenreList=[""]
  let Res;
  try {
    Res = await axios.request(genre_options);
  } catch (error) {
    console.error(error);
    return [];
  }
  for (let i in Res.data){
    GenreList.push(Res.data[i]._id);
  }
  return GenreList;
}



async function GetAnime(Search,selectedgenre){
  let PreparedList=[]
  options.params.genres=selectedgenre;
  try {
    let Res;
    if (Search===""){
        Res = await GetTopAnimes();
        saveToLocalStorage("data",Res);
      
      
    }else{
      Res = await GetSearchAnimes(Search);
      saveToLocalStorage("data",Res);
    }
  
      
    let api_response_data=Res.data.data;
    for (let i in api_response_data){
      const temp={key:api_response_data[i]._id ,
        title:api_response_data[i].title,
        imagesource:api_response_data[i].image,
        genre:api_response_data[i].genre,
        synopsis:api_response_data[i].synopsis,
        ranking:api_response_data[i].ranking,
        episodes:api_response_data[i].episodes,
        status:api_response_data[i].status}
      PreparedList.push(temp);
    }
    
  
  } catch (error) {
    console.error(error);
    return [];
    
  }
  options.params.genres="";
  return PreparedList;
}



async function GetTopAnimes(){
    console.log(options.headers);
    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function GetSearchAnimes(search_string){
  options.params.search=search_string;
  try {
      const response = await axios.request(options);
      return response;
  } catch (error) {
      console.error(error);
  }
}

export default GetAnime;

export {saveToLocalStorage};
export {getFromLocalStorage};
export {GetGenres};