import React from 'react'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { calculationSlice } from '../../../store/reducers/calculationReducer'
import { type ConstructorElementProps } from '../../../types'
import styles from './Calculate.module.scss'

export const Calculate: React.FC<ConstructorElementProps> =
  ({
    isDraggable,
    isLocatedInConstructor = false,
    isSidebarComponent = false,
    onDragStart,
    onDragEnd
  }) => {
    const dispatch = useAppDispatch()
    const { solve } = calculationSlice.actions
    const isRuntimeMode = useAppSelector(store => store.canvasConstructor.currentMode) === 'runtime'

    const onClick = () => {
      if (isRuntimeMode) {
        dispatch(solve())
      }
    }

    return (
      <div
        className={cn(styles.wrapper, isLocatedInConstructor && isSidebarComponent && styles.insideConstructor)}
        draggable={isDraggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <button className={styles.calculate} onClick={onClick}>=</button>
      </div>
    )
  }
