import React from 'react';
import Task from './Task';

function TaskList({ tasks, onToggleTask, onUpdateTask }) {
  const sortedTasks = tasks.sort((a, b) => a.order - b.order);

  return (
    <ul className="task-list">
      {sortedTasks.length === 0 ? (
        <li>No hay tareas</li>
      ) : (
        sortedTasks.map((task) => (
          <Task key={task.id} task={task} onToggleTask={onToggleTask} onUpdateTask={onUpdateTask} />
        ))
      )}
    </ul>
  );
}

export default TaskList;