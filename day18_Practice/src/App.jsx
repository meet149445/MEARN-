import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [weather, setWeather] = useState({});

  async function fetchWeather() {
    try {
      const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true");
      
      // FIX: Use .json() for fetch, not .data
      const data = await res.json(); 
      
      setWeather(data);
      console.log("Data received:", data); 
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  } // <-- Added missing closing brace for the function

  useEffect(() => {
    fetchWeather();
  }, []);

return (
    <div className="app-container">
      <h1>Weather Data</h1>
      <button onClick={fetchWeather}>Refresh Data</button>

      <hr />

      {/* 1. Check if 'current_weather' exists in our state */}
      {weather.current_weather ? (
        <div className="weather-display">
          <h2>Current Conditions in London</h2>
          <p><strong>Temperature:</strong> {weather.current_weather.temperature}°C</p>
          <p><strong>Wind Speed:</strong> {weather.current_weather.windspeed} km/h</p>
          <p><strong>Last Updated:</strong> {weather.current_weather.time}</p>
        </div>
      ) : (
        /* 2. Show this while the data is still being fetched */
        <p>Loading weather data...</p>
      )}
    </div>
  );
}