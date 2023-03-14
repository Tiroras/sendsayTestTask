import { type OperationType } from '../types'

export const calculate = (arr: string[]): string => {
  // Меняем запятую на точку, для того чтобы js
  // воспринял дробные числа, затем при выводе обратно
  const newArr = arr.map(el => el.replace(',', '.'))
  switch (newArr[1] as OperationType) {
    case '+': return String(Number(newArr[0]) + Number(newArr[2])).replace('.', ',')
    case '-': return String(Number(newArr[0]) - Number(newArr[2])).replace('.', ',')
    case '/': return String(Number(newArr[0]) / Number(newArr[2])).replace('.', ',')
    case 'x': return String(Number(newArr[0]) * Number(newArr[2])).replace('.', ',')
    default: return ''
  }
}
