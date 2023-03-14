import React from 'react'
import cn from 'classnames'
import styles from './Actions.module.scss'
import { NumButton } from '../NumButton'
import { useAppDispatch } from '../../../hooks'
import { calculationSlice } from '../../../store/reducers/calculationReducer'
import { type OperationType, type ConstructorElementProps } from '../../../types'

export const Actions: React.FC<ConstructorElementProps> =
  ({
    isDraggable,
    isLocatedInConstructor = false,
    isSidebarComponent = false,
    onDragStart,
    onDragEnd
  }) => {
    const dispatch = useAppDispatch()
    const { inputOperation } = calculationSlice.actions

    const createActionHandler = (oper: OperationType) => () => {
      dispatch(inputOperation(oper))
    }

    const onAddition = createActionHandler('+')
    const onSubtraction = createActionHandler('-')
    const onDivision = createActionHandler('/')
    const onMultiplication = createActionHandler('x')

    return (
      <div
        className={cn(styles.actions, isLocatedInConstructor && isSidebarComponent && styles.insideConstructor)}
        draggable={isDraggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <NumButton value="/" clickHandler={onDivision} />
        <NumButton value="x" clickHandler={onMultiplication} />
        <NumButton value="-" clickHandler={onSubtraction} />
        <NumButton value="+" clickHandler={onAddition} />
      </div>
    )
  }
