
import Cards from './Cards';

function CreateCards(CardData){
    return <Cards key={CardData.key} imgsrc={CardData.imagesource} title={CardData.title} animeid={CardData.key}/>
}

function ContentCards(props){
    let CardDatas=props.info;
    return <div className="ContentCards">
        {CardDatas.map(CreateCards)}
    </div>
    

}

export default ContentCards;