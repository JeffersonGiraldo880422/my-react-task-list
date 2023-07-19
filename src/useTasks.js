import { useEffect, useState } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("storedTasksMemory", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });

      localStorage.setItem("storedTasksMemory", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleUpdateTask = (id, updatedTitle) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: updatedTitle,
          };
        }
        return task;
      });

      localStorage.setItem("storedTasksMemory", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleDeleteCompletedTasks = () => {
    setTasks((prevTasks) => {
      const remainingTasks = prevTasks.filter((task) => !task.completed);
      localStorage.setItem("storedTasksMemory", JSON.stringify(remainingTasks));
      return remainingTasks;
    });
  };

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

  return {
    tasks,
    handleAddTask,
    handleToggleTask,
    handleUpdateTask,
    handleDeleteCompletedTasks,
  };
};

export default useTasks;