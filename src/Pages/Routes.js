import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import { AuthContext } from '../Context/AuthContext'


export default function Index() {
const {isAuthenticated} = useContext(AuthContext)

  return (<>
    <Routes>
      <Route path='/*' element={<privateRoute component={<Frontend />}/>} />
      <Route path='/auth/*' element={!isAuthenticated? <Auth />: <Navigate to="/"/>} />
      {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
    </Routes>
    
  </>
  )
}
