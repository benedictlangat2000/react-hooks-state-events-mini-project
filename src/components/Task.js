import React from "react";

function Task(props) {
  const { task, onDelete } = props;

  const handleDelete = () => {
    onDelete(task.id);
  };
  
  return (
    <li>
    <div className="task">
      <div className="text">  <strong>Task:</strong> {props.task.text}</div>
      <div className="label"> <strong>Category:</strong> {props.task.category}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
    </li>
  );
}

export default Task;
