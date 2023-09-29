import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
export default function Index() {
  return (
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='/auth/*' element={<Auth/>}/>
        {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
    </Routes>
  )
}
