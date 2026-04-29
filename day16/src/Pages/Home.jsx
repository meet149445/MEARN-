// Home.js
import React from 'react';
import NavBar from '../Navigation/NavBar';
 // Renamed to avoid confusion with class
import styles from './Home.module.css';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleContactClick = ()=>{
    navigate('/about');
  }
  return (
    <div className={styles.container}> {/* Matches .container in CSS */}
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Services />
      <button className='btn' onClick={handleContactClick}>All about us</button>
      <h2>Login for more details</h2>
      <Login />

    </div>
  );
}