import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//const Todo =({ todo })=><div className="todo">{todo.text}</div>
function Todo({todo, index, completeTodo,removeTodo}) {
  return (
    <div
      className="todo"
      style={{textDecoration:todo.isCompleted ? "line-through":""}}
    >
      {todo.text}
      <div>
        <button onClick={()=>completeTodo(index)}>Complete</button>
      </div>
      <div>
        <button onClick={()=>removeTodo(index)}>x</button>
      </div>
    </div>

  );
  
}
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
  const [todos,setTodos] = useState([
    {
      text:"work from 9 am",
      isCompleted:false
    },
    {
      text:"study react concepts",
      isCompleted:false
    },
    {
      text:"build people application",
      isCompleted:false
    }
  ]);

  const addToDo = text => {
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, index) => (
          <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
          />
       ))}
       <TodoForm addToDo={addToDo}/>
      </div>
    </div>
  )
}
  
export default App;
