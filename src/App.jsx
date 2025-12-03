import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 py-12 px-4">
      <h1 className="text-center text-white text-5xl font-extrabold mb-12 drop-shadow-lg">
        📝 Todo List
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
