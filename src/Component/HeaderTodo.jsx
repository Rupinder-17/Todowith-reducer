import { useTodocontext } from '@/Hooks/useTodocontext'
import React from 'react'

export const HeaderTodo = () => {

    const {count}=  useTodocontext()
  return (
    <div>
        {count}
    </div>
  )
}
