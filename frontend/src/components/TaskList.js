import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../components/Task';

const TaskList = () => {
  const [task, setTask] = useState([]);
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:4000/api/task');
    setTask(res.data);
  };

  const addTask = async () => {
    const newTask = { Name, Description };
    const res = await axios.post('http://localhost:4000/api/task', newTask);
    setTask([...task, res.data]);
  };

  const markComplete = async (id) => {
    await axios.put(`http://localhost:4000/api/task/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:4000/api/task/${id}`);
    fetchTasks();
  };

  return (
    <div>
      <h1>📋 To-Do-List</h1>
      <input
        type="text"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <div>
        {task.map((task) => (
          <Task key={task._id} task={task} markComplete={markComplete} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
