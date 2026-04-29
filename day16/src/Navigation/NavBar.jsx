import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

let items = ["Home", "About", "Contact","Services","Login"];
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.items}>
        {
            // items.map((item,idx)=>(
            // <li key={idx} className={styles.item} ><a href={`#${item.toLowerCase()}`}>{item}</a></li>
            // ))

            items.map((item,idx)=>(
                <li key={idx} className={styles.item} ><Link to={`/${item.toLowerCase()}`}>{item} </Link></li>
            ))
        }
      </ul>
    </div>
  )
}
