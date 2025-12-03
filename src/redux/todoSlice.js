import { createSlice } from "@reduxjs/toolkit";
import { loadTodos, saveTodos } from "../utils/storage";

const todoSlice = createSlice({
  name: "todos",
  initialState: loadTodos(),
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        editedAt: null,
      };
      state.push(newTodo);
      saveTodos(state);
    },
    deleteTodo: (state, action) => {
      const updated = state.filter((t) => t.id !== action.payload);
      saveTodos(updated);
      return updated;
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state);
      }
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
        todo.editedAt = new Date().toLocaleString();
        saveTodos(state);
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
