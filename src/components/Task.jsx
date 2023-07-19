import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

function Task({ task, onToggleTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    onToggleTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }

    onUpdateTask(task.id, title, description);
    setIsEditing(false);
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
      ) : (
        <div>
          <span>{task.title}</span>
          <span>{task.description}</span>
          <FaEdit className="edit-icon" onClick={handleEdit} />
        </div>
      )}
    </li>
  );
}

export default Task;