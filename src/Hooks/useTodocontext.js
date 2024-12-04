import { TodoContext } from '@/context/TodoContext'
import { useContext } from 'react'

export const useTodocontext = () => {
    return useContext(TodoContext)

}
