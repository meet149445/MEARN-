import React from 'react'
import heroImg from "../assets/Home.png";
import styles from './Home.module.css';

export default function Hero() {
  return (
    <div>
       <section className={styles.home} id='home'> {/* Matches .hero in CSS */}
              <h1 className={styles.header}>Welcome to Our Website</h1>
              <p className={styles.subtitle}>Discover the best solutions for your business.</p>
              <img src={heroImg} alt="Home" />
            </section>
    </div>
  )
}
