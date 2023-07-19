import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Entrada from './components/Entrada';
import TaskList from './components/TaskList';
import Eliminar from './components/Eliminar';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("storedTasksMemory", JSON.stringify(updatedTasks));
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
    localStorage.setItem("storedTasksMemory", JSON.stringify(updatedTasks));
  };

  const handleDeleteCompletedTasks = () => {
    const remainingTasks = tasks.filter((task) => !task.completed);
    setTasks(remainingTasks);
    localStorage.setItem("storedTasksMemory", JSON.stringify(remainingTasks));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("storedTasksMemory");
    if (localStorageData) {
      try {
        const storedTasks = JSON.parse(localStorageData);
        setTasks(storedTasks);
      } catch (err) {
        console.error("Error parsing stored tasks memory from localStorage");
      }
    }
  }, []);

  return (
    <div className="app">
      <Header title="App para Lista de Tareas" />
      <Entrada onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
      <Eliminar onDeleteCompletedTasks={handleDeleteCompletedTasks} />
    </div>
  );
}

export default App;