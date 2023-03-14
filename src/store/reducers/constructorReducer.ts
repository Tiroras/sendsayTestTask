import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ComponentType, type Mods } from '../../types'

interface ConstructorState {
  currentMode: Mods
  isDragging: boolean
  draggingComponent: ComponentType | null
  canvas: ComponentType[]
}

const initialState: ConstructorState = {
  currentMode: 'runtime',
  isDragging: false,
  canvas: [],
  draggingComponent: null
}

interface DisplaceActionType {
  place: 'top' | 'bottom'
  displacedComponent: ComponentType
}

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    changeMode (state, action: PayloadAction<Mods>) {
      state.currentMode = action.payload
    },
    changeDragging (state, action: PayloadAction<boolean>) {
      state.isDragging = action.payload
    },
    setDraggingComponent (state, action: PayloadAction<ComponentType | null>) {
      state.draggingComponent = action.payload
    },
    addComponent (state) {
      if (state.draggingComponent && !state.canvas.includes(state.draggingComponent)) {
        state.canvas = [...state.canvas].concat(
          state.draggingComponent
        )
        state.draggingComponent = null
        state.isDragging = false
      }
    },
    displaceComponent (state, action: PayloadAction<DisplaceActionType>) {
      if (state.draggingComponent) {
        const componentAlreadyInCanvas = state.canvas.includes(state.draggingComponent)
        const newCanvas = [...state.canvas]

        if (componentAlreadyInCanvas) {
          const draggingComponentIndex = state.canvas.indexOf(state.draggingComponent)
          newCanvas.splice(draggingComponentIndex, 1)
        }

        const displaceComponentIndex = newCanvas.indexOf(action.payload.displacedComponent)

        action.payload.place === 'top'
          ? newCanvas.splice(displaceComponentIndex, 0, state.draggingComponent)
          : newCanvas.splice(displaceComponentIndex + 1, 0, state.draggingComponent)
        state.canvas = newCanvas
      }
    },
    removeComponent (state, action: PayloadAction<ComponentType>) {
      state.canvas = state.canvas.filter(comp => comp !== action.payload)
    }
  }
})
