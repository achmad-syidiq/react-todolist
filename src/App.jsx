import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-mono">
      <div className="w-full max-w-xl bg-gray-100 rounded-lg shadow-lg p-6">
        <TodoHeader>TodoList App</TodoHeader>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
