import { useTodo } from "@/Hooks/useTodo";
// import React from "react";
import { createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, addTodo, deleteTodo, restoreTodo] = useTodo();
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

  const todoDisplay = {
    count: state.length,
    todos,
    deletedTodos,
    handleAdd,
    handleDelete,
    handleRestoreTodos,
  };

  return (
    <TodoContext.Provider value={todoDisplay}>{children}</TodoContext.Provider>
  );
};
