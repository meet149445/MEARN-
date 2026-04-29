import React,{useEffect,useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function App() {
  let [data,setData] = useState([]);
  let {Country} = useParams();
  let obj = {
    india:{
      capital:"Delhi",
      population:"1.3 billion",
      area:"3.287 million km²",
      languages:["Hindi", "English"],
    },
    usa:{
      capital:"Washington, D.C.",
      population:"331 million",
      area:"9.834 million km²",
      languages:["English"],
    },
    japan:{
      capital:"Tokyo",
      population:"126 million",
      area:"377,975 km²",
      languages:["Japanese"],
  }
}

  return (

    <div>
        <h1>Country:{Country}</h1>
        <p>Capital: {obj[Country].capital}</p>
        <p>Population: {obj[Country].population}</p>
        <p>Area: {obj[Country].area}</p>
        <p>Languages: {obj[Country].languages.join(", ")}</p>

        <br />
        <button>India</button>
        <button>China</button>
        <button>Japan</button>
    </div>
  )
}
