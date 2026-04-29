import React from 'react'
import styles from './Home.module.css';


export default function About() {
  return (
    <div>
        <section className={styles.about} id='about'> {/* Matches .about in CSS */}
              <p className={styles.aboutData}>Hey there!!</p>
              <p className={styles.aboutData}>We are providing services for business to improve their growth and perfomance.</p>
            </section>
    </div>
  )
}
