import React, { useEffect, useState } from "react";
import TaskListToDO from "./TaskListToDo";
import "./Task.jsx"; // Import the CSS for styling

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTasks(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const completeTodo = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const inprogressTodo = (index) => {
    const newTasks = [...tasks];
    newTasks[index].inprogress = !newTasks[index].inprogress;
    setTasks(newTasks);
  };

  const removeTodo = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addTodo = (title) => {
    if (title.trim()) {
      const newTasks = [
        ...tasks,
        {
          userId: 1,
          id: tasks.length + 1,
          title,
          completed: false,
          inprogress: false,
        },
      ];
      setTasks(newTasks);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <h1 className="task-title-main">TODO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="add item . . ."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => addTodo(newTask)}>ADD</button>
      </div>
      <div className="task-list">
        {tasks.map((todo, index) => (
          <TaskListToDO
            key={index}
            index={index}
            todo={todo}
            Todocompleted={completeTodo}
            Todoinprogress={inprogressTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Task;
