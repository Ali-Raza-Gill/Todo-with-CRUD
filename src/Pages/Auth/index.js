import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import ForgotPassword from './ForgotPassword/ForgotPassword'
export default function index() {
  return (
    <Routes>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
  )
}
