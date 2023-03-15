import {
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit'
import { numbers, type NumbersType, operations, type OperationsType, type NumberType, type OperationType } from '../../types'
import { prepareCalculationResult } from '../../utils/calculate'
import { constructorSlice } from './constructorReducer'

export interface CalculationState {
  calculation: string
  numbers: NumbersType
  operations: OperationsType
}

const initialState: CalculationState = {
  calculation: '',
  numbers,
  operations
}

export const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    inputNumbers (state, action: PayloadAction<NumberType>) {
      const calcArr = state.calculation.split(' ')
      // Если ничего не введено, и вводим запятую,
      // то перед запятой вставляем ноль
      if (action.payload === ',' && calcArr.at(-1)?.length === 0) {
        state.calculation += '0,'
      } else if (
        !(action.payload === '0' && calcArr.at(-1)?.at(0) === '0') &&
        !(action.payload === ',' && calcArr.at(-1)?.includes(action.payload))
      ) {
        state.calculation += action.payload
      }
    },
    inputOperation (state, action: PayloadAction<OperationType>) {
      // Если уже введено два числа и операция,
      // при вводе новой операции делаем вычисление
      // и новую операцию добавляем к вычисленному числу
      if (state.calculation.split(' ').length === 3) {
        const arr = state.calculation.split(' ')

        state.calculation = prepareCalculationResult(arr) + ' ' + action.payload + ' '

        // Если нажимаем на кнопку операции, когда не введено
        // какое либо число - ставим в лево число 0
      } else if (state.calculation.length === 0) {
        state.calculation += '0 ' + action.payload + ' '

        // Если уже введено одно число и операция, и вводим
        // снова операцию, заменяем операцию на новую
      } else if (
        state.operations.includes(state.calculation.at(-2) as OperationType)
      ) {
        state.calculation =
          state.calculation.slice(0, -2) + action.payload + ' '
      } else {
        state.calculation += ' ' + action.payload + ' '
      }
    },
    solve (state) {
      const arr = state.calculation.split(' ')
      if (arr.length === 3) {
        if (arr.at(-1) === '0') {
          state.calculation = 'Не определенно'
        } else {
          state.calculation = prepareCalculationResult(arr)
        }
      }
    }
  },
  extraReducers (builder) {
    builder.addCase(constructorSlice.actions.changeMode, (state) => {
      state.calculation = ''
    })
  }
})
