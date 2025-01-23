import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const updateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }
    return todo.isCompleted === (filter === "completed");
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-mono">
      <div className="w-full max-w-xl bg-gray-100 rounded-lg shadow-lg p-6">
        <TodoHeader>TodoList App</TodoHeader>
        <div className="flex items-center justify-between">
        <TodoFilter
            filter={filter}
            onFilterChange={handleFilterChange}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
          <TodoForm onAdd={addTodo} />
        </div>
        <TodoList
          todos={filteredTodos}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
          onUpdateStatus={updateStatus}
        />
      </div>
    </div>
  );
};

export default App;

