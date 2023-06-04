"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Todo from "@/component/Todo";
import Tabs from "@/component/Tabs";
import { graphql } from "@/generated/gql";
import { graphqlClient } from "@/lib/graphql-client";
import { gql } from 'graphql-request';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

const todosList = [
  { id: "1", completed: false, text: "Learn React" },
  { id: "2", completed: false, text: "Learn Next.js" },
  { id: "3", completed: true, text: "Learn Tailwind CSS" },
  { id: "4", completed: false, text: "Learn Firebase" },
  { id: "5", completed: true, text: "Learn GraphQL" },
  { id: "6", completed: false, text: "Learn TypeScript" },
  { id: "7", completed: false, text: "Learn NextAuth.js" },
  { id: "8", completed: true, text: "Learn Vercel" },
  { id: "9", completed: false, text: "Learn Radix UI" },
  { id: "10", completed: false, text: "Learn React Query" },
];

const GetAllTodosDocument = graphql(`
  query GetAllTodos($first: Int!){
    postCollection(first: $first){
      todolist {
        completed
        created_at
        id
        text
      }
    }
  }`
)

export const getPosts = async () => {

  const query = gql`
  query MyQuery {
    todolist {
      completed
      created_at
      id
      text
    }
  }
  `
  const result = await graphqlClient.request(query)
  return result.todolist;
}



export default async  function Home() {
  const [todos, setTodos] = useState(todosList);
  const [input, setInput] = useState("");
  const [tabStatus, setTabSTatus] = useState("ALL");


  // Create todo
  const createTodo = async (e: any) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }

    setInput("");
  };

  // Update todo in firebase
  const toggleComplete = async (todo: any) => {};

  // Delete todo
  const deleteTodo = async (id: any) => {};

  const res = await getPosts();
  console.log("RESPONSE ", res)

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          />
          <button className={style.button}>ADD</button>
        </form>
        <div>
          <Tabs status={tabStatus} setStatus={setTabSTatus}/>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}
