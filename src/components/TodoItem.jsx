import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../redux/todoSlice";
import {
  IconButton,
  Checkbox,
  TextField,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const handleSave = () => {
    if (!value.trim()) return;
    dispatch(editTodo({ id: todo.id, text: value.trim() }));
    setIsEditing(false);
  };

  return (
    <Box
      data-aos="fade-up"
      className="mb-4"
      sx={{
        bgcolor: "rgba(255,255,255,0.12)",
        borderRadius: "20px",
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
        backdropFilter: "blur(15px)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
        <Checkbox
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          color="primary"
          sx={{
            color: "rgba(255,255,255,0.7)",
            "&.Mui-checked": { color: "#3b82f6" },
          }}
        />
        {isEditing ? (
          <TextField
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            fullWidth
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") {
                setIsEditing(false);
                setValue(todo.text);
              }
            }}
            InputProps={{
              sx: {
                color: "#fff",
                borderBottom: "2px solid #3b82f6",
                fontWeight: 600,
                fontSize: "1.1rem",
              },
              disableUnderline: false,
              autoFocus: true,
            }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{
              color: todo.completed ? "rgba(255,255,255,0.5)" : "#fff",
              textDecoration: todo.completed ? "line-through" : "none",
              fontWeight: 600,
              fontSize: "1.125rem",
              userSelect: "none",
            }}
          >
            {todo.text}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {todo.editedAt && !isEditing && (
          <Tooltip title={`So'nggi tahrir vaqti: ${todo.editedAt}`}>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}
            >
              tahrir: {todo.editedAt}
            </Typography>
          </Tooltip>
        )}

        {isEditing ? (
          <IconButton
            color="success"
            onClick={handleSave}
            size="small"
            sx={{ color: "#3b82f6" }}
          >
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            onClick={() => setIsEditing(true)}
            size="small"
            sx={{ color: "rgba(255,255,255,0.8)" }}
          >
            <EditIcon />
          </IconButton>
        )}

        <IconButton
          color="error"
          onClick={() => dispatch(deleteTodo(todo.id))}
          size="small"
          sx={{ color: "rgba(255,255,255,0.8)" }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
