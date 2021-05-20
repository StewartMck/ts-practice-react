import React, {useState} from 'react'
import ToDoList from "./components/ToDoList";
import NewToDo from './components/NewToDo';
import {Todo} from './todo.models'


function App() {
  // const todos = [{ id: 1, text: "Finish the course" }];
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
  //  setTodos([...todos, {id: Math.random().toString(), text: text}])
   setTodos(prevToDos => [...prevToDos, {id: Math.random().toString(), text: text}])
  }

  
  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== todoId)
    })
      
  }


  return (
    <div className="App">
      <NewToDo onAddToDo={todoAddHandler}/>
      <ToDoList items={todos} onDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
