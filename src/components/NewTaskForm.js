import React, { useState } from "react";

function NewTaskForm(props) {
  const { categories, onTaskFormSubmit } = props;
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]); // Set default category

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new task object
    const newTask = {
      id: Date.now(),
      text: text,
      category: category,
    };
    // Call the callback function from props
    onTaskFormSubmit(newTask);
    // Reset form inputs
    setText("");
    setCategory(categories[0]);
  };

  return (
    <div>
      <h3>New Task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Task text:
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default NewTaskForm;
