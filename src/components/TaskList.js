import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks, onDeleteTask } = props;
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <h3>Task List</h3>
      <ul>
      {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
