import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './NavigationBar';
import ContentCards from './ContentCards';



function RenderPage(PreparedList){
    if (PreparedList.length===0){
        ReactDOM.render(
          <div className="MainFrame">
            <NavigationBar/>
            <img src="https://www.shutterstock.com/image-vector/cartoon-cute-character-funny-illustration-600nw-2320715747.jpg" width="500" height="500" class="Error-Image" alt="error"></img>
            <p id='Error-Text'>Can't Find What You're looking for nya!</p>
          </div>
            
        
            ,document.getElementById('root'));
      }else{
        ReactDOM.render(
          <div className="MainFrame">
            <NavigationBar/>
            <ContentCards info={PreparedList}/>
          </div>
            
        
            ,document.getElementById('root'));
      
      }
}

export default RenderPage;