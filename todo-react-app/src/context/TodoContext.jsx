import { useTodo } from "@/Hooks/useTodo";
// import React from "react";
import { createContext } from "react";

 export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, addTodo, deleteTodo] = useTodo();
  console.log("state", state);
  
  const handleAdd = (title)=>{
    addTodo(title)
  }
  const handleDelete = (id)=>{
    deleteTodo(id)
  }

  const todoDisplay = {
    state,
    handleAdd,
    handleDelete,
  };

  return (
    <TodoContext.Provider value={todoDisplay}>
      {children}
    </TodoContext.Provider>
  );
};
