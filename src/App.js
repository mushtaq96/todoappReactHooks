import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Todo =({ todo })=><div className="todo">{todo.text}</div>

function TodoForm({ addToDo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value)
      return;
    addToDo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e=>setValue(e.target.value)}
      />
    </form>
  );
}

function App(){
  const [todos, setTodos] = useState([
    { text:"Learn about react" },
    {text: "work rom 9 am"},
    {text:"develop people react app"}
  ]);

  const addToDo = text=>{
    const newTodos = [...todos,{ text }];
    setTodos(newTodos);
  };
  return(
    <div className="app">
      <div className="todo-list">
      
      <TodoForm addToDo={addToDo}/>

        {todos.map((todo,index)=>(
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>

  );
}
export default App;
