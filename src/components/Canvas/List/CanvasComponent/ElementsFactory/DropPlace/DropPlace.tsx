import React from 'react'
import styles from './DropPlace.module.scss'
import { type ComponentType } from '../../../../../../types'
import { useAppDispatch } from '../../../../../../hooks'
import { constructorSlice } from '../../../../../../store/reducers/constructorReducer'

interface IProps {
  component: ComponentType
  setShowTopLine: (show: boolean) => void
  setShowBottomLine: (show: boolean) => void
}

export const DropPlace: React.FC<IProps> =
  ({
    component,
    setShowBottomLine,
    setShowTopLine
  }) => {
    const dispatch = useAppDispatch()
    const { displaceComponent } = constructorSlice.actions

    const onTopDrop = () => {
      setShowTopLine(false)
      dispatch(displaceComponent({ displacedComponent: component, place: 'top' }))
    }

    const onBottomDrop = () => {
      setShowBottomLine(false)
      dispatch(displaceComponent({ displacedComponent: component, place: 'bottom' }))
    }

    return (
      <div className={styles.dropPlace}>
        <div
          className={styles.topFragment}
          onDragOver={() => { setShowTopLine(true) }}
          onDragLeave={() => { setShowTopLine(false) }}
          onDrop={onTopDrop}
        />
        <div
          className={styles.bottomFragment}
          onDragOver={() => { setShowBottomLine(true) }}
          onDragLeave={() => { setShowBottomLine(false) }}
          onDrop={onBottomDrop}
        />
      </div>
    )
  }
