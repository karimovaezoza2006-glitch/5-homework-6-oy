import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { TextField, Button, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      data-aos="fade-up"
      className="flex gap-4 mb-8 bg-white/10 backdrop-blur-md rounded-3xl p-5 shadow-lg max-w-xl mx-auto"
      sx={{ alignItems: "center" }}
    >
      <TextField
        variant="filled"
        size="medium"
        placeholder="Yangi vazifa qo'shish..."
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          disableUnderline: true,
          sx: {
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: "20px",
            color: "#fff",
            fontWeight: "500",
            px: 3,
            py: 1.5,
            "& .MuiInputBase-input": {
              color: "#fff",
            },
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{
          px: 5,
          py: 1.7,
          borderRadius: "20px",
          fontWeight: "600",
          textTransform: "none",
          boxShadow:
            "0 8px 15px rgba(49, 130, 206, 0.3), 0 2px 4px rgba(49, 130, 206, 0.2)",
          "&:hover": {
            boxShadow:
              "0 12px 20px rgba(49, 130, 206, 0.5), 0 6px 6px rgba(49, 130, 206, 0.3)",
          },
        }}
      >
        Qo'shish
      </Button>
    </Box>
  );
}
