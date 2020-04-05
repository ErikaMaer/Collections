import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../contexT/AuthContext";
import './regAndLogPages.css'

export const RegistrationPage=()=>{
   const auth = useContext(AuthContext)
    const message = useMessage();
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
    try {
        const data = await request('/api/items/register', 'POST', {...form})
        message(data.message)
        auth.login(data.token, data.userId)
    } catch (e) {
        console.log(e+'eeeeeeeee')
    }
    }
    const back = async () =>{
    try{
        await request(window.location.href = "http://localhost:3000/login")
    }catch (e) {
        console.log(e,'errooooooooooooooor')
    }}


    return(
<div>
<div className="row ">
<div className="card" >
<div className="card-content white-text col s6 offset-s3 m8 ">
    <span
        className="card-title"
    >Sign up</span>
</div>


<div  className="input-field col s9 offset-s1 ">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <i className="material-icons prefix">person</i>
    <input
        placeholder="Name"
        id="name"
        type="text"
        name="name"
        className="our-input"
        onChange={changeHandler}
    />
</div>

<div className="input-field col s9 offset-s1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <i className="material-icons prefix">email</i>
    <input
        placeholder="Email"
        id="email"
        type="text"
        name="email"
        className="our-input"
        onChange={changeHandler}
    />
</div>

<div className="input-field col s9 offset-s1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <i className="material-icons prefix">lock</i>
    <input placeholder="Password"
           id="password"
           type="password"
           name="password"
           className="our-input"
           onChange={changeHandler}
    />
</div>

<a
    className="txt"
    onClick={registerHandler}
    disabled={loading}>
Register</a>


<a
    className="txt2"
    onClick={back}
>Back to login</a>



</div>
{/*<a href="/" className="text black-text" onClick={back}>Back to login</a>*/}
</div>
</div>
)
}