import React from 'react'
import cn from 'classnames'
import styles from './ModeSwitch.module.scss'
import { Eye } from '../icons/Eye'
import { Selector } from '../icons/Selector'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { constructorSlice } from '../../store/reducers/constructorReducer'
import { type Mods } from '../../types'

export const ModeSwitch = () => {
  const dispatch = useAppDispatch()
  const { currentMode } = useAppSelector((store) => store.canvasConstructor)
  const { changeMode } = constructorSlice.actions

  const isRuntimeMode = currentMode === 'runtime'
  const isConstructorMode = currentMode === 'constructor'

  const setMode = (mode: Mods) => {
    dispatch(changeMode(mode))
  }

  return (
    <div className={styles.modeSwitch}>
      <div
        className={cn(styles.mode, isRuntimeMode && styles.activeMode)}
        onClick={() => { setMode('runtime') }}
      >
        <Eye active={isRuntimeMode} />
        <span>Runtime</span>
      </div>
      <div
        className={cn(styles.mode, isConstructorMode && styles.activeMode)}
        onClick={() => { setMode('constructor') }}
      >
        <Selector active={isConstructorMode} />
        <span>Constructor</span>
      </div>
    </div>
  )
}
