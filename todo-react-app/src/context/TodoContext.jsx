import { useTodo } from '@/Hooks/useTodo'
import React from 'react'
import { createContext } from 'react'

 export const TodoProvider = createContext()

export const TodoContext = ({children}) => {
const [state, addTodo, deleteTodo] = useTodo()

const todoDisplay = {
    state,
    addTodo,
    deleteTodo
}

  return (
    <TodoProvider.Provider value={todoDisplay}>{children}</TodoProvider.Provider>
  )
}
