import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Box, Button, ButtonGroup } from "@mui/material";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <Box
      className="max-w-xl mx-auto"
      sx={{ mb: 4, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <ButtonGroup
        variant="contained"
        size="small"
        aria-label="filter todos"
        sx={{ alignSelf: "center" }}
      >
        <Button
          onClick={() => setFilter("all")}
          variant={filter === "all" ? "contained" : "outlined"}
        >
          Barchasi
        </Button>
        <Button
          onClick={() => setFilter("active")}
          variant={filter === "active" ? "contained" : "outlined"}
        >
          Faol
        </Button>
        <Button
          onClick={() => setFilter("completed")}
          variant={filter === "completed" ? "contained" : "outlined"}
        >
          Yakunlangan
        </Button>
      </ButtonGroup>

      {filteredTodos.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "rgba(255,255,255,0.6)", mt: 6 }}
        >
          Vazifa topilmadi
        </Typography>
      ) : (
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </Box>
  );
}
