import React, { useState } from 'react';

function Entrada({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();

    if (taskName.trim().length >= 3) {
      const newTask = {
        id: Date.now(),
        title: taskName,
        description: taskDescription,
        completed: false,
      };

      onAddTask(newTask);
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
    }
  };

  return (
    <div className="entrada">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskName}
          onChange={handleNameChange}
          placeholder="Ingrese el nombre de la tarea..."
          required
        />
        <input
          value={taskDescription}
          onChange={handleDescriptionChange}
          placeholder="Ingrese la descripción de la tarea..."
        ></input>
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
}

export default Entrada;
