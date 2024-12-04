import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Todo } from "./Component/Todo";
import { TodoProvider } from "./context/TodoContext";
import { HeaderTodo } from "./Component/HeaderTodo";
import { Footer } from "./Component/Footer";
import { DeletedTodos } from "./Component/DeletedTodos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <HeaderTodo/>
      <Todo/>
      <DeletedTodos/>
      <Footer/>
    </TodoProvider>
  </StrictMode>
);
