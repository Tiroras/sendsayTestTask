import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { calculationSlice } from './reducers/calculationReducer'
import { constructorSlice } from './reducers/constructorReducer'

const rootReducer = combineReducers({
  calculation: calculationSlice.reducer,
  canvasConstructor: constructorSlice.reducer
})
export const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
