import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    console.log("add");

    return [
      ...state,
      {
        id: crypto.randomUUID(),
        title: action.data,
        ischecked: false,
        isDeleted: false,
      },
    ];
  }
  if (action.type === "delete") {
    console.log("dele id", action.data);
    const updatedState = state?.map((item) =>
      item.id === action.data ? { ...item, isDeleted: true } : item
    );
    console.log(updatedState);

    return updatedState;
  }
  if(action.type === "restore"){
    return state?.map((item)=> item.id === action.data ?{...item, isDeleted: false}: item)
  }

  return state;
};

const initialstate = [];
export const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const addTodo = (item) => {
    console.log("item", item);

    dispatch({ type: "add", data: item });
  };
  const deleteTodo = (id) => {
    console.log("id", id);

    dispatch({ type: "delete", data: id });
  };
  const restoreTodo = (item) => {
    dispatch({ type: "restore", data: item });
  };
  return [state, addTodo, deleteTodo, restoreTodo];
};



