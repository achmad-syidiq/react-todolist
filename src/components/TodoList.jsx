/* eslint-disable react/prop-types */
const TodoList = ({ todos }) => {
  return (
    <div className="bg-gray-400 p-4 shadow-lg rounded-lg mt-6">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md"
            key={todo.id}
          >
            <div className="flex gap-2 items-center">
              <input className="h-5 w-5 text-indigo-600" type="checkbox" />
              <span className="text-lg font-semibold text-gray-600">{todo.text}</span>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-200 rounded-md">✏️</button>
              <button className="p-2 bg-gray-200 rounded-md">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
