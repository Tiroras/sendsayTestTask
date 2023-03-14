import React, { useState } from 'react'
import { type ComponentType } from '../../../../types'
import { Line } from '../../../shared/Line'
import { ElementsFactory } from './ElementsFactory'

interface IProps {
  component: ComponentType
}

export const CanvasComponent: React.FC<IProps> = ({ component }) => {
  const [showTopLine, setShowTopLine] = useState(false)
  const [showBottomLine, setShowBottomLine] = useState(false)

  return (
    <div>
      {showTopLine && <Line />}
      <ElementsFactory
        component={component}
        setShowTopLine={setShowTopLine}
        setShowBottomLine={setShowBottomLine}
      />
      {showBottomLine && <Line />}
    </div>
  )
}
