/* eslint-disable react/prop-types */
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(todo);
    setTodo("");
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          className="w-55 border border-gray-300 rounded-md p-2"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add a new todo"
        />
        <button type="submit" className=" bg-blue-400 rounded-md px-2 text-white font-semibold">
          <AiOutlinePlus className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
