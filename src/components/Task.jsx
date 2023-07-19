import React from 'react';
import { FaEdit } from 'react-icons/fa';

function Task({ task, onToggleTask, onUpdateTask }) {
  const handleToggle = () => {
    onToggleTask(task.id);
  };

  const handleEdit = () => {
    const updatedTitle = prompt("Ingrese el nuevo título de la tarea:", task.title);
    if (updatedTitle !== null) {
      onUpdateTask(task.id, updatedTitle);
    }
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span>{task.title}</span>
      <FaEdit className="edit-icon" onClick={handleEdit} />
    </li>
  );
}

export default Task;