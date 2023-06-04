import React from "react";
import { FaceIcon, ImageIcon, TrashIcon } from "@radix-ui/react-icons";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

interface TodoProps {
  todo: TodoItem;
  toggleComplete: (todo: TodoItem) => void;
  deleteTodo: (id: string) => void;
}

interface TodoItem {
  id: string;
  completed: boolean;
  text: string;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <TrashIcon fontSize={90} />
      </button>
    </li>
  );
};

export default Todo;
