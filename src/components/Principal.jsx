import React, { useState } from 'react';

function Principal() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteCompletedTasks = () => {
    const remainingTasks = tasks.filter((task) => !task.completed);
    setTasks(remainingTasks);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div>
        <input type="text" value={task} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteCompletedTasks}>Borrar tareas completadas</button>
    </div>
  );
}

export default Principal;