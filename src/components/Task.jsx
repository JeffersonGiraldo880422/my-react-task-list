import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

function Task({ task, onToggleTask, onUpdateTask }) {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );

  const handleToggle = () => {
    onToggleTask(task.id);
  };

  const handleEdit = () => {
    setUpdatedDescription(task.description); // Restaurar el valor original de task.description
    setEditing(true);
  };

  const handleSave = () => {
    if (updatedTitle.trim() !== "") {
      onUpdateTask(task.id, updatedTitle, updatedDescription);
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
    setEditing(false);
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      {editing ? (
        <div>
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
              type="text"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            ></input>
            <button type="submit">Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </form>
        </div>
      ) : (
        <div>
          <p>{task.title}</p>
          {task.description && !editing ? <p>{task.description}</p> : null}
          <FaEdit className="edit-icon" onClick={handleEdit} />
        </div>
      )}
    </li>
  );
}

export default Task;
