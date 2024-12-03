import { useTodocontext } from "@/Hooks/useTodocontext";
import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInput] = useState("");
  const { state, handleAdd, handleDelete } = useTodocontext();
  console.log(state);
  console.log("in", inputValue);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const addTodoList = () => {
    if (inputValue.trim()) {
      handleAdd(inputValue);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-200 w-full max-w-md mx-auto p-6 rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Todo List</h1>
      <div className="flex items-center space-x-3 mb-4">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter a task"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodoList}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="space-y-3">
        {state?.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 bg-white rounded-md shadow-md"
          >
            <p className="text-gray-700">{item?.title}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
