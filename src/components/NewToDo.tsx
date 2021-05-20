import React, { useRef } from "react";
import './NewTodo.css'

type NewTodoProps = {
    onAddToDo: (todoText: string) => void;
}


const NewToDo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText)
  };

  return (
    <form onSubmit={todoSubmitHandler} className="form-control">
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewToDo;
