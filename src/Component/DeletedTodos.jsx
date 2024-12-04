import { useTodocontext } from "@/Hooks/useTodocontext";

export const DeletedTodos = () => {
  const {deletedTodos, handleRestoreTodos } = useTodocontext();


  return (
    <div className="bg-gray-200 w-full max-w-md mx-auto p-6 rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4"> Deleted Todo List</h1>
      
      <ul className="space-y-3">
        {deletedTodos?.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 bg-white rounded-md shadow-md"
          >
            <p className="text-gray-700">{item?.title}</p>
            <button
            onClick={()=> handleRestoreTodos(item.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Restore
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
