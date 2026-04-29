import React from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
    let list = ["About","Home","Contact","Service","Blog"];
  return (
    <div>
      <ul className={styles.ListItems}>
        {/* <li className={styles.items}>About</li>
        <li className={styles.items}>Home</li>
        <li className={styles.items}>Contact</li>
        <li className={styles.items}>Service</li> */}
        {list.map((item, index) => (
          <li key={index} className={styles.items}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
