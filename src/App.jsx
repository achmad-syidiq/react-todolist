import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 283291720,
      text: "meeting with client",
      isCompleted: false,
    },
    {
      id: 283291721,
      text: "meeting with boss",
      isCompleted: false,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center font-mono">
      <div className="w-full max-w-xl bg-gray-100 rounded-lg shadow-lg p-6">
        <TodoHeader>TodoList App</TodoHeader>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
};

export default App;
