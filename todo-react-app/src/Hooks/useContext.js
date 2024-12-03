import { TodoProvider } from '@/context/TodoContext'
import React from 'react'

export const useContext = () => {
  return useContext(TodoProvider)
}
