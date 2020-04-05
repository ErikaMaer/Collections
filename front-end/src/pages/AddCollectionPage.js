import React, {useContext, useEffect, useState} from "react";
import './AddCollectionPage.css'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../contexT/AuthContext";
import {useMessage} from "../hooks/message.hook";
import {useHistory} from "react-router-dom";
// import ReactMde from "react-mde";
// import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
//import Select from "react-select";
import {FlavorForm} from "./Test";

// const converter = new Showdown.Converter({
//     tables: true,
//     simplifiedAutoLink: true,
//     strikethrough: true,
//     tasklists: true
// });


export const AddCollectionPage=()=>{

    // const [value, setValue] = React.useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = React.useState("write");


    const { request, error, clearError} = useHttp();
    const auth=useContext(AuthContext)
    const message = useMessage();
    const history=useHistory();
    const [card, setCard]=useState({
        title: '', description:'',theme:''
    })
    // theme:''
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const createCollection = async ()=> {
        try {
            const data = await request('/api/card/collection', 'POST', {...card},
                {Authorization:`Bearer ${auth.token}`})
            auth.card(data.cardId)
            console.log(data,'dataaaaaaaaaaaaaaa')
            await history.push(`/collections`)
        } catch (e) {
            console.log(e,'errooooooooooooooor')
        }
    }

    const changeHandler = event => {
        setCard({...card, [event.target.name]: event.target.value})
    }


    const back = async () =>{
        try{
            await request(window.location.href = "http://localhost:3000/collections")
        }catch (e) {
            console.log(e,'errooooooooooooooor')
        }}




return (
<div>
<ul className="header ">
    <li className="header-title col s4 offset-3">Create Collection:</li>
</ul>
<button type="button" className="btn" style={{marginLeft:"20px"}}
        onClick={back}>
    <i className="material-icons">arrow_back</i></button>

    {/*<div className="input-field col s1 offset-1">*/}
    {/*   <FlavorForm  selectedOption={card.theme}*/}
    {/*       />*/}
    {/*</div>*/}

<ul className="collection">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <li className="collection-item img">
<div className="input-field col s7 offset-s1">
    <input
        placeholder="Name of collection"
        id="title"
        type="text"
        name="title"
        className="our-input"
        value={card.title}
        onChange={changeHandler}
    />
</div>


{/*<ReactMde*/}
{/*    // id="description"*/}
{/*    // type="text"*/}
{/*    // className="description"*/}
{/*    value={card.description}*/}
{/*    // value={value}*/}
{/*   onChange={changeHandler}*/}
{/*    selectedTab={selectedTab}*/}
{/*    onTabChange={setSelectedTab}*/}
{/*    generateMarkdownPreview={markdown =>*/}
{/*        Promise.resolve(converter.makeHtml(markdown))*/}
{/*    }*/}
{/*    childProps={{*/}
{/*        writeButton: {*/}
{/*            tabIndex: -1*/}
{/*        }*/}
{/*    }}*/}
{/*/>*/}


<div className="input-field col s7 offset-s1">
    <input
        placeholder="Description"
        id="description"
        type="text"
        name="description"
        className="our-input"
        value={card.description}
        onChange={changeHandler}
    />
</div>



<div className="input-field col s1 offset-s1">
    <input
        placeholder="Theme"
        id="theme"
        type="text"
        name="theme"
        className="our-input"
        value={card.theme}
        onChange={changeHandler}
    />
</div>

<button
    className="btn "
    onClick={createCollection}
>Create</button>
</li>
</ul>
</div>
);
};
