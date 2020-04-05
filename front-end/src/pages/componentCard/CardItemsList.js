import React from "react";
import './card.css'

export const CardItemsList =({items})=> {
    if (!items.length){
        return <p className="center">No items</p>
    }

return (
<table className ="table centered highlight">
    <thead>
    <tr>
        <th>Title</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    { items.map(item=>{
        return (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
            </tr>
        )
    })}
    </tbody>
</table>
)
}
