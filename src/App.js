import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos]=useState([
    {text:"Learn about react"},
    {text:"Work from 9 am"},
    {text:"Build people app"}
  ])

  const Todo = ({ todo }) => <div className='todo'>{todo.text}</div>;
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,index)=>(
          <Todo 
            key={index}
            index={index}
            todo={todo}
          />

        ))}
      </div>
    </div>
  )
}

export default App;
