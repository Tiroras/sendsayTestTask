import React, { useState } from 'react'
import styles from './List.module.scss'
import { useAppSelector } from '../../../hooks'
import { CanvasComponent } from './CanvasComponent/CanvasComponent'
import { Line } from '../../shared/Line'

export const List = () => {
  const [isOverEmptyPlace, setIsOverEmptyPlace] = useState(false)
  const components = useAppSelector(store => store.canvasConstructor.canvas)

  return (
    <div className={styles.list}>
      {components.map(comp =>
        <CanvasComponent key={comp} component={comp} />
      )}
      <div
        className={styles.emptyPlace}
        onDragEnter={() => { setIsOverEmptyPlace(true) }}
        onDragLeave={() => { setIsOverEmptyPlace(false) }}
        onDrop={() => { setIsOverEmptyPlace(false) }}
      >
        {isOverEmptyPlace && <Line />}
      </div>
    </div>
  )
}
