import SearchBar from './SearchBar';


function NavButtons(NavElement){
    return  <li key={NavElement.key}><a href="./"><div className='Website-Title'>{NavElement.route}</div></a></li>;
}

function NavigationBar(props){
    let NavElements=props.contentlist;
    NavElements=[{key: 1,route:"Anime - Jisho"}];
    

    return <div className="NavBar">
                <ul>
                {NavElements.map(NavButtons)}
                </ul>
            <SearchBar />
            
            
            
          
            
            </div>;
    
}

export default NavigationBar;