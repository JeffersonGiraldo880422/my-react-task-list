import React from 'react';
import Task from './Task';

function TaskList({ tasks, onToggleTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;