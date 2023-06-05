"use client";
import { useState, useEffect } from "react";
import Todo from "@/component/Todo";
import {
  ADD_TODO,
  DELETE_ALL_COMPLETED,
  DELETE_TODO,
  FETCH_TODO_LIST,
  FETCH_TODO_LIST_BY_STATUS,
  UPDATE_TODO,
} from "@/queries";
import TodoType from "@/interface/TodoType";

const activeStyles = `border-blue-600 dark:border-blue-500 text-blue-200`;

export default function Home() {
  const [filteredTodos, setFilteredTodos] = useState<any[]>([]);
  const [pageStatus, setPageStatus] = useState("ALL");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    toggleTodosStatus("ALL");
  }, []);

  // Create todo
  const createTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }

    const newTodo = await ADD_TODO(input);

    if (pageStatus === "ALL" || pageStatus === "ACTIVE") {
      setFilteredTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setInput("");
  };

  // Update todo
  const toggleComplete = async (todoId: string) => {
    try {
      const updatedTodo = await UPDATE_TODO(parseInt(todoId));
      setIsLoading(true);
      if (updatedTodo) {
        // Update todo in UI
        setFilteredTodos((prevTodos) =>
          prevTodos.map((todo) => {
            if (todo.id === todoId) {
              return updatedTodo;
            }
            return todo;
          })
        );
      } else {
        // Handle update failure
        console.log(`Failed to update todo with ID ${todoId}.`);
      }
    } catch (e: any) {
    } finally {
      setIsLoading(false);
    }
  };

  // Delete todo
  const handleDeleteTodo = async (todoId: string) => {
    try {
      const deletedTodo = await DELETE_TODO(parseInt(todoId));
      if (deletedTodo) {
        // Remove deleted todo from UI
        setFilteredTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.id !== todoId)
        );
        // Handle successful deletion
        console.log(`Todo with ID ${todoId} has been deleted:`, deletedTodo);
      } else {
        // Handle deletion failure
        console.log(`Failed to delete todo with ID ${todoId}.`);
      }
    } catch (error) {
    }
  };

  // Delete all completed todos
  const handleDeleteAllCompletedTodos = async () => {
    try {
      const deletedTodos = await DELETE_ALL_COMPLETED();
      if (deletedTodos) {
        // Remove deleted todos from UI
        setFilteredTodos((prevTodos) =>
          prevTodos.filter((todo) => !todo.completed)
        );
      }
    } catch (error) {
      // Handle error if necessary
    }
  };

  // Update the list according to the status
  const toggleTodosStatus = async (status: string) => {
    setPageStatus(status);
    try {
      setIsLoading(true);
      if (status === "ALL") {
        const list = await FETCH_TODO_LIST();
        setFilteredTodos(list);
      } else {
        const list = await FETCH_TODO_LIST_BY_STATUS(
          status === "COMPLETE" ? true : false
        );
        setFilteredTodos(list);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-blue-950">
      <div className="max-w-[500px] w-full m-auto p-4 grid items-center">
        <h3 className="text-3xl font-bold text-center text-white p-2">
          My Todo List App
        </h3>
        <form onSubmit={createTodo} className="flex items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-l-lg py-4 px-4 outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
            type="text"
            placeholder="Add Todo"
          />
          <button className="rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white py-4 px-4">
            ADD
          </button>
        </form>

        <div className="ml-3">
          <div className="py-4 pl-3">
            <div className="text-md font-medium text-center text-white dark:text-gray-400 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-6" onClick={() => toggleTodosStatus("ALL")}>
                  <a
                    href="#"
                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                      pageStatus == `ALL` ? activeStyles : ``
                    }`}
                  >
                    ALL
                  </a>
                </li>
                <li
                  className="mr-6"
                  onClick={() => toggleTodosStatus("ACTIVE")}
                >
                  <a
                    href="#"
                    className={`inline-block p-4 border-b-2 rounded-t-lg  dark:text-blue-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                      pageStatus == `ACTIVE` ? activeStyles : ``
                    }`}
                    aria-current="page"
                  >
                    ACTIVE
                  </a>
                </li>
                <li
                  className="mr-2"
                  onClick={() => toggleTodosStatus("COMPLETE")}
                >
                  <a
                    href="#"
                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                      pageStatus == `COMPLETE` ? activeStyles : ``
                    }`}
                  >
                    COMPLETE
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="bg-zinc-50 px-2 py-5">
            {isLoading
              ? [1, 2, 3, 4, 5].map((item) => (
                  <li
                    key={item}
                    className="flex justify-between bg-gray-200 p-4 my-2 capitalize rounded-lg shadow-md animate-pulse"
                  >
                    <div className="flex">
                      <div className="h-4 w-4 bg-gray-300 rounded-full mr-3"></div>
                      <div className="h-4 w-10 bg-gray-300 rounded-md"></div>
                    </div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  </li>
                ))
              : filteredTodos.map((todo: TodoType, index: number) => (
                  <Todo
                    key={parseInt(todo.id)}
                    todo={todo}
                    idx={index}
                    isLoading={isLoading}
                    toggleComplete={toggleComplete}
                    deleteTodo={handleDeleteTodo}
                  />
                ))}
          </ul>
          <div className="pt-4">
            {filteredTodos.filter((todo) => todo.completed).length > 0 && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow"
                onClick={() => handleDeleteAllCompletedTodos()}
              >
                Clear Completed Todos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
