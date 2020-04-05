import React, {useCallback, useContext, useEffect, useState} from "react";
import {useHistory, useParams} from 'react-router-dom'
import {useHttp} from "../hooks/http.hook";
import{AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";
import {EditCard} from "../componentS/EditCard";


export const EditCollectionPage = ()=>{
    const [card, setCard]= useState(null)
    const {token}=useContext(AuthContext)
    const {request, loading}=useHttp()
    const history=useHistory();
    const CardId = useParams().id

    const getCard= useCallback(async ()=>{
    try{
        const fetched =await request(`/api/card/${CardId}`, 'GET', null,{
            Authorization: `Bearer ${token}`
        })
        setCard(fetched)
    }catch (e) {}
    },[token,CardId,request])
    useEffect(()=>{
    getCard()
    },[getCard])


    if(loading){
        return <Loader/>
    }

    const deleteColl = async () => {
    try {
        await request(`/api/card/delete/${CardId}`, 'DELETE', {id : CardId._id})
    } catch (e) {
        console.log(e,'errooooooooooooooor')
    }
    await history.push(`/collections`)
    };

    const back = async () =>{
    try{
        await request(window.location.href = "http://localhost:3000/collections")
    }catch (e) {
        console.log(e,'errooooooooooooooor')
    }}

return(
<div>
    <ul className="header ">
        <li className="header-title col s4 offset-3">Edit collection:</li>
    </ul>
    <button type="button" className="btn" style={{marginLeft:"20px"}}
            onClick={back}>
        <i className="material-icons">arrow_back</i></button>
    <button type="button" className="btn"
            onClick={deleteColl}>
        <i className="material-icons">delete</i></button>
    { !loading && card && <EditCard card={card} />}
</div>
)
}