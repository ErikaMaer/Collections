import React from "react";
import './card.css'
import {Link} from "react-router-dom";


export const CardsList=({cards})=> {
    if (!cards.length){
        return <p className="center">No collections</p>
    }

    return (
<div>
{ cards.map(card=>{
return (
    <div className="collection-item" key={card._id}>
        <Link to={`/cardItems/${card._id}`}><p className="collection-header">{card.title}</p></Link>
        <p>{card.description}</p>
        <p className="par">{card.theme}</p>
        <p className="edit"><Link to={`/editCollection/${card._id}`}>Edit</Link></p>
    </div>
)
})}
</div>
)
}
