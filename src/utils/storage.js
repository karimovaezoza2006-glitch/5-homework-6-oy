export const loadTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
