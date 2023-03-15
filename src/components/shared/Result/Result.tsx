import React from 'react'
import cn from 'classnames'
import { useAppSelector } from '../../../hooks'
import { type ConstructorElementProps } from '../../../types'
import styles from './Result.module.scss'

export const Result: React.FC<ConstructorElementProps> =
  ({
    isDraggable,
    isLocatedInConstructor = false,
    isSidebarComponent = false,
    onDragStart,
    onDragEnd
  }) => {
    const { calculation } = useAppSelector((state) => state.calculation)
    return (
      <div
        className={cn(styles.wrapper, isSidebarComponent && isLocatedInConstructor && styles.insideConstructor)}
        draggable={isDraggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div
          className={cn(styles.result, calculation.length > 10 && styles.smallFontSize)}
        >{calculation || 0}</div>
      </div>
    )
  }
