import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import About from './About/About'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Nopage from './Nopage'
import Todo from './Todo/Todo'

export default function index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='todo' element={<Todo/>}/>
                <Route path='contact' element={<Contact />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<Nopage/>}/>
            </Routes>
            <Footer />
        </>
    )
}
