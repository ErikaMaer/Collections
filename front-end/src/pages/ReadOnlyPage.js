// import React, {useState, useCallback, useEffect, useContext} from "react";
import {useHttp} from "../hooks/http.hook";
import {CardsList} from "./componentCard/CardsList";
import {useHistory} from 'react-router-dom'
import {AuthContext} from "../contexT/AuthContext";
import {Loader} from "../componentS/Loader";
// import './CollectionPage.css'
import {CardItemsList} from "./componentCard/CardItemsList";
//
//
//
// //const {loading} = useHttp();
//
// export const ReadOnlyPage =()=> {
//     let [card, setCard] = useState([]);
//     const {loading,request} = useHttp();
//
//     function addHandler () {
//         try {
//             const arr = request('/api/card/add', 'GET');
//             setCard(arr);
//         } catch (e) {
//         }
//     };
//
//     useEffect(() => {
//         addHandler()
//     }, [addHandler]);
//
//     if (loading) {
//         return <Loader/>
//     }
//
// return (
//     <div>
//         <div className="collection">
//         {addHandler()}</div>
//     </div>
// )
//
// }