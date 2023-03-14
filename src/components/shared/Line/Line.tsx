import React from 'react'
import styles from './Line.module.scss'

export const Line = () => (
  <div className={styles.line}>
    <div className={styles.cube} />
    <div className={styles.center} />
    <div className={styles.cube} />
  </div>
)
