import React from 'react'
import styles from './List.module.scss'
import { useAppSelector } from '../../../hooks'
import { CanvasComponent } from './CanvasComponent/CanvasComponent'

export const List = () => {
  const components = useAppSelector(store => store.canvasConstructor.canvas)

  return (
    <div className={styles.list}>
      {components.map(comp =>
        <CanvasComponent key={comp} component={comp} />
      )}
    </div>
  )
}
