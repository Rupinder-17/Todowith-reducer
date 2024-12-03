import { data } from "autoprefixer";
import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.state == "add") {
    return [
      ...state,
      { id: crypto.randomUUID(), title: data, ischecked: false },
    ];
  }
  if (action.state == "delete") {
    return state?.filter((item) => item.id !== data.id);
  }
  return state;
};

const initialstate = [];
export const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const addTodo = (item) => {
    dispatch({ type: "add", data: item });
  };
  const deleteTodo = (id) => {
    dispatch({ type: "delete", data: id });
  };
  return [state, addTodo, deleteTodo];
};