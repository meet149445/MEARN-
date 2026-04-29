import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    const handleClick = (country) => {
        navigate(`/${country}`);
    }
    let countries = ["india", "usa", "japan"];
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content area.</p>
      <ul>
        <li><a href="/india">India</a></li>
        <li><a href="/usa">USA</a></li>
        <li><a href="/japan">Japan</a></li>
      </ul>
      <ul>
      {countries.map((country) => (
        <li>
        <button key={country} onClick={() => handleClick(country)}>
          {country.charAt(0).toUpperCase() + country.slice(1)}
        </button>
        </li>
      ))}
      </ul>
    </div>

  )
}
