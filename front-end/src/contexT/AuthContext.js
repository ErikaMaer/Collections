import {createContext} from 'react'

function  noop () {}

export const AuthContext =createContext({
    token:null,
    userId:null,
    cardId:null,
    card:noop,
    login: noop,
    logout:noop,
    isAuthenticated:false
})