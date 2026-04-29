// import React, { useEffect, useState } from 'react' 
// // 
// export default function App() {
//   const [products,setProducts] = React.useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData(){
//     fetch("https://dummyjson.com/products").then((res)=>res.json()).then
//     ((data)=>setProducts(data.products)).catch((err)=>{console.log("Error fetching data",err)});
//     // console.log("fetching data...")
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={fetchData}>FetchData</button>
//     </div>
//   )
// }


// import React, { useEffect } from 'react'; // Fix: React is not inside braces

// export default function App() {
//   const [products, setProducts] = React.useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   function fetchData() {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         // --- THIS LOGS THE DATA TO YOUR CONSOLE ---
//         console.log("Data received:", data.products); 
        
//         setProducts(data.products);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }

//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>Check the browser console (F12) to see the data!</p>
//       <button onClick={fetchData}>Fetch Data</button>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react'; // Fix: React is not inside braces
import './App.css';
import axios from 'axios'; 

export default function App() {
  const [products, setProducts] = useState([]);
  async function fetchProducts() {
  //   try {
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     console.log("Data received:", data.products); // --- THIS LOGS THE DATA TO YOUR CONSOLE ---
  //     setProducts(data.products);
  //   } 
  //   catch (err) {
  //     console.error("Error fetching data:", err);
  //   }
  // }

  try{
    let res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
     console.log("Data received:", res.data.products); // --- THIS LOGS THE DATA TO YOUR CONSOLE ---
  }
  catch(err){
    console.error("Error fetching data:", err);
  }}

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <div key={products.id}>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.images[0]} alt={product.title} />
          </div>
        ))}
      </div>

      <p>Check the browser console (F12) to see the data!</p>
      <button onClick={fetchProducts}>Fetch Data</button>
    </div>
  );
}
