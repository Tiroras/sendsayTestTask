import React from 'react'
import cn from 'classnames'
import styles from './Numpad.module.scss'
import { useAppDispatch } from '../../../hooks'
import { NumButton } from '../../shared/NumButton'
import { calculationSlice } from '../../../store/reducers/calculationReducer'
import { type ConstructorElementProps } from '../../../types'

export const Numpad: React.FC<ConstructorElementProps> =
  ({
    isDraggable,
    isLocatedInConstructor = false,
    isSidebarComponent = false,
    onDragStart,
    onDragEnd
  }) => {
    const dispatch = useAppDispatch()
    const { inputNumbers } = calculationSlice.actions

    return (
      <div
        className={cn(styles.numpad, isLocatedInConstructor && isSidebarComponent && styles.insideConstructor)}
        draggable={isDraggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className={styles.mainNums}>
          <NumButton value="7" clickHandler={() => dispatch(inputNumbers('7'))} />
          <NumButton value="8" clickHandler={() => dispatch(inputNumbers('8'))} />
          <NumButton value="9" clickHandler={() => dispatch(inputNumbers('9'))} />
          <NumButton value="4" clickHandler={() => dispatch(inputNumbers('4'))} />
          <NumButton value="5" clickHandler={() => dispatch(inputNumbers('5'))} />
          <NumButton value="6" clickHandler={() => dispatch(inputNumbers('6'))} />
          <NumButton value="1" clickHandler={() => dispatch(inputNumbers('1'))} />
          <NumButton value="2" clickHandler={() => dispatch(inputNumbers('2'))} />
          <NumButton value="3" clickHandler={() => dispatch(inputNumbers('3'))} />
        </div>
        <div className={styles.extraNums}>
          <NumButton value="0" clickHandler={() => dispatch(inputNumbers('0'))} />
          <NumButton value="," clickHandler={() => dispatch(inputNumbers(','))} />
        </div>
      </div>
    )
  }
