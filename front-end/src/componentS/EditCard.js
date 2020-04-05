import React from "react";

export const EditCard =({card}) =>{
return(
    <ul className="collection" key={card._id}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <li className="collection-item">
            <span className="collection-header"><p>Your title:{card.title}</p></span>
            <p>Your description:{card.description}</p>
            <p>Your theme:{card.theme}</p>
        </li>
    </ul>
)
}

