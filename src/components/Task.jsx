import React from 'react';

function Task({ task, onToggleTask }) {
  const handleToggle = () => {
    onToggleTask(task.id);
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span>{task.title}</span>
    </li>
  );
}

export default Task;