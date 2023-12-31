const express = require('express')
const app = express()
const port = 3000

// DATA SOURCES
const todos = [
    {
      title: "Todo 1",
      desc: "This is my first Todo",
      completed: true,
    },
  
    {
     title: "Todo 2",
     desc: "Second one here",
     completed:false,
    },

    {
      title: "Todo 3",
      desc: "This is my third",
      completed: true,
    },
  
    {
      title: "Todo 3",
      desc: "This is my third Todo",
      completed: true,
    },
  
    {
      title: "Todo 4",
      desc: "This is my fourth Todo",
      completed: true,
    },
  
    {
      title: "Todo 5",
      desc: "This is my fifth Todo",
      completed: true,
    },
  ];
  // DATA SOURCE ENDS HERE

  //ENDPOINTS START HERE
  app.get("/", (request, response) => {
    response.status(200).json(todos);
  });
  
  app.get("/todos", (request, response) => {
    response.status(200).json(todos);
  });
  
  app.get("/todos/:id", (request, response) => {
    response
      .status(200)
      .json({ data: todos.find((todo) => todo.id === request.params.id) });
  });
  
  app.post("/todos", (request, response) => {
    todos.push(request.body);
    response.status(201).json({ msg: "Todo created successfully" });
  });
  
  app.put("/todos/:id", (request, response) => {
    const todo = todos.find((todo) => todo.id === request.params.id);
    if (todo) {
      const { title, desc, completed } = request.body;
      todo.title = title;
      todo.desc = desc;
      todo.completed = completed;
      response.status(200).json({ msg: "Todo updated sucessfully" });
      return;
    }
    response.status(404).json({ msg: "Todo not found" });
  });
  
  app.delete("/todos/:id", (request, response) => {
    const todoIndex = todos.findIndex((todo) => (todo.id = request.params.id));
    if (todoIndex) {
      todos.splice(todoIndex, 1);
      response.status(200).json({ msg: "Todo deleted successfully" });
    }
    response.status(404).json({ msg: "Todo not found" });
  });
  // Endpoint ends here
  
  // The App listens to incoming requests here
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${3000}`);
  });