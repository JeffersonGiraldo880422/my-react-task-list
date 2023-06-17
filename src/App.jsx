import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Entrada from './components/Entrada';
import TaskList from './components/TaskList';
import Eliminar from './components/Eliminar';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    let storedTasks = [...tasks];
    localStorage.setItem("storedTasksMemory",JSON.stringify(storedTasks));
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
    storedTasks = [...tasks];
    localStorage.setItem("storedTasksMemory",JSON.stringify(storedTasks));
  };

  const handleDeleteCompletedTasks = () => {
    const remainingTasks = tasks.filter((task) => !task.completed);
    setTasks(remainingTasks);
    storedTasks = [...tasks];
    localStorage.setItem("storedTasksMemory",JSON.stringify(storedTasks));
  };

  useEffect (() => {
    const localStorageData = localStorage.getItem("storedTasksMemory");
    if (localStorageData) {
      try{
        const storedTasks = JSON.parse(localStorageData);
        setTasks(storedTasks);
      }catch(err){
        console.err("Error parsing stored tasks memory from localStorage")
      }
    }
  },[]);

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
