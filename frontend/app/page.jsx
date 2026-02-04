'use client';
import { useState, useEffect } from "react";
import axios from "../lib/api";
import TodoList from "../components/todoList/TodoList";

export default function Home() {

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const resTodos = (await axios.get('/api/todos')).data;
    setTodos(resTodos);
  }

  useEffect(() => {
    getTodos();
  }, []);


  const addTodo = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;

    if (!title) return;

    await axios.post('/api/todos', { title });
    e.target.title.value = '';
    getTodos();
  }


  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    getTodos();
  }

  const updateTodo = async (id, completed) => {
    await axios.put(`/api/todos/${id}`, { completed });
    getTodos();
  }

  return (
    <main className="container">
      <h1>Task Master</h1>

      <TodoList
        todos={todos}
        addTodo={addTodo}
        getTodos={getTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </main>
  )
}
