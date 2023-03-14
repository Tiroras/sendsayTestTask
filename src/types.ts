import { type DragEvent } from 'react'

export const numbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ','
] as const
export const operations = ['/', 'x', '-', '+'] as const

export type NumbersType = typeof numbers
export type NumberType = typeof numbers[number]

export type OperationsType = typeof operations
export type OperationType = typeof operations[number]

export type Mods = 'runtime' | 'constructor'

export interface ConstructorElementProps {
  isDraggable: boolean
  isSidebarComponent?: boolean
  isLocatedInConstructor?: boolean
  onDragStart: (e: DragEvent<HTMLDivElement>) => void
  onDragEnd: () => void
}

const components = ['result', 'actions', 'numpad', 'calculate'] as const
export type ComponentType = typeof components[number]
