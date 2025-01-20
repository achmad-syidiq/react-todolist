import TodoHeader from "./components/TodoHeader"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center font-mono">
      <div className="w-full max-w-2xl bg-gray-500 rounded-lg shadow-lg p-6">
        <TodoHeader>TodoList App</TodoHeader>
      </div>
    </div>
  )
}


export default App