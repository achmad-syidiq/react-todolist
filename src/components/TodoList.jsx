import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoList = ({ todos, onUpdate }) => {
  const [editing, setEditing] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const handleEdit = (id) => {
    setEditing(id);
    const todo = todos.find((todo) => todo.id === id);
    setNewTodo(todo.text);
  };

  const handleUpdate = (id) => {
    onUpdate(id, newTodo);
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  const renderTodoItem = (todo) => (
    <li
      className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md"
      key={todo.id}
    >
      {editing === todo.id ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(todo.id);
          }}
          className="flex items-center gap-2 w-full"
        >
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit" className="bg-green-500 text-white rounded-md p-2">
            <AiOutlineCheck className="text-2xl " />
          </button>
          <button
            type="button"
            className="bg-red-500 rounded-md text-white p-2"
            onClick={handleCancel}
          >
            <AiOutlineClose className="text-2xl" />
          </button>
        </form>
      ) : (
        <>
          <div className="flex gap-2 items-center">
            <input className="h-5 w-5 text-indigo-600" type="checkbox" />
            <span className="text-lg font-semibold text-gray-600">{todo.text}</span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-200 rounded-md" onClick={() => handleEdit(todo.id)}>
              ✏️
            </button>
            <button className="p-2 bg-gray-200 rounded-md">🗑️</button>
          </div>
        </>
      )}
    </li>
  );

  return (
    <div className={`bg-gray-400 p-4 shadow-lg rounded-lg ${todos.length ? "mt-3" : "mt-6"}`}>
      {todos.length ? (
        <ul className="space-y-3">{todos.map(renderTodoItem)}</ul>
      ) : (
        <p className="text-center text-lg font-semibold text-gray-200">No todos yet</p>
      )}
    </div>
  );
};

export default TodoList;
