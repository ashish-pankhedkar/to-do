import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import TodoForm from "./components/TodoForm";
import { getCurrentDateTime, tasksorter } from "./utils/utils";

function App() {
  // use array of tasks and get all tasks from local storage
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Alltasks"))
  );
  // useEffect to update the local storage whenever the task array updates
  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("Alltasks", JSON.stringify(tasks));
    }
  }, [tasks]);
//use Effect to display tasks in sorted order
  useEffect(() => {
    const alltasks = JSON.parse(localStorage.getItem("Alltasks"));
    const sortedTasks = [...alltasks].sort(tasksorter);
    setTasks(sortedTasks);
  }, []);

  // function to add a given task
  function addTask(name) {
    const newId = tasks.length + 1;
    console.log("newId id : " + newId);
    const newTasks = [
      ...tasks,
      {
        name: name,
        done: false,
        id: newId,
        createdAt: getCurrentDateTime(),
        completedAt: null,
      },
    ];

    const sortedTasks = [...newTasks].sort(tasksorter);
    setTasks(sortedTasks);
  }
  
//function to update the checkbox state
  function updateTaskDone(taskIndex, newdone) {
    const newTasks = [...tasks];
    newTasks[taskIndex].done = newdone;
    if (newdone) {
      newTasks[taskIndex].completedAt = getCurrentDateTime();
    } else {
      newTasks[taskIndex].completedAt = null;
    }

    const sortedTasks = [...newTasks].sort(tasksorter);
    setTasks(sortedTasks);
  }

  //function to delete a task
  function deleteTask(taskId) {
    const remainingTask = tasks.filter((task) => task.id !== taskId);
    setTasks(remainingTask);
    if (remainingTask.length === 0) {
      localStorage.setItem("Alltasks", JSON.stringify(tasks));
    }
  }
  return (
    <main>
    <h2>TODO LIST :</h2>
 
      <TodoForm onAdd={addTask} />
      {tasks.map((t, index) => (
        <TaskCard
          {...t}
          onToggle={(done) => updateTaskDone(index, done)}
          onDelete={deleteTask}
        />
      ))}
    </main>
  );
}

export default App;
