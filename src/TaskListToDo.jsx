import React from "react";

function TaskListToDO({
  todo,
  index,
  Todocompleted,
  Todoinprogress,
  removeTodo,
}) {
  return (
    <div className="task-item">
      <div
        className="task-title"
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </div>
      <div className="task-buttons">
        <button onClick={() => Todocompleted(index)}>Completed</button>
        <button onClick={() => Todoinprogress(index)}>In Progress</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default TaskListToDO;
