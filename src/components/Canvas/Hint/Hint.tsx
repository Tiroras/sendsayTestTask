import React from 'react'
import styles from './Hint.module.scss'
import { Drag } from '../../icons/Drag'

export const Hint = () => {
  return (
    <div className={styles.hint}>
      <Drag />
      <div className={styles.explanation}>
        <span className={styles.hintAction}>Перетащите сюда</span>
        <span className={styles.hintExtra}>
          любой элемент из левой панели
        </span>
      </div>
    </div>
  )
}
