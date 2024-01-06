import "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updadateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let MarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllAsDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone:true,
        };
      })
    );
  };

  let deleteAll = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id == id));
  };

  return (
    <div>
      <div className="TodoList">
        <div className="input">
          <input
            type="text"
            className="input_box"
            placeholder="enter a task"
            value={newTodo}
            onChange={updadateNewTodo}
          />
          <button onClick={addnewTodo}>Add Task</button>
        </div>
        <h4>
          <u>Task to be Done</u>
        </h4>
        <h3 style={{marginTop:"0px",color:"purple",fontFamily:"cursive"}}>{todos.length==0?"List is Empty! Add new task":""}</h3>
        <ol style={{fontWeight:"bold"}}>
          {todos.map((todo) => {
            return (
              <li key={todo.id} >
                <span style={todo.isDone?{textDecoration:"line-through",color:"red",backgroundColor:"white"}:{color:"green",backgroundColor:"white"}} >
                  <span style={{fontSize:"25px",fontWeight:"bold"}}>{todo.task}</span>
                </span>
                &nbsp;&nbsp;
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => upperCaseOne(todo.id)}
                >
                  UpperCase One
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => MarkAsDone(todo.id)}
                >
                  Mark As Done
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="footer">
        <button onClick={upperCaseAll}>UpperCase All</button>
        <button onClick={markAllAsDone}>Mark All As Done</button>
        <button  onClick={()=>deleteAll(todos.id)}>Delete All</button>
      </div>
    </div>
  );
}
