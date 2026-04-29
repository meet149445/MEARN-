import React from 'react'
import styles from './Home.module.css';


export default function Services() {
  return (
    <div>
      <section className={styles.services} id='services'>
        <div className={styles.card}>
          <h2>Our Services</h2>
          <ul>
                  <li className={styles.service}>Web Development</li>
                  <li className={styles.service}>Mobile Apps</li>
                  <li className={styles.service}>Cloud Integration</li>
                  <li className={styles.service}>Data Analytics</li>
                  <li className={styles.service}>MEARN stack</li>
                </ul>
              </div>
            </section>
    </div>
  )
}
