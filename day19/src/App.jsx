import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Card from './Card.jsx'
import Home from './Home.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:Country" element={<Card />} />
      </Routes>
    </div>
  )
}
