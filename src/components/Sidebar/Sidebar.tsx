import React from 'react'
import styles from './Sidebar.module.scss'
import { Actions } from '../shared/Actions'
import { Calculate } from '../shared/Calculate'
import { Numpad } from '../shared/Numpad'
import { Result } from '../shared/Result'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { constructorSlice } from '../../store/reducers/constructorReducer'
import { type ComponentType } from '../../types'

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  const { setDraggingComponent, changeDragging } = constructorSlice.actions
  const { currentMode, canvas } = useAppSelector(store => store.canvasConstructor)

  const isConstructorMode = currentMode === 'constructor'

  const actionsInsideConstructor = canvas.includes('actions')
  const resultInsideConstructor = canvas.includes('result')
  const numpadInsideConstructor = canvas.includes('numpad')
  const calculateInsideConstructor = canvas.includes('calculate')

  const createDragStartHandler = (component: ComponentType) => (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation()
    dispatch(setDraggingComponent(component))
    dispatch(changeDragging(true))
  }

  const onDragEnd = () => {
    dispatch(changeDragging(false))
    dispatch(setDraggingComponent(null))
  }

  return (
    <div className={styles.sidebar}>
      <Result
        isSidebarComponent={true}
        isDraggable={isConstructorMode && !resultInsideConstructor}
        isLocatedInConstructor={isConstructorMode && resultInsideConstructor}
        onDragStart={createDragStartHandler('result')}
        onDragEnd={onDragEnd}
      />
      <Actions
        isSidebarComponent={true}
        isDraggable={isConstructorMode && !actionsInsideConstructor}
        isLocatedInConstructor={isConstructorMode && actionsInsideConstructor}
        onDragStart={createDragStartHandler('actions')}
        onDragEnd={onDragEnd}
      />
      <Numpad
        isSidebarComponent={true}
        isDraggable={isConstructorMode && !numpadInsideConstructor}
        isLocatedInConstructor={isConstructorMode && numpadInsideConstructor}
        onDragStart={createDragStartHandler('numpad')}
        onDragEnd={onDragEnd}
      />
      <Calculate
        isSidebarComponent={true}
        isDraggable={isConstructorMode && !calculateInsideConstructor}
        isLocatedInConstructor={isConstructorMode && calculateInsideConstructor}
        onDragStart={createDragStartHandler('calculate')}
        onDragEnd={onDragEnd}
      />
    </div>
  )
}
