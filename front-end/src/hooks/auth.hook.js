import {useState, useCallback, useEffect} from 'react'

const storageName='userData'
const cardName='cardData'

export const useAuth =()=>{
    const [token, setToken]= useState(null)
    const [ready, setReady]= useState(false)
    const [userId, setUserId]= useState(null)
    const [cardId, setCardId]=useState(null)

    const login =useCallback((jwtToken,id)=>{
        setToken(jwtToken)
        setUserId(id)


        localStorage.setItem(storageName, JSON.stringify({
            userId:id,token:jwtToken
        }))
    },[])

    const card =useCallback((id,idUser)=>{
         setCardId(id)
        setUserId(idUser)

        localStorage.setItem(cardName, JSON.stringify({
           cardId:id, userId:idUser
        }))
    },[])

    // cardId:id
    const logout =useCallback(()=>{
        setToken(null)
        setUserId(null)
        setCardId(null)

        localStorage.removeItem(storageName)
        localStorage.removeItem(cardName)
    },[])


    useEffect(()=>{
       const data =JSON.parse(localStorage.getItem(cardName))

        if (data && data.userId){
            card(data.userId ,data.cardId)
        }
        setReady(true)
    },[card])

    useEffect(()=>{
        const data =JSON.parse(localStorage.getItem(storageName))

        if (data && data.token){
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])



    return {login, logout, token, userId, ready,cardId,card}

}