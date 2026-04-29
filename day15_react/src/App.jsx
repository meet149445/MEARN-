import React from 'react'
import Button from './component/button/Button'
import './App.css'
import Homepage from '../pages/homepage'

export default function App() {
  return (
    <div>
      <Homepage/>
      <h1>Welcome to my Page</h1>
      <p>This is a simple React application.</p>
      <button className='Custom-Button'>Main</button>
      <Button />
    </div>
  )
}
