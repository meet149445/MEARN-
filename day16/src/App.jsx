import React from 'react'
import './App.css'
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Login from './Pages/Login'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}