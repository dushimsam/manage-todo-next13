import React from "react";
import { BsTrash3Fill } from 'react-icons/bs';

interface TodoProps {
  todo: TodoItem;
  idx: number;
  toggleComplete: (todoId: string) => void;
  deleteTodo: (id: string) => void;
  isLoading: boolean
}

interface TodoItem {
  id: string;
  completed: boolean;
  text: string;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleComplete, deleteTodo, idx, isLoading }) => {

  return (
    <li
      className={
        isLoading
          ? "flex justify-between bg-gray-200 p-4 my-2 capitalize rounded-lg shadow-md animate-pulse"
          : todo.completed
          ? "flex justify-between bg-slate-400 p-4 my-2 capitalize rounded-lg shadow-md transition-all duration-300 hover:bg-slate-500"
          : "flex justify-between bg-slate-200 p-4 my-2 capitalize rounded-lg shadow-md transition-all duration-300 hover:bg-slate-300"
      }
    >
      <div className={"flex"}>
        {isLoading ? (
          <div className="h-4 w-6 bg-gray-300 rounded-md mr-3"></div>
        ) : (
          <>
            <span>#{idx + 1}</span>
            <input
              className="ml-3"
              onChange={() => toggleComplete(todo.id)}
              type="checkbox"
              checked={todo.completed}
            />
            <p
              className={
                todo.completed
                  ? "ml-3 cursor-pointer font-semibold text-gray-500 dark:text-gray-300 line-through"
                  : "ml-3 cursor-pointer font-semibold text-gray-800 dark:text-white"
              }
            >
              {todo.text}
            </p>
          </>
        )}
      </div>
      <button
        className={isLoading ? "h-8 w-8 bg-gray-300 rounded-full" : ""}
        onClick={() => deleteTodo(todo.id)}
      >
        {isLoading ? (
          <div className="h-4 w-4 bg-gray-400 rounded-full animate-pulse"></div>
        ) : (
          <BsTrash3Fill size={25} />
        )}
      </button>
    </li>
  );
};


export default Todo;
