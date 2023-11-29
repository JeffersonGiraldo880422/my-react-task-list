import React, { useState } from "react";
import { VStack, Input, Button } from "@chakra-ui/react";
import Task from "./Task.jsx";
import { useTaskContext } from "./TaskContext";

const TaskList = () => {
  const { tasks, addTask, deleteTask } = useTaskContext();
  const [newTask, setNewTask] = useState("");

  const handleCreateTask = () => {
    if (newTask.trim() !== "") {
      addTask({ id: Date.now(), name: newTask });
      setNewTask("");
    }
  };

  return (
    <VStack align="stretch" spacing={4}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
      ))}
      <Input
        placeholder="Nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleCreateTask}>
        Crear Tarea
      </Button>
    </VStack>
  );
};

export default TaskList;
