import React, { useState } from 'react';

function Entrada({ onAddTask }) {
  const [task, setTask] = useState('');

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

      onAddTask(newTask);
      setTask('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="entrada">
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Ingrese una nueva tarea..."
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
    </div>
  );
}

export default Entrada;