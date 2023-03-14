import React from 'react'
import styles from './ElementsFactory.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import { constructorSlice } from '../../../../../store/reducers/constructorReducer'
import { type ComponentType } from '../../../../../types'
import { Actions } from '../../../../shared/Actions'
import { Calculate } from '../../../../shared/Calculate'
import { Numpad } from '../../../../shared/Numpad'
import { Result } from '../../../../shared/Result'
import { DropPlace } from './DropPlace'

interface IProps {
  component: ComponentType
  setShowTopLine: (show: boolean) => void
  setShowBottomLine: (show: boolean) => void
}

export const ElementsFactory: React.FC<IProps> = ({ component, setShowBottomLine, setShowTopLine }) => {
  const dispatch = useAppDispatch()
  const { setDraggingComponent, changeDragging, removeComponent } = constructorSlice.actions

  const isConstructorMode = useAppSelector(store => store.canvasConstructor.currentMode === 'constructor')

  const createDragStartHandler = (component: ComponentType) => () => {
    dispatch(setDraggingComponent(component))
    dispatch(changeDragging(true))
  }

  const onDragEnd = () => {
    dispatch(setDraggingComponent(null))
    dispatch(changeDragging(false))
  }

  const onDoubleClick = () => {
    if (isConstructorMode) {
      dispatch(removeComponent(component))
    }
  }

  const render = () => {
    switch (component) {
      case 'actions': return (
        <Actions
          isDraggable={isConstructorMode}
          onDragStart={createDragStartHandler('actions')}
          onDragEnd={onDragEnd}
        />
      )
      case 'calculate': return (
        <Calculate
          isDraggable={isConstructorMode}
          onDragStart={createDragStartHandler('calculate')}
          onDragEnd={onDragEnd}
        />
      )
      case 'numpad': return (
        <Numpad
          isDraggable={isConstructorMode}
          onDragStart={createDragStartHandler('numpad')}
          onDragEnd={onDragEnd}
        />
      )
      case 'result': return (
        <Result
          isDraggable={isConstructorMode}
          onDragStart={createDragStartHandler('result')}
          onDragEnd={onDragEnd}
        />
      )
      default: return null
    }
  }

  return (
    <div
      className={styles.component}
      onDragStart={createDragStartHandler(component)}
      onDoubleClick={onDoubleClick}
      draggable={isConstructorMode}
    >
      {render()}
      {isConstructorMode && <DropPlace
        component={component}
        setShowBottomLine={setShowBottomLine}
        setShowTopLine={setShowTopLine}
      />}
    </div>
  )
}
