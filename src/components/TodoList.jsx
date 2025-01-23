import { AiFillEdit, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoList = ({ todos, onUpdate, onDelete, onUpdateStatus }) => {
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

  const handleUpdateStatus = (id) => {
    console.log(id);
    onUpdateStatus(id);
  };
  const handleDelete = (id) => {
    onDelete(id);
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
            <input
              className="h-4 w-4 mr-2 rounded"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdateStatus(todo.id)}
              id={todo.id}
            />
            <label
              htmlFor={todo.id}
              className={`font-semibold text-lg ${
                !todo.isCompleted ? "text-gray-700" : "text-gray-400 line-through"
              }`}
            >
              {todo.text}
            </label>
          </div>
          <div className="flex gap-2">
            <button
              className="p-2 bg-green-500 rounded-md text-white"
              onClick={() => handleEdit(todo.id)}
            >
              <AiFillEdit className="text-2xl" />{" "}
            </button>
            <button
              className="p-2 bg-red-500 rounded-md text-white"
              onClick={() => handleDelete(todo.id)}
            >
              <AiFillDelete className="text-2xl" />
            </button>
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
