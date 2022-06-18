// import { Component } from "react";



const CardComponent = ({name,email,id}) => {
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <p>{email}</p>
        </div>
    
}


// class CardComponent extends Component {

//     render(){
//         const {nume,emailul, idul } = this.props;

        
//            return( <div className="card-container" key={idul} >
//                   <img alt={`monster ${nume}`} src={`https://robohash.org/${idul}?set=set2&size=180x180`} />
//                   <h2>{nume}</h2>
//                   <p>{emailul}</p>
//             </div>)
//     }
// }

export default CardComponent;