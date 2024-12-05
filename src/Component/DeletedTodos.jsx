import { useTodocontext } from "@/Hooks/useTodocontext";

export const DeletedTodos = () => {
  const {deleteCount, deletedTodos, handleRestoreTodos, handlePermanentDeleteTodo } = useTodocontext();
  return (
    <div className="bg-gray-200 w-full max-w-md mx-auto p-6 rounded-md shadow-md mt-10">
      <div className="flex gap-32">

      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        {" "}
        Deleted Todo List

      </h1>
      <span className=" text-gray-800 text-xl font-semibold px-3   rounded-md ">{deleteCount}</span>

      </div>
      <ul className="space-y-3">
        {deletedTodos?.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 bg-white rounded-md shadow-md"
          >
            <p className="text-gray-700">{item?.title}</p>
            <button
              onClick={() => handleRestoreTodos(item.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Restore
            </button>
            <button
              onClick={() =>{
                alert("are you sure to delete todo")

                handlePermanentDeleteTodo(item.id)}
              } 
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              PermanentDelete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
