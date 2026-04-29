import React from 'react'
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60) % 60)}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className='App'>
      <h1>Stop watch </h1>
      <br />
      <div className="display">{formatTime(time)}</div>
      <button className="button" onClick={() => setIsActive(true)}>Start</button>
      <button className="button" onClick={() => setIsActive(false)}>Stop</button>
      <button className="button" onClick={() => { setIsActive(false); setTime(0); }}>Reset</button>
    </div>
  )
}
