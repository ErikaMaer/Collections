import React, {useContext} from "react";
import {useHistory} from 'react-router-dom';
import {AuthContext} from "../contexT/AuthContext";
import './componentS.css'


export const Navbar = () =>{
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
<nav>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <div className="row">
        <ul className="col s2 offset-s10">
            <li><a href ="/items">Admin</a></li>
            <li><a href ="/" onClick={logoutHandler}><i className="material-icons">exit_to_app</i></a></li>
        </ul>
    </div>
</nav>
    )
}