import React from "react";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Offers from "./Pages/Offers";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
