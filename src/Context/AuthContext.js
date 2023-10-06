import React, { createContext, useEffect, useReducer } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

export const AuthContext = createContext()
const initialState = { isAuthenticated: false }

const reducer = ((state, action) => {
    switch (state.type) {
        case "LOGIN":
            return { isAuthenticated: true, user: action.payload.user }
        case "LOGOUT":
            return { isAuthenticated: false }
        default:
            return (state)
    }
})


export default function AuthContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user is log in successfully")
                dispatch({ type: "LOGIN", payload: { user } })
            } else {
                dispatch({ type: "LOGOUT" })
                console.log("User in signed out now")
            }
        })

    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {props.childern}
        </AuthContext.Provider>
    )
}
