import React, { useState } from "react";
import { Flex, Checkbox, IconButton, Input, Button } from "@chakra-ui/react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useTaskContext } from "./TaskContext";

const Task = ({ task }) => {
  const { deleteTask, editTask } = useTaskContext();
  const [isChecked, setIsChecked] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);
  const [editMode, setEditMode] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onEdit = () => {
    setEditMode(true);
  };

  const handleCreateTask = () => {
    if (editMode) {
      editTask(task.id, newTaskName);
      setEditMode(false);
    } else {
      editTask(task.id, newTaskName);
      setNewTaskName("");
    }
  };

  return (
    <Flex alignItems="center" justify="space-between" p={2}>
      <Flex>
        {editMode ? (
          <Input
            placeholder="Editar tarea"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            mr={2}
          />
        ) : (
          <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}>
            {isChecked ? <s>{task.name}</s> : task.name}
          </Checkbox>
        )}

        {editMode && (
          <Button
            colorScheme="teal"
            leftIcon={<FaCheck />}
            onClick={handleCreateTask}
            ml={2} // Añade espacio a la izquierda del botón
          >
            Guardar
          </Button>
        )}

        <IconButton
          icon={<FaEdit />}
          aria-label="Editar tarea"
          onClick={onEdit}
          ml={2} // Añade espacio a la izquierda del botón
        />
        <IconButton
          icon={<FaTrash />}
          aria-label="Eliminar tarea"
          onClick={() => deleteTask(task.id)}
          ml={2} // Añade espacio a la izquierda del botón
        />
      </Flex>
    </Flex>
  );
};

export default Task;
