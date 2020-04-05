import React, {useState, useCallback, useEffect, useContext} from "react";
import {useHttp} from "../hooks/http.hook";
import {CardsList} from "./componentCard/CardsList";
import {useHistory} from 'react-router-dom'
import {AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";




export const CollectionsPage =()=>{
    let [cards, setCards] = useState([]);
    const history=useHistory();
    const {token}= useContext(AuthContext)
    const {loading, request} = useHttp();

    const fetchCards = useCallback(async ()=>{
        try{
            const fetched = await request('/api/card', 'GET', null,{
                Authorization: `Bearer ${token}`
            })
            setCards(fetched)
        }catch (e) {}
    },[token,request])

    useEffect(()=>{
    fetchCards()
    },[fetchCards])

    if(loading){
        return <Loader/>
    }

    const add = async () =>{
    try{
        await history.push(`/addCollection`)
    }catch (e) {
        console.log(e,'errooooooooooooooor')
    }}


return (
<div>

    <ul className="header ">
        <li className="header-title col s4 offset-3">Collections:</li>
        <li>
        <button type="button" className="btn" style={{marginLeft:"20px"}}
                onClick={add}
        >Add collection</button></li>
    </ul>

    <div className="collection">
    {!loading && <CardsList cards={cards}/>}</div>
</div>

);
};
