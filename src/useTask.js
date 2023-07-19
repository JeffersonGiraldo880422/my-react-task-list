import React, { useState, useEffect } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("storedTasksMemory");
    if (localStorageData) {
      try {
        const storedTasks = JSON.parse(localStorageData);
        setTasks(storedTasks);
      } catch (err) {
        console.error("Error parsing stored tasks memory from localStorage");
      }
    }
  }, []);

  const createTask = (task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("storedTasksMemory", JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("storedTasksMemory", JSON.stringify(tasks));
  };

  const updateTask = (id, task) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return task;
      }
      return t;
    });
    setTasks(updatedTasks);
    localStorage.setItem("storedTasksMemory", JSON.stringify(tasks));
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
};

export default useTasks;