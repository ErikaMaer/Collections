import React, {useState, useCallback, useEffect, useContext} from "react";
import {useHttp} from "../hooks/http.hook";
import {CardItemsList} from "./componentCard/CardItemsList";
import {AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";
import {useHistory, useParams} from "react-router-dom";


export const CardItemsPage =()=>{
let [item, setItem] = useState([]);
const {token}= useContext(AuthContext)
const {request,loading} = useHttp();
const history=useHistory();
const CardId = useParams().id

const WCards = useCallback(async ()=>{
    try{
        const fetched = await request('/api/item', 'GET', null,{
            Authorization: `Bearer ${token}`
        })
        setItem(fetched)
    }catch (e) {}
},[token,request])

useEffect(()=>{
    WCards()
},[WCards])



if(loading){
    return <Loader/>
}

const add = async () =>{
    try{
        await history.push(`/addItem/${CardId}`)
    }catch (e) {
        console.log(e,'errooooooooooooooor')
    }}
const back = async () =>{
    try{
        await request(window.location.href = "http://localhost:3000/collections")
    }catch (e) {
        console.log(e,'errooooooooooooooor')
    }}



return (
<div>
<div>
<div className="btn-toolbar">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <button type="button" className="btn "
            onClick={back}>
        <i className="material-icons">arrow_back</i></button>
    <button type="button" className="btn "
            onClick={add}
    >Add item</button>
</div>

</div>
    {!loading && item && <CardItemsList items={item}/>}
</div>
);
};
