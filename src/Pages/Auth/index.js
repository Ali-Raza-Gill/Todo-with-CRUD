import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Navbar from '../../Components/Navbar/Navbar'
export default function index() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>}/>
    </Routes>
    </>
  )
}
