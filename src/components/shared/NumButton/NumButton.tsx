import React from 'react'
import { useAppSelector } from '../../../hooks'
import styles from './NumButton.module.scss'

interface IProps {
  value: string
  clickHandler: () => void
}

export const NumButton: React.FC<IProps> = ({ value, clickHandler }) => {
  const isRuntimeMode = useAppSelector(store => store.canvasConstructor.currentMode) === 'runtime'

  const onClick = () => {
    if (isRuntimeMode) {
      clickHandler()
    }
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {value}
    </button>
  )
}
