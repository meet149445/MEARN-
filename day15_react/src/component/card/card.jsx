import React from 'react'
import styles from './card.module.css'

export default function card({data}) {
  return (
    <div className={styles.card}>
      <h className={styles.Cardtitle}>{data.name}</h>
      <h2 className={styles.Cardemail}>{data.email}</h2>
      <p className={styles.Cardreview}>{data.review}</p>
      <p className={styles.Cardrating}>{data.rating}</p>
    </div>
  )
}
