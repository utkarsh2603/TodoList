import "./App.css";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from "./TodoList.jsx";

function App() {
  return (
    <>
    <h2><u>Todo List</u></h2>
      <TodoList />
    </>
  );
}

export default App;
