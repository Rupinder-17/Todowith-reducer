import { useTodo } from "@/Hooks/useTodo";
// import React from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, addTodo, deleteTodo] = useTodo();
  console.log("state", state);

  const todos = state.filter((elem) => !elem.isDeleted);
  // console.log("elm",FilterItems);
  const deletedTodos = state.filter((item)=> item.isDeleted)
  

  const handleAdd = (title) => {
    addTodo(title);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const todoDisplay = {
    count: state.length,
    todos,
    deletedTodos,
    handleAdd,
    handleDelete,
  };

  return (
    <TodoContext.Provider value={todoDisplay}>{children}</TodoContext.Provider>
  );
};
