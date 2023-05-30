const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post("/todos", (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

// Get a specific todo
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
  } else {
    res.json(todo);
  }
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Todo not found" });
  } else {
    todos[index] = updatedTodo;
    res.json(updatedTodo);
  }
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Todo not found" });
  } else {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
