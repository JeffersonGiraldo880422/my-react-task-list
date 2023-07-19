import React, { useState, useEffect } from 'react';
import useTasks from './useTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const { createTask, deleteTask, updateTask } = useTasks();

  const handleAddTask = (newTask) => {
    if (newTask.trim() !== '') {
      createTask(newTask);
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
    <div className="app">
      <Header title="App para Lista de Tareas" />
      <Entrada onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
      <Eliminar onDeleteCompletedTasks={handleDeleteCompletedTasks} />
    </div>
  );
};

export default App;