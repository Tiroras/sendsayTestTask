import { type OperationType } from '../types'

export const calculate = (arr: string[]): number => {
  // Меняем запятую на точку, для того чтобы js
  // воспринял дробные числа, затем при выводе обратно
  const newArr = arr.map(el => el.replace(',', '.'))
  switch (newArr[1] as OperationType) {
    case '+': return Number(newArr[0]) + Number(newArr[2])
    case '-': return Number(newArr[0]) - Number(newArr[2])
    case '/': return Number(newArr[0]) / Number(newArr[2])
    case 'x': return Number(newArr[0]) * Number(newArr[2])
    default: return 0
  }
}

export const prepareCalculationResult = (arr: string[]) => {
  const result = calculate(arr)
  if (String(result).includes('.')) {
    return result.toFixed(4).replace('.', ',')
  }
  return String(result).replace('.', ',')
}
