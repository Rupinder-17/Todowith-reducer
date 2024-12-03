import React from 'react'
import { useState } from 'react'

export const Todo = () => {
    const [inputValue , setInput] = useState()

    const handleChange = (e)=>{
        setInput(e.target.value)
    }
  return (
    <div>
        <h1>Todos</h1>
        <div>
            <input type="text" name="" id="" onChange={handleChange} value={inputValue}  />
        </div>
    </div>
  )
}
