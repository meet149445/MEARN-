import React from 'react'
import styles from './Home.module.css';


export default function Contact() {
  return (
    <div>
       <section className={styles.contact} id='contact'> {/* Matches .contact in CSS */}
              <p className={styles.contactData} type='email'>E-mail us : 2303031087119@paruluniversity.ac.in</p>
              <p className={styles.contactData} type='number'>Call us : 9327202848</p>
            </section>
    </div>
  )
}
