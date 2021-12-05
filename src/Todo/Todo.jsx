import { useState } from "react";
import TodoList from "./TodoList";
import Header from "../Components/Header";
import TodoItem from "./TodoItem";
import styles from "./Style.module.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = (title, e) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
    // e.target.value = "";
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id
        ? { ...item, status: item.status === "true" ? "false" : "true" }
        : item
    );
    setTodos(updatedTodos);
  };
  console.log(todos);
  return (
    <div className={styles.container}>
      <Header title="Todo List" />
      {todos.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
      <TodoList onTextCreate={handleTaskCreate} />
    </div>
  );
};

export default Todo;
