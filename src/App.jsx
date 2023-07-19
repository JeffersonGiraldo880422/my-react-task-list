import React from 'react';
import { FaEdit } from 'react-icons/fa';
import Header from './components/Header';
import Entrada from './components/Entrada';
import TaskList from './components/TaskList';
import Eliminar from './components/Eliminar';
import useTasks from './useTasks';

import './App.css';

function App() {
  const { tasks, handleAddTask, handleToggleTask, handleUpdateTask, handleDeleteCompletedTasks } = useTasks();

  return (
    <div className="app">
      <Header title="App para Lista de Tareas" />
      <Entrada onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onUpdateTask={handleUpdateTask} />
      <Eliminar onDeleteCompletedTasks={handleDeleteCompletedTasks} />
    </div>
  );
}

export default App;