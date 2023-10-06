import React, { createContext, useEffect, useReducer } from 'react'


export const AuthContext = createContext()
const initialState = { isAuthenticated: false }

const reducer = ((state, action) => {
    switch(state.type){
case "LOGIN":
return{isAuthenticated:true, user:action.payload.user}
case "LOGOUT":
    return{isAuthenticated:false}
    default:
        return(state)
    }
})


    export default function AuthContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState) 

    useEffect(()=>{
onAuthStateChanged(Auth,(user)=>{
    if(user){
        console.log("user is log in successfully")
        dispatch({type:"LOGIN",payload:{user}})
    }
})

    },[])

        return (
            <div>AuthContext</div>
        )
    }
