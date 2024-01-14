import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    onAdd(task)
    setTask('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>Add</button>
        <input
          type="text"
          placeholder="Your New Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <hr/>
    </div>
  );
};

export default TodoForm;
