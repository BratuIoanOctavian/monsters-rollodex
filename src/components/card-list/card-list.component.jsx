// import { Component } from "react";

import './card-list.styles (1).css'

import CardComponent from "../card-component/card-component.component";


const CardList = (props) => {  //in loc de props putem pune {monsters} ca sa destructuram mai usor
   const {monsters} = props;
   return(
    <div className="card-list">
      {monsters.map(monster =>{
         
        return <CardComponent monster={monster} />

          
   })}
    </div>
);
}



// class CardList extends Component {

//     render(){
        
//         const{ monsters } = this.props;

//         return(
//             <div className="card-list">
//               {monsters.map(monster =>{
//                 const {name,email,id} = monster;  
//                 return( 
//                  <CardComponent nume={name} emailul={email} idul={id} />

                  
//                   )})}
//             </div>
//         )
        
//     }
// }

export default CardList;