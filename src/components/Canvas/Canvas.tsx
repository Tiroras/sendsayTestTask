import React from 'react'
import cn from 'classnames'
import styles from './Canvas.module.scss'
import { Hint } from './Hint/Hint'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { List } from './List'
import { constructorSlice } from '../../store/reducers/constructorReducer'

export const Canvas = () => {
  const { canvas, isDragging } = useAppSelector(store => store.canvasConstructor)
  const dispatch = useAppDispatch()
  const { addComponent } = constructorSlice.actions

  const isEmptyList = canvas.length === 0

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addComponent())
  }

  return (
    <div
      className={cn(styles.canvas, isEmptyList && styles.emptyList, isDragging && isEmptyList && styles.dropPlace)}
      onDrop={onDrop}
      onDragOver={e => { e.preventDefault() }}
    >
      {isEmptyList ? <Hint /> : <List />}
    </div>
  )
}
