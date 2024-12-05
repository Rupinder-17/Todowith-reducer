import { useTodocontext } from '@/Hooks/useTodocontext'
import React from 'react'

export const HeaderTodo = () => {

    const {count}=  useTodocontext()
  return (
    <div className=' px-5 py-2 rounded-lg text-center m-auto  text-white w-14 bg-gray-500 text-xl'>
        {count}
    </div>
  )
}
