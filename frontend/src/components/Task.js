import React from 'react';

const Task = ({ task, markComplete, deleteTask }) => {
  return (
    <div className="task" >
      <h3>{task.Name}</h3>
      <p>{task.Description}</p>
      <button onClick={() => markComplete(task._id)}>Mark as Complete</button>
      <button onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
  );
};

export default Task;
