import { useTodo } from "@/Hooks/useTodo";
// import React from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, addTodo, deleteTodo, restoreTodo, permanentDelete] = useTodo();
  console.log("state", state);

  const todos = state.filter((elem) => !elem.isDeleted);
  // console.log("elm",FilterItems);
  const deletedTodos = state.filter((item) => item.isDeleted);

  const handleRestoreTodos = (item) => {
    restoreTodo(item);
  };

  const handleAdd = (title) => {
    addTodo(title);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  const handlePermanentDeleteTodo = (item)=>{
    permanentDelete(item)
  }

  const todoDisplay = {
    count: todos.length,
    deleteCount: deletedTodos.length,
    todos,
    deletedTodos,
    handleAdd,
    handleDelete,
    handleRestoreTodos,
    handlePermanentDeleteTodo,
  };

  return (
    <TodoContext.Provider value={todoDisplay}>{children}</TodoContext.Provider>
  );
};
