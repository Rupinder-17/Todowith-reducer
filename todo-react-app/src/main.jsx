import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './Component/Todo'
import { TodoProvider } from './context/TodoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
    <Todo/>

    </TodoProvider>
  </StrictMode>,
)
