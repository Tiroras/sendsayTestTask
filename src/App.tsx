/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import './App.scss'
import { Canvas } from './components/Canvas'
import { ModeSwitch } from './components/ModeSwitch'
import { Sidebar } from './components/Sidebar'
import { useAppSelector } from './hooks'

const App = () => {
  const currentMode = useAppSelector(store => store.canvasConstructor.currentMode)
  const isConstructorMode = currentMode === 'constructor'

  return (
    <div className="wrapper"
      onDragOver={(e) => {
        e.preventDefault()
      }}
    >
      <div className="App">
        <div className="leftPart">
          <div />
          {isConstructorMode && <Sidebar />}
        </div>
        <div className="rightPart">
          <ModeSwitch />
          <Canvas />
        </div>
      </div>
    </div>
  )
}

export default App
