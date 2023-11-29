import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const randomId = new Date().getTime();
    const newTask = { ...task, id: randomId };
    setTasks([...tasks, newTask]);
  };
  

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newName) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, name: newName } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext debe usarse dentro de un TaskProvider");
  }
  return context;
};
